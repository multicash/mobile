export default class ManagerConfig {
  public readonly wallets: WalletConfigItem[]

  constructor (wallets: WalletConfigItem[]) {
    this.wallets = wallets
  }
}

export interface WalletConfigItem {
  identifier?: string
  name: string
  icon: string
  tag: string
  coin: string
  network: string
  restoreKey: string
  address?: string
  walletPrivateKey?: string
  singleAddress: boolean
  apiEndpoint?: string
}
