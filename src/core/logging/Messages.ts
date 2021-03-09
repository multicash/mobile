import Wallet from '@/core/wallet/Wallet'

export default class Messages {
  static wallet (message: string, wallet: Wallet): string {
    return `${message} (coin: ${(wallet.info?.wallet.coin || '').toUpperCase()}, network: ${(wallet.info?.wallet.network || '').toUpperCase()}, id: ${wallet.identifier})`
  }
}
