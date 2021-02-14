import Client from 'multicore-wallet-client'
import Info from '@/wallet/models/Info'
import Balance, { BalanceAddress } from '@/wallet/models/Balance'
import Tx from '@/wallet/models/Tx'
import { TxProposal, TxProposalResponse } from '@/wallet/models/TxProposal'
import AddressInfo from '@/wallet/models/AddressInfo'
import SendMaxInfo from '@/wallet/models/SendMaxInfo'
import { CredentialsInterface } from '@/wallet/Credentials'

export default class Wallet {
  protected client: Client
  public readonly identifier: string
  public name: string
  public icon: string
  public tag: string
  public address?: string
  public info?: Info
  public transactions: Tx[] = []
  public addresses: AddressInfo[] = []

  get totalAmount (): number {
    const fallback = 0

    try {
      return this.info ? this.info.balance.totalAmount : fallback
    } catch (e) {
      return fallback
    }
  }

  constructor (identifier: string, name: string, icon: string, tag: string, client: Client, address?: string) {
    this.identifier = identifier
    this.name = name
    this.icon = icon
    this.tag = tag
    this.client = client
    this.address = address
  }

  public async create (name: string, copayerName: string, m: number = 1, n: number = 1, options: object = {}) {
    try {
      // First check if the wallet is already on the server.
      // If not we create the wallet after getting an error.
      return await this.status()
    } catch (e) {
      return new Promise((resolve, reject) => {
        this.client.createWallet(name, copayerName, m, n, options, (error: Error|null, secret: string|null) => {
          if (error) {
            return reject(error)
          }

          resolve(secret)
        })
      })
    }
  }

  public open (): Promise<Info> {
    return new Promise((resolve, reject) => {
      this.client.openWallet({}, (error: Error|null, info: Info|null) => {
        if (error || info === null) {
          return reject(error)
        }

        this.info = info

        console.log(`wallet opened: ${this.identifier}`)
        resolve(info)
      })
    })
  }

  public status (): Promise<Info> {
    return new Promise((resolve, reject) => {
      this.client.getStatus({ includeExtendedInfo: true }, (error: Error|null, info: Info|null) => {
        if (error || info === null) {
          return reject(error)
        }

        this.info = info

        console.log(`wallet status fetched: ${this.identifier}`)
        resolve(info)
      })
    })
  }

  public fetchBalance (): Promise<Balance> {
    return new Promise((resolve, reject) => {
      this.client.getBalance(null, (error: Error|null, balance: Balance|null) => {
        if (error || balance === null) {
          return reject(error)
        }

        console.log(`wallet balance fetched: ${this.identifier}`)
        resolve(balance)
      })
    })
  }

  public scan (): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.client.startScan(null, (error: Error|null) => {
        if (error) {
          return reject(error)
        }

        console.log(`wallet addresses scanned: ${this.identifier}`)
        resolve(true)
      })
    })
  }

  public fetchTxHistory (): Promise<Tx[]> {
    return new Promise((resolve, reject) => {
      this.client.getTxHistory({ includeExtendedInfo: true }, (error: Error|null, txs: Tx[]) => {
        if (error) {
          return reject(error)
        }

        this.transactions = txs

        console.log(`wallet tx history fetched: ${this.identifier}`)
        resolve(txs)
      })
    })
  }

  public getTxHistory (): Tx[] {
    return this.transactions
  }

  public createTxProposal (proposal: TxProposal): Promise<TxProposalResponse> {
    return new Promise((resolve, reject) => {
      this.client.createTxProposal(proposal, (error: Error|null, txp: TxProposalResponse|null) => {
        if (error || txp === null) {
          return reject(error)
        }

        console.log(`wallet create tx proposal: ${this.identifier}`)
        resolve(txp)
      }, null)
    })
  }

  public publishTxProposal (proposal: TxProposalResponse): Promise<TxProposalResponse> {
    return new Promise((resolve, reject) => {
      this.client.publishTxProposal({ txp: proposal }, (error: Error|null, txp: TxProposalResponse|null) => {
        if (error || txp === null) {
          return reject(error)
        }

        console.log(`wallet publish tx proposal: ${this.identifier}`)
        resolve(txp)
      })
    })
  }

  public signTxProposal (proposal: TxProposalResponse, passphrase: string): Promise<TxProposalResponse> {
    return new Promise((resolve, reject) => {
      this.client.signTxProposalFromAirGapped(proposal, passphrase, 1, 1, (error: Error|null, txp: TxProposalResponse|null) => {
        if (error || txp === null) {
          return reject(error)
        }

        console.log(`wallet sign tx proposal: ${this.identifier}`)
        resolve(txp)
      })
    })
  }

  public broadcastTxProposal (proposal: TxProposalResponse): Promise<TxProposalResponse> {
    return new Promise((resolve, reject) => {
      this.client.broadcastTxProposal(proposal, (error: Error|null, txp: TxProposalResponse|null) => {
        if (error || txp === null) {
          return reject(error)
        }

        console.log(`wallet broadcast tx proposal: ${this.identifier}`)
        resolve(txp)
      })
    })
  }

  public createAddress (): Promise<AddressInfo> {
    return new Promise((resolve, reject) => {
      this.client.createAddress({}, (error: Error|null, addressInfo: AddressInfo|null) => {
        if (error || addressInfo === null) {
          return reject(error)
        }

        this.addresses.unshift(addressInfo)

        console.log(`wallet address created: ${this.identifier}`)
        resolve(addressInfo)
      })
    })
  }

  public getMainAddresses (options: object): Promise<AddressInfo[]> {
    return new Promise((resolve, reject) => {
      this.client.getMainAddresses(options, (error: Error|null, addresses: AddressInfo[]) => {
        if (error) {
          return reject(error)
        }

        this.addresses = addresses

        console.log(`wallet main addresses fetched: ${this.identifier}`)
        resolve(addresses)
      })
    })
  }

  public getAddress (): Promise<AddressInfo> {
    const options = {
      reverse: true
    }

    if (!this.info) {
      throw new Error('Wallet info not found')
    }

    const info = this.info

    return this.getMainAddresses(options).then(addresses => {
      for (const addressInfo of addresses) {
        if (!info.balance.byAddress.find((balance: BalanceAddress) => balance.address === addressInfo.address)) {
          return addressInfo
        }
      }

      // Create a new address
      return this.createAddress()
    })
  }

  public getSendMaxInfo (returnInputs: boolean = false): Promise<SendMaxInfo> {
    return new Promise((resolve, reject) => {
      this.client.getSendMaxInfo({ returnInputs }, (error: Error|null, info: SendMaxInfo|null) => {
        if (error || info === null) {
          return reject(error)
        }

        console.log(`wallet send max info fetched: ${this.identifier}`)
        resolve(info)
      })
    })
  }

  public getExportConfig (): object {
    return {
      name: this.name,
      icon: this.icon,
      tag: this.tag,
      coin: this.info!.wallet.coin,
      network: this.info!.wallet.network,
      restoreKey: this.client.credentials.mnemonic,
      walletPrivateKey: this.client.credentials.walletPrivKey,
      singleAddress: this.info!.wallet.singleAddress,
      apiEndpoint: this.client.request.baseUrl
    }
  }

  public getClient (): Client {
    return this.client
  }

  public getCredentials (): CredentialsInterface {
    return this.getClient().credentials
  }
}
