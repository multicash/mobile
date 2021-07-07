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

import CredentialsInterface from '@/core/wallet/models/CredentialsInterface'
import Info from '@/core/wallet/models/Info'
import Balance from '@/core/wallet/models/Balance'
import Tx from '@/core/wallet/models/Tx'
import { TxProposalResponse } from '@/core/wallet/models/TxProposal'
import AddressInfo from '@/core/wallet/models/AddressInfo'
import SendMaxInfo from '@/core/wallet/models/SendMaxInfo'

export interface BalanceOptions {
  coin?: string
  tokenAddress?: string
  multisigContractAddress?: string
}

export interface StatusOptions {
  twoStep?: boolean
  includeExtendedInfo?: boolean
  tokenAddress?: string
  multisigContractAddress?: string
}

export interface ScanOptions {
  includeCopayerBranches?: boolean
}

export interface TxHistoryOptions {
  skip?: number
  limit?: number
  tokenAddress?: string
  multisigContractAddress?: string
  includeExtendedInfo?: boolean
}

export interface CreateTxProposalOptions {
  txProposalId?: string
  outputs?: object[]
  message?: string
  feeLevel?: number
  feePerKb?: number
  changeAddress?: string
  sendMax?: boolean
  payProUrl?: string
  excludeUnconfirmedUtxos?: boolean
  validateOutputs?: boolean
  dryRun?: boolean
  inputs?: object[]
  fee?: number
  noShuffleOutputs?: boolean
  signingMethod?: string
}

export interface PublishTxProposalOptions {
  txp: TxProposalResponse
}

export interface CreateAddressOptions {
  ignoreMaxGap?: boolean
}

export interface MainAddressesOptions {
  doNotVerify?: boolean
  limit?: number
  reverse?: boolean
}

export interface SendMaxInfoOptions {
  feeLevel?: number
  feePerKb?: number
  excludeUnconfirmedUtxos?: boolean
  returnInputs?: boolean
}

export interface ClientOptionsInterface {
  baseUrl: string
  verbose: boolean
}

export interface RequestInterface {
  baseUrl: string;
  session?: any;
  r?: any;
  credentials?: any;
  supportStaffWalletId?: any;
  timeout?: any;
}

export interface CredentialsOptions {
  coin: string
  network: string
  xPubKey: string
  requestPrivKey: string
  requestPubKey: string
  copayerId: string
  publicKeyRing: string
  walletId: string
  walletName: string
  m: string
  n: string
  walletPrivKey: string
  personalEncryptingKey: string
  sharedEncryptingKey: string
  copayerName: string
  externalSource: string
  entropySource: string
  mnemonicHasPassphrase: string
  derivationStrategy: string
  account: string
  compliantDerivation: string
  addressType: string
  version: string
}

export default interface ClientInterface {
  readonly credentials: CredentialsInterface
  request: RequestInterface

  createWallet (
    name: string,
    copayerName: string,
    m: number,
    n: number,
    options: object,
    callback: (error: Error|null, secret: string|null) => void
  ): void
  openWallet (options: any, callback: (error: Error|null, info: Info|null) => void): void
  getStatus (options: StatusOptions, callback: (error: Error|null, info: Info|null) => void): void
  getBalance (options: BalanceOptions|null, callback: (error: Error|null, balance: Balance|null) => void): void
  startScan (options: ScanOptions|null, callback: (error: Error|null) => void): void
  getTxHistory (options: TxHistoryOptions, callback: (error: Error|null, txs: Tx[]) => void): void
  createTxProposal (
    options: CreateTxProposalOptions,
    callback: (error: Error|null, txp: TxProposalResponse|null) => void,
    baseUrl: string|null
  ): void
  publishTxProposal (
    options: PublishTxProposalOptions,
    callback: (error: Error|null, txp: TxProposalResponse|null) => void
  ): void
  broadcastTxProposal (
    proposal: TxProposalResponse,
    callback: (error: Error|null, txp: TxProposalResponse|null) => void
  ): void
  createAddress (
    options: CreateAddressOptions,
    callback: (error: Error|null, address: AddressInfo|null) => void
  ): void
  getMainAddresses (options: MainAddressesOptions, callback: (error: Error|null, addresses: AddressInfo[]) => void): void
  getSendMaxInfo (options: SendMaxInfoOptions, callback: (error: Error|null, info: SendMaxInfo|null) => void): void
  fromObj (credentials: CredentialsOptions): void
}
