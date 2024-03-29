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

import { WalletConfigItem } from '@/core/wallet/ManagerConfig'
import Info from '@/core/wallet/models/Info'
import Balance from '@/core/wallet/models/Balance'
import Tx from '@/core/wallet/models/Tx'
import { TxProposalResponse } from '@/core/wallet/models/TxProposal'
import AddressInfo from '@/core/wallet/models/AddressInfo'
import SendMaxInfo from '@/core/wallet/models/SendMaxInfo'
import CredentialsInterface from '@/core/wallet/models/CredentialsInterface'
import ClientInterface, {
  BalanceOptions,
  ClientOptionsInterface,
  CreateAddressOptions,
  CreateTxProposalOptions,
  CredentialsOptions,
  MainAddressesOptions,
  PublishTxProposalOptions,
  RequestInterface,
  ScanOptions,
  SendMaxInfoOptions,
  StatusOptions, TxHistoryOptions
} from '@/core/wallet/ClientInterface'

const exampleBalance: Balance = {
  totalAmount: 1234567800000,
  lockedAmount: 12,
  totalConfirmedAmount: 1234567800000,
  lockedConfirmedAmount: 12,
  availableAmount: 123456,
  availableConfirmedAmount: 0,
  byAddress: [
    {
      address: 'MsnDg65r9sE2mmS5Ksg9U4egwRsHKqd9JeL',
      path: 'm/1/1',
      amount: 1234567800000
    }
  ]
}

const exampleAddressInfo: AddressInfo = {
  address: 'MsnDg65r9sE2mmS5Ksg9U4egwRsHKqd9JeL',
  coin: 'string',
  createdOn: 1234,
  isChange: false,
  network: 'string',
  path: 'string',
  publicKeys: [],
  type: 'string',
  version: 'string',
  walletId: 'string'
}

const exampleInfo: Info = {
  name: 'wallet name',
  balance: exampleBalance,
  wallet: {
    coin: 'mcx',
    network: 'livenet',
    singleAddress: true
  },
  addresses: [exampleAddressInfo]
}

const exampleSendMaxInfo: SendMaxInfo = {
  size: 123,
  amount: 12445600000000,
  fee: 100000000,
  feePerKb: 100000000,
  inputs: [],
  utxosBelowFee: 0,
  amountBelowFee: 0,
  utxosAboveMaxSize: 0,
  amountAboveMaxSize: 0
}

class Credentials implements CredentialsInterface {
  public mnemonic: string = 'output sphere drift town world sail gauge mechanic track core tiny into'
  public readonly walletPrivKey: string = 'privkey'

  public getDerivedXPrivKey (): Promise<object> {
    return Promise.resolve({})
  }
}

interface GeneratedKeyObj {
  mnemonic: string
}

class Key {
  // eslint-disable-next-line no-useless-constructor
  constructor (
    opts: {
      seedType: string;
      seedData?: any;
      passphrase?: string; // seed passphrase
      password?: string; // encrypting password
      sjclOpts?: any; // options to SJCL encrypt
      use0forBCH?: boolean;
      useLegacyPurpose?: boolean;
      useLegacyCoinType?: boolean;
      nonCompliantDerivation?: boolean;
      language?: string;
    } = { seedType: 'new' }
  ) {
    //
  }

  public createCredentials (password: string|null, opts: any): object {
    return {}
  }

  public toObj (): GeneratedKeyObj {
    return {
      mnemonic: 'one two three four five six seven eight nine ten eleven twelve'
    }
  }
}

export default class MockClient implements ClientInterface {
  public readonly config: object
  public readonly credentials: CredentialsInterface
  public request: RequestInterface

  static Key = Key

  constructor (config: ClientOptionsInterface) {
    this.config = config
    this.request = {
      baseUrl: config.baseUrl
    }
    this.credentials = new Credentials()
  }

  // /**
  // *
  // * Create a wallet.
  // * @param {String} walletName
  // * @param {String} copayerName
  // * @param {Number} m
  // * @param {Number} n
  // * @param {object} opts (optional: advanced options)
  // * @param {string} opts.coin[='btc'] - The coin for this wallet (btc, bch).
  // * @param {string} opts.network[='livenet']
  // * @param {string} opts.singleAddress[=false] - The wallet will only ever have one address.
  // * @param {String} opts.walletPrivKey - set a walletPrivKey (instead of random)
  // * @param {String} opts.id - set a id for wallet (instead of server given)
  // * @param {Boolean} opts.useNativeSegwit - set addressType to P2WPKH or P2WSH
  // * @param cb
  // * @return {undefined}
  // */
  public createWallet (
    name: string,
    copayerName: string,
    m: number,
    n: number,
    options: object,
    callback: (error: Error|null, secret: string|null) => void
  ): void {
    setTimeout(() => {
      callback(null, 'secret')
    }, 250)
  }

