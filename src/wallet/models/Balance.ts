export default interface Balance {
  totalAmount: number
  lockedAmount: number
  totalConfirmedAmount: number
  lockedConfirmedAmount: number
  availableAmount: number
  availableConfirmedAmount: number
  byAddress: BalanceAddress[]
}

export interface BalanceAddress {
  address: string
  path: string
  amount: number
}
