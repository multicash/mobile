/*
  MultiCash Mobile
  Copyright (C) 2021  MultiCash Developers

  This program is free software: you can redistribute it and/or modify
  it under the terms of the GNU General Public License as published by
  the Free Software Foundation, either version 3 of the License, or
  any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
  along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

import Client from '@/core/wallet/Client'
import Wallet from '@/core/wallet/Wallet'
import ManagerConfig, { WalletConfigItem } from '@/core/wallet/ManagerConfig'
import { Store } from 'vuex'
import { WalletOrderState } from '@/store/modules/WalletOrder'
import UUID from '@/core/support/UUID'
import constants from '@/core/support/constants'
import ClientInterface from '@/core/wallet/ClientInterface'
import Messages from '@/core/logging/Messages'

const Log = Logger.extend('WM')

export default class WalletManager {
  protected walletStore: Store<WalletConfigItem[]>
  protected walletOrderStore: Store<WalletOrderState>
  protected ticker?: number
  protected tempWalletStore: any = {}

  public readonly wallets: Wallet[] = []

  constructor (walletStore: Store<WalletConfigItem[]>, walletOrderStore: Store<WalletOrderState>) {
    this.walletStore = walletStore
    this.walletOrderStore = walletOrderStore
  }

  public async boot (config: ManagerConfig) {
    this.stopTicker()
    this.wallets.splice(0, this.wallets.length)

    for (const walletConfig of config.wallets) {
      try {
        const multicoreClient = this.getClient(walletConfig)
        const wallet = new Wallet(
          walletConfig.identifier || this.generateWalletIdentifier(),
          walletConfig.name,
          walletConfig.icon,
          walletConfig.tag,
          multicoreClient,
          walletConfig.address
        )
        await wallet.open()

        if (undefined === wallet.address) {
          const addressInfo = await wallet.getAddress()
          wallet.address = addressInfo.address
        }

        this.wallets.push(wallet)
        Log.info(`Opened wallet (coin: ${walletConfig.coin.toUpperCase()}, network: ${walletConfig.network.toUpperCase()}, id: ${walletConfig.identifier})`)
      } catch (e) {
        Log.error(`Opening wallet failed (coin: ${walletConfig.coin.toUpperCase()}, network: ${walletConfig.network.toUpperCase()}, id: ${walletConfig.identifier})`)
      }
    }

    this.startTicker()
  }

  public getWallet (identifier: string): Wallet | undefined {
    return this.wallets.find(wallet => wallet.identifier === identifier)
  }

  public getWallets (): Wallet[] {
    return this.wallets
  }

  public getOrderedWallets (): Wallet[] {
    const order = this.walletOrderStore.getters.getWalletOrder
    const wallets = this.wallets

    if (wallets.length !== order.length) {
      return wallets
    }

    return order.map((identifier: string) => {
      return wallets.find(wallet => wallet.identifier === identifier)
    })
  }

  public async addWallet (walletConfig: WalletConfigItem): Promise<Wallet> {
    const multicoreClient = this.getClient(walletConfig)
    const wallet = new Wallet(
      walletConfig.identifier || this.generateWalletIdentifier(),
      walletConfig.name,
      walletConfig.icon,
      walletConfig.tag,
      multicoreClient
    )

    await wallet.create(walletConfig.name, walletConfig.name, 1, 1, {
      coin: walletConfig.coin,
      network: walletConfig.network,
      singleAddress: walletConfig.singleAddress
    })
    await wallet.open()
    const addressInfo = await wallet.createAddress()
    walletConfig.address = wallet.address = addressInfo.address

    this.walletStore.commit('ADD_WALLET', walletConfig)
    this.walletOrderStore.commit('ADD_TO_WALLET_ORDER', walletConfig.identifier)
    this.wallets.push(wallet)

    Log.info(Messages.wallet('Added wallet', wallet))

    this.restartTicker()

    return wallet
  }

  public async updateWallet (identifier: string, wallet: Wallet): Promise<Wallet> {
    this.walletStore.commit('UPDATE_WALLET', wallet)

    Log.info(Messages.wallet('Updated wallet', wallet))

    this.restartTicker()

    return wallet
  }

  public removeWallet (wallet: Wallet): void {
    this.wallets.splice(this.wallets.findIndex(w => w === wallet), 1)
    this.getWalletConfig(wallet.identifier).then(walletConfig => {
      this.walletStore.commit('REMOVE_WALLET', walletConfig)
      this.walletOrderStore.commit('REMOVE_FROM_WALLET_ORDER', walletConfig.identifier)
    })

    Log.info(Messages.wallet('Removed wallet', wallet))
  }

  public defaultWallet (): Wallet | undefined {
    return this.wallets[0]
  }

  public getDerivedXPrivKey (wallet: Wallet): Promise<object> {
    return wallet.getCredentials().getDerivedXPrivKey()
  }

  public storeTempWallet (walletConfig: WalletConfigItem): WalletConfigItem {
    const identifier = this.generateWalletIdentifier()
    Log.info('Generated identifier', identifier)

    this.tempWalletStore[identifier] = { ...walletConfig, identifier }

    return this.tempWalletStore[identifier]
  }

  public getTempWallet (identifier: string): WalletConfigItem|null {
    return this.tempWalletStore[identifier] || null
  }

  public generateKey (): object {
    return new Client.Key({
      seedType: 'new'
    })
  }

  protected generateWalletIdentifier (): string {
    return UUID.create()
  }

  protected getClient (walletConfig: WalletConfigItem): ClientInterface {
    const words = walletConfig.restoreKey
    const key = new Client.Key({ seedData: words, seedType: 'mnemonic' })

    const credentials = key.createCredentials(null, {
      coin: walletConfig.coin,
      network: walletConfig.network,
      account: 0,
      n: 1
    })

    const multicoreClient = new Client({
      baseUrl: walletConfig.apiEndpoint || constants.walletServiceApi,
      verbose: false
    })

    multicoreClient.fromObj(credentials)

    Log.info(`Client created for (coin: ${walletConfig.coin.toUpperCase()}, network: ${walletConfig.network.toUpperCase()}, id: ${walletConfig.identifier})`)

    return multicoreClient
  }

  protected async getWalletConfig (identifier: string): Promise<WalletConfigItem> {
    const wallet = await this.walletStore.dispatch('getWallet', identifier)

    if (wallet === undefined || wallet === null) {
      throw Error(`Couldn't load wallet: ${identifier}`)
    }

    return wallet
  }

  protected startTicker () {
    if (this.ticker) {
      this.stopTicker()
    }

    const fetch = async () => {
      for (const wallet of this.wallets) {
        try {
          await wallet.status()
          await wallet.fetchTxHistory()
        } catch (e) {
          Log.error('Fetch error', e)
        }
      }
    }

    // @ts-ignore
    this.ticker = setInterval(fetch, 30000)

    fetch().catch(e => {
      Log.error('Ticker error', e)
    })
  }

  protected stopTicker () {
    if (this.ticker) {
      clearInterval(this.ticker)
      this.ticker = undefined
    }
  }

  protected restartTicker () {
    this.stopTicker()
    this.startTicker()
  }
}