  public openWallet (options: any, callback: (error: Error|null, info: Info|null) => void): void {
    setTimeout(() => {
      callback(null, exampleInfo)
    }, 250)
  }

  // /**
  // * Get status of the wallet
  // *
  // * @param {Boolean} opts.twoStep[=false] - Optional: use 2-step balance computation for improved performance
  // * @param {Boolean} opts.includeExtendedInfo (optional: query extended status)
  // * @param {String} opts.tokenAddress (optional: ERC20 Token Contract Address)
  // * @param {String} opts.multisigContractAddress (optional: MULTISIG ETH Contract Address)
  // * @returns {Callback} cb - Returns error or an object with status information
  // */
  public getStatus (options: StatusOptions, callback: (error: Error|null, info: Info|null) => void): void {
    setTimeout(() => {
      callback(null, exampleInfo)
    }, 250)
  }

  // /**
  // * Update wallet balance
  // *
  // * @param {String} opts.coin - Optional: defaults to current wallet coin
  // * @param {String} opts.tokenAddress - Optional: ERC20 token contract address
  // * @param {String} opts.multisigContractAddress optional: MULTISIG ETH Contract Address
  // * @param {Callback} cb
  // */
  public getBalance (options: BalanceOptions|null, callback: (error: Error|null, balance: Balance|null) => void): void {
    setTimeout(() => {
      callback(null, exampleBalance)
    }, 250)
  }

  // /**
  // * Start an address scanning process.
  // * When finished, the scanning process will send a notification 'ScanFinished' to all copayers.
  // *
  // * @param {Object} opts
  // * @param {Boolean} opts.includeCopayerBranches (defaults to false)
  // * @param {Callback} cb
  // */
  public startScan (options: ScanOptions|null, callback: (error: Error|null) => void): void {
    setTimeout(() => {
      callback(null)
    }, 250)
  }

  // /**
  // * Get transaction history
  // *
  // * @param {Object} opts
  // * @param {Number} opts.skip (defaults to 0)
  // * @param {Number} opts.limit
  // * @param {String} opts.tokenAddress
  // * @param {String} opts.multisigContractAddress (optional: MULTISIG ETH Contract Address)
  // * @param {Boolean} opts.includeExtendedInfo
  // * @param {Callback} cb
  // * @return {Callback} cb - Return error or array of transactions
  // */
  public getTxHistory (options: TxHistoryOptions, callback: (error: Error|null, txs: Tx[]) => void): void {
    setTimeout(() => {
      callback(null, [])
    }, 250)
  }

  // /**
  // * Create a transaction proposal
  // *
  // * @param {Object} opts
  // * @param {string} opts.txProposalId - Optional. If provided it will be used as this TX proposal ID. Should be unique in the scope of the wallet.
  // * @param {Array} opts.outputs - List of outputs.
  // * @param {string} opts.outputs[].toAddress - Destination address.
  // * @param {number} opts.outputs[].amount - Amount to transfer in satoshi.
  // * @param {string} opts.outputs[].message - A message to attach to this output.
  // * @param {string} opts.message - A message to attach to this transaction.
  // * @param {number} opts.feeLevel[='normal'] - Optional. Specify the fee level for this TX ('priority', 'normal', 'economy', 'superEconomy').
  // * @param {number} opts.feePerKb - Optional. Specify the fee per KB for this TX (in satoshi).
  // * @param {string} opts.changeAddress - Optional. Use this address as the change address for the tx. The address should belong to the wallet. In the case of singleAddress wallets, the first main address will be used.
  // * @param {Boolean} opts.sendMax - Optional. Send maximum amount of funds that make sense under the specified fee/feePerKb conditions. (defaults to false).
  // * @param {string} opts.payProUrl - Optional. Paypro URL for peers to verify TX
  // * @param {Boolean} opts.excludeUnconfirmedUtxos[=false] - Optional. Do not use UTXOs of unconfirmed transactions as inputs
  // * @param {Boolean} opts.validateOutputs[=true] - Optional. Perform validation on outputs.
  // * @param {Boolean} opts.dryRun[=false] - Optional. Simulate the action but do not change server state.
  // * @param {Array} opts.inputs - Optional. Inputs for this TX
  // * @param {number} opts.fee - Optional. Use an fixed fee for this TX (only when opts.inputs is specified)
  // * @param {Boolean} opts.noShuffleOutputs - Optional. If set, TX outputs won't be shuffled. Defaults to false
  // * @param {String} opts.signingMethod - Optional. If set, force signing method (ecdsa or schnorr) otherwise use default for coin
  // * @returns {Callback} cb - Return error or the transaction proposal
  // * @param {String} baseUrl - Optional. ONLY FOR TESTING
  // */
  public createTxProposal (
    options: CreateTxProposalOptions,
    callback: (error: Error|null, txp: TxProposalResponse|null) => void,
    baseUrl: string|null
  ): void {
    setTimeout(() => {
      callback(null, null)
    }, 250)
  }

