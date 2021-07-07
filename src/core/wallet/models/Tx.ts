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

export default interface Tx {
  id: string
  txid: string
  confirmations: number
  blockheight: number
  fees: number
  time: number
  size: number
  action: string
  amount: number
  addressTo?: boolean
  outputs: TxOutput[]
  createdOn?: number
  proposalId?: string
  creatorName?: string
  actions?: TxAction[]
}

export interface TxOutput {
  address: boolean
  amount: number
}

export interface TxAction {
  createdOn: number
  type: string
  copayerId: string
  copayerName: string
}
