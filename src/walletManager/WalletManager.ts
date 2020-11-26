// @ts-ignore
import Client from '@/walletManager/Client'
import Wallet from '@/walletManager/Wallet'
import ManagerConfig, { WalletConfigItem } from '@/walletManager/ManagerConfig'
import constants from '@/support/constants'
import { Store } from 'vuex'

export default class WalletManager {
  protected store: Store<WalletConfigItem[]>
  protected ticker?: number

  public readonly wallets: Wallet[] = []

  constructor (store: Store<WalletConfigItem[]>) {
    this.store = store
  }

  public async boot (config: ManagerConfig) {
    this.stopTicker()

    for (const walletConfig of config.wallets) {
      try {
        const bitcoreClient = this.getClient(walletConfig)
        const wallet = new Wallet(
          walletConfig.name,
          walletConfig.icon,
          walletConfig.tag,
          bitcoreClient,
          walletConfig.address
        )
        await wallet.open()

        this.wallets.push(wallet)
        console.log(`wallet opened: ${wallet.name}`)
      } catch (e) {
        console.error(e)
      }
    }

    this.startTicker()
  }

  public getWallet (name: string): Wallet | undefined {
    return this.wallets.find((wallet) => wallet.name === name)
  }

  public getWallets (): Wallet[] {
    return this.wallets
  }

  public async addWallet (walletConfig: WalletConfigItem): Promise<Wallet> {
    console.log(walletConfig)
    const bitcoreClient = this.getClient(walletConfig)
    const wallet = new Wallet(walletConfig.name, walletConfig.icon, walletConfig.tag, bitcoreClient)

    await wallet.create(walletConfig.name, walletConfig.name, 1, 1, {
      coin: walletConfig.coin,
      network: walletConfig.network,
      singleAddress: walletConfig.singleAddress
    })
    await wallet.open()
    this.store.commit('ADD_WALLET', walletConfig)
    this.wallets.push(wallet)
    console.log(`wallet added: ${wallet.name}`)

    this.restartTicker()

    return wallet
  }

  public async updateWallet (name: string, wallet: Wallet): Promise<Wallet> {
    const walletConfig = await this.getWalletConfig(name)
    // @ts-ignore
    walletConfig.apiEndpoint = wallet.bitcoreClient.request.baseUrl
    walletConfig.name = wallet.name!
    walletConfig.icon = wallet.icon!
    walletConfig.tag = wallet.tag!

    this.store.commit('UPDATE_WALLET', walletConfig)
    console.log(`wallet updated: ${wallet.name}`)

    this.restartTicker()

    return wallet
  }

  public removeWallet (wallet: Wallet) {
    this.wallets.splice(this.wallets.findIndex(w => w === wallet), 1)
    this.getWalletConfig(wallet.name).then(walletConfig => {
      this.store.commit('REMOVE_WALLET', walletConfig)
    })

    console.log(`wallet removed: ${wallet.name}`)
  }

  public getDerivedXPrivKey (wallet: Wallet): Promise<object> {
    return wallet.getCredentials().getDerivedXPrivKey()
  }

  protected getClient (walletConfig: WalletConfigItem): Client {
    const bitcoreClient = new Client({
      baseUrl: walletConfig.apiEndpoint || constants.bitcoreClientApi,
      verbose: false
    })

    bitcoreClient.seedFromMnemonic(walletConfig.restoreKey, walletConfig)

    return bitcoreClient
  }

  protected async getWalletConfig (name: string): Promise<WalletConfigItem> {
    const wallet = await this.store.dispatch('getWallet', name)

    if (wallet === undefined || wallet === null) {
      throw Error(`Couldn't load wallet: ${name}`)
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
