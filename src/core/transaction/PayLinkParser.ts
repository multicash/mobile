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

  public getPayParamsWithSource (sourceWallet: any, iconName: string, iconColor: string): object {
    return {
      payLink: true,
      isReceive: false,
      amount: this.get('amount'),
      label: this.get('label'),
      source: {
        walletIdentifier: sourceWallet.identifier,
        title: sourceWallet.name,
        amount: sourceWallet.info.balance.totalAmount,
        image: sourceWallet.icon
      },
      target: {
        title: this.get('tag'),
        icon: iconName,
        iconColor: iconColor
      }
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
