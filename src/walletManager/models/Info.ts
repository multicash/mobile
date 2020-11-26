import Balance from '@/walletManager/models/Balance'
import AddressInfo from '@/walletManager/models/AddressInfo'

export default interface Info {
  name: string
  balance: Balance
  wallet: {
    coin: string
    network: string
    singleAddress: boolean
  },
  addresses?: AddressInfo[]
}
