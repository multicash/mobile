import Client from '@/wallet/Client'
import Wallet from '@/wallet/Wallet'
import ManagerConfig, { WalletConfigItem } from '@/wallet/ManagerConfig'
import constants from '@/support/constants'
import { Store } from 'vuex'
import { WalletOrderState } from '@/store/modules/WalletOrder'
import UUID from '@/support/UUID'

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
        const bitcoreClient = this.getClient(walletConfig)
        const wallet = new Wallet(
          walletConfig.identifier || this.generateWalletIdentifier(),
          walletConfig.name,
          walletConfig.icon,
          walletConfig.tag,
          bitcoreClient,
          walletConfig.address
        )
        await wallet.open()

        this.wallets.push(wallet)
        console.log(`wallet opened: ${wallet.identifier}`)
      } catch (e) {
        console.error(e)
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
    const bitcoreClient = this.getClient(walletConfig)
    const wallet = new Wallet(
      walletConfig.identifier || this.generateWalletIdentifier(),
      walletConfig.name,
      walletConfig.icon,
      walletConfig.tag,
      bitcoreClient
    )

    await wallet.create(walletConfig.name, walletConfig.name, 1, 1, {
      coin: walletConfig.coin,
      network: walletConfig.network,
      singleAddress: walletConfig.singleAddress
    })
    await wallet.open()
    this.walletStore.commit('ADD_WALLET', walletConfig)
    this.walletOrderStore.commit('ADD_TO_WALLET_ORDER', walletConfig.identifier)
    this.wallets.push(wallet)
    console.log(`wallet added: ${wallet.identifier}`)

    this.restartTicker()

    return wallet
  }

  public async updateWallet (identifier: string, wallet: Wallet): Promise<Wallet> {
    this.walletStore.commit('UPDATE_WALLET', wallet)
    console.log(`wallet updated: ${wallet.identifier}`)

    this.restartTicker()

    return wallet
  }

  public removeWallet (wallet: Wallet): void {
    this.wallets.splice(this.wallets.findIndex(w => w === wallet), 1)
    this.getWalletConfig(wallet.identifier).then(walletConfig => {
      this.walletStore.commit('REMOVE_WALLET', walletConfig)
      this.walletOrderStore.commit('REMOVE_FROM_WALLET_ORDER', walletConfig.identifier)
    })

    console.log(`wallet removed: ${wallet.identifier}`)
  }

  public defaultWallet (): Wallet | undefined {
    return this.wallets[0]
  }

  public getDerivedXPrivKey (wallet: Wallet): Promise<object> {
    return wallet.getCredentials().getDerivedXPrivKey()
  }

  public storeTempWallet (walletConfig: WalletConfigItem): WalletConfigItem {
    const identifier = this.generateWalletIdentifier()
    console.log(identifier)

    this.tempWalletStore[identifier] = { ...walletConfig, identifier }

    return this.tempWalletStore[identifier]
  }

  public getTempWallet (identifier: string): WalletConfigItem|null {
    return this.tempWalletStore[identifier] || null
  }

  protected generateWalletIdentifier (): string {
    return UUID.create()
  }

  protected getClient (walletConfig: WalletConfigItem): Client {
    const bitcoreClient = new Client({
      baseUrl: walletConfig.apiEndpoint || constants.bitcoreClientApi,
      verbose: false
    })

    bitcoreClient.seedFromMnemonic(walletConfig.restoreKey, walletConfig)

    return bitcoreClient
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
          console.error(e)
        }
      }
    }

    this.ticker = setInterval(fetch, 30000)

    fetch()
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