  // /**
  // * Publish a transaction proposal
  // *
  // * @param {Object} opts
  // * @param {Object} opts.txp - The transaction proposal object returned by the API#createTxProposal method
  // * @returns {Callback} cb - Return error or null
  // */
  public publishTxProposal (
    options: PublishTxProposalOptions,
    callback: (error: Error|null, txp: TxProposalResponse|null) => void
  ): void {
    setTimeout(() => {
      callback(null, null)
    }, 250)
  }

  // /**
  // * Sign a transaction proposal
  // *
  // * @param {Object} txp
  // * @param {String} passphrase
  // * @param {Callback} cb
  // * @return {Callback} cb - Return error or object
  // */
  public signTxProposal (
    proposal: TxProposalResponse,
    passphrase: string|null,
    callback: (error: Error|null, txp: TxProposalResponse|null) => void
  ): void {
    setTimeout(() => {
      callback(null, null)
    }, 250)
  }

  // /**
  // * Broadcast a transaction proposal
  // *
  // * @param {Object} txp
  // * @param {Callback} cb
  // * @return {Callback} cb - Return error or object
  // */
  public broadcastTxProposal (
    proposal: TxProposalResponse,
    callback: (error: Error|null, txp: TxProposalResponse|null) => void
  ): void {
    setTimeout(() => {
      callback(null, null)
    }, 250)
  }

  // /**
  // * Create a new address
  // *
  // * @param {Object} opts
  // * @param {Boolean} opts.ignoreMaxGap[=false]
  // * @param {Callback} cb
  // * @returns {Callback} cb - Return error or the address
  // */
  public createAddress (
    options: CreateAddressOptions,
    callback: (error: Error|null, address: AddressInfo|null) => void
  ): void {
    setTimeout(() => {
      callback(null, exampleAddressInfo)
    }, 250)
  }

  // /**
  // * Get your main addresses
  // *
  // * @param {Object} opts
  // * @param {Boolean} opts.doNotVerify
  // * @param {Numeric} opts.limit (optional) - Limit the resultset. Return all addresses by default.
  // * @param {Boolean} [opts.reverse=false] (optional) - Reverse the order of returned addresses.
  // * @param {Callback} cb
  // * @returns {Callback} cb - Return error or the array of addresses
  // */
  public getMainAddresses (options: MainAddressesOptions, callback: (error: Error|null, addresses: AddressInfo[]) => void): void {
    setTimeout(() => {
      callback(null, [exampleAddressInfo])
    }, 250)
  }

  // /**
  // * Returns send max information.
  // * @param {String} opts
  // * @param {number} opts.feeLevel[='normal'] - Optional. Specify the fee level ('priority', 'normal', 'economy', 'superEconomy').
  // * @param {number} opts.feePerKb - Optional. Specify the fee per KB (in satoshi).
  // * @param {Boolean} opts.excludeUnconfirmedUtxos - Indicates it if should use (or not) the unconfirmed utxos
  // * @param {Boolean} opts.returnInputs - Indicates it if should return (or not) the inputs
  // * @return {Callback} cb - Return error (if exists) and object result
  // */
  public getSendMaxInfo (options: SendMaxInfoOptions, callback: (error: Error|null, info: SendMaxInfo|null) => void): void {
    setTimeout(() => {
      callback(null, exampleSendMaxInfo)
    }, 250)
  }

  public seedFromMnemonic (key: string, config: WalletConfigItem): void {
    this.credentials.mnemonic = key
  }

  public fromObj (credentials: CredentialsOptions): void {
    // void
  }
}
