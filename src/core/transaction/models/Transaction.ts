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

import Wallet from '@/core/wallet/Wallet'
import Contact from '@/core/contacts/models/Contact'
import { TxProposalResponse } from '@/core/wallet/models/TxProposal'

export interface TransactionIcon {
  title: string
  tagOrAddress: string|null
  amount: number|null
  image: string|null
  icon: string|null
  iconColor: string|null
}

export default class Transaction {
  private _from: Wallet|Contact|null
  private _to: Wallet|Contact|null
  private _amount: number|null
  private _label: string|null
  private _isReceive: boolean = false
  private _txid: string|null = null

  constructor (
    from: Wallet | Contact | null = null,
    to: Wallet | Contact | null = null,
    amount: number | null = null,
    label: string | null = null,
    isReceive: boolean = false
  ) {
    this._from = from
    this._to = to
    this._amount = amount
    this._label = label
    this._isReceive = isReceive
  }

  public static byAmount (amount: number, isReceive: boolean = false): Transaction {
    return new this(null, null, amount, null, isReceive)
  }

  public setWallet (wallet: Wallet): void {
    if (this._isReceive === null) {
      throw new Error('Transaction received boolean hasn\'t been set yet.')
    }

    if (this.isReceive) {
      this.to = wallet
    } else {
      this.from = wallet
    }
  }

  public setContact (contact: Contact): void {
    if (this._isReceive === null) {
      throw new Error('Transaction received boolean hasn\'t been set yet.')
    }

    if (this.isReceive) {
      this.from = contact
    } else {
      this.to = contact
    }
  }

  get fromIcon (): TransactionIcon {
    if (this.from === null) {
      throw new Error('couldn\'t create from transaction icon')
    }

    return this.getTransactionIcon(this.from)
  }

  get toIcon (): TransactionIcon {
    if (this.to === null) {
      throw new Error('couldn\'t create to transaction icon')
    }

    return this.getTransactionIcon(this.to)
  }

  protected getTransactionIcon (source: Wallet|Contact): TransactionIcon {
    return {
      title: source.name,
      tagOrAddress: source instanceof Wallet ? null : source.tagOrAddress,
      amount: source instanceof Wallet ? source.totalAmount : null,
      image: typeof source.icon === 'string' ? source.icon : null,
      icon: typeof source.icon === 'object' ? source.icon.name : null,
      iconColor: typeof source.icon === 'object' ? source.icon.color : null
    }
  }

  get from (): Wallet | Contact | null {
    return this._from
  }

  set from (value: Wallet | Contact | null) {
    this._from = value
  }

  get to (): Wallet | Contact | null {
    return this._to
  }

  set to (value: Wallet | Contact | null) {
    this._to = value
  }

  get amount (): number | null {
    return this._amount
  }

  set amount (value: number | null) {
    this._amount = value
  }

  get label (): string | null {
    return this._label
  }

  set label (value: string | null) {
    this._label = value
  }

  get isReceive (): boolean {
    return this._isReceive
  }

  set isReceive (value: boolean) {
    this._isReceive = value
  }

  get txid (): string | null {
    return this._txid
  }

  set txid (value: string | null) {
    this._txid = value
  }
}
