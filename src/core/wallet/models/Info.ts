import Balance from '@/core/wallet/models/Balance'
import AddressInfo from '@/core/wallet/models/AddressInfo'

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
