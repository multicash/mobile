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
    let tagOrAddress = ''
    if (this.get('tag')) {
      tagOrAddress = (this.get('tag') as string).replace('%40', '@')
    } else if (this.get('address')) {
      tagOrAddress = this.get('address') as string
    }

    const contact: Contact = {
      identifier: UUID.create(),
      name: 'PayLink',
      tagOrAddress: tagOrAddress,
      isFavorite: false,
      icon: {
        name: iconName,
        color: iconColor
      }
    }

    const transaction = new Transaction(
      sourceWallet,
      contact,
      parseFloat(this.get('amount') || '0'),
      this.get('label') ? decodeURI(this.get('label') as string) : null
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
