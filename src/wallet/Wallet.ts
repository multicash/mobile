import Info from '@/wallet/models/Info'
import Balance, { BalanceAddress } from '@/wallet/models/Balance'
import Tx from '@/wallet/models/Tx'
import { TxProposal, TxProposalResponse } from '@/wallet/models/TxProposal'
import AddressInfo from '@/wallet/models/AddressInfo'
import SendMaxInfo from '@/wallet/models/SendMaxInfo'
import CredentialsInterface from '@/wallet/models/CredentialsInterface'
import ClientInterface from '@/wallet/ClientInterface'

const Log = Logger.extend('WALLET')

const createLogMessage = (message: string, parent: Wallet) => {
  return `${message} (coin: ${(parent.info?.wallet.coin || '').toUpperCase()}, network: ${(parent.info?.wallet.network || '').toUpperCase()}, id: ${parent.identifier})`
}

export default class Wallet {
  protected client: ClientInterface
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

  constructor (identifier: string, name: string, icon: string, tag: string, client: ClientInterface, address?: string) {
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

        Log.info(createLogMessage('Opened', this))
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

        Log.info(createLogMessage('Status fetched', this))
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

        Log.info(createLogMessage('Balance fetched', this))
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

        Log.info(createLogMessage('Addresses scanned', this))
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

        Log.info(createLogMessage('TX history fetched', this))
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

        Log.info(createLogMessage('Created tx proposal', this))
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

        Log.info(createLogMessage('Published tx proposal', this))
        resolve(txp)
      })
    })
  }

  public signTxProposal (proposal: TxProposalResponse, passphrase: string): Promise<TxProposalResponse> {
    return new Promise((resolve, reject) => {
      resolve(proposal)
      // this.client.signTxProposalFromAirGapped(proposal, passphrase, 1, 1, (error: Error|null, txp: TxProposalResponse|null) => {
      //   if (error || txp === null) {
      //     return reject(error)
      //   }
      //
      //   Log.info(createLogMessage('Signed tx proposal', this))
      //   resolve(txp)
      // })
    })
  }

  public broadcastTxProposal (proposal: TxProposalResponse): Promise<TxProposalResponse> {
    return new Promise((resolve, reject) => {
      this.client.broadcastTxProposal(proposal, (error: Error|null, txp: TxProposalResponse|null) => {
        if (error || txp === null) {
          return reject(error)
        }

        Log.info(createLogMessage('Broadcasted tx proposal', this))
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

        Log.info(createLogMessage('Address created', this))
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

        Log.info(createLogMessage('Main addresses fetched', this))
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

        Log.info(createLogMessage('Send max info fetched', this))
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

  public getClient (): ClientInterface {
    return this.client
  }

  public getCredentials (): CredentialsInterface {
    return this.getClient().credentials
  }
}
