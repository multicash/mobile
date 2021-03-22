import Transaction from '@/core/transaction/models/Transaction'
import Wallet from '@/core/wallet/Wallet'
import Contact from '@/core/contacts/models/Contact'
import UUID from '@/core/support/UUID'

export default class PayLinkParser {
  payLink: string
  params: any

  constructor (payLink: string) {
    this.payLink = payLink
    this.params = this.parseParams(payLink)
  }

  public get (key: string): string|null {
    return this.params[key] || null
  }

  public getPayParamsWithSource (sourceWallet: Wallet, iconName: string, iconColor: string): object {
    const contact: Contact = {
      identifier: UUID.create(),
      name: 'PayLink',
      tagOrAddress: this.get('tag') || '',
      isFavorite: false,
      icon: {
        name: iconName,
        color: iconColor
      }
    }

    const transaction = new Transaction(
      sourceWallet,
      contact,
      parseInt(this.get('amount') || '0'),
      this.get('label')
    )

    return {
      payLink: true,
      transaction: transaction
    }
  }

  protected parseParams (payLink: string): object {
    const paramsString = payLink.split('?')[1]
    const paramsArrayString = paramsString.split('&')

    const params: any = {}

    paramsArrayString.forEach((param: string) => {
      const splitParam = param.split('=')

      params[splitParam[0]] = splitParam[1]
    })

    return params
  }
}
