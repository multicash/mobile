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

  protected parseParams (payLink: string): object {
    const paramsString = payLink.split('?')[1]
    const paramsArrayString = paramsString.split('&')

    const params: any = {}

    paramsArrayString.forEach((param: string) => {
      const splittedParam = param.split('=')

      params[splittedParam[0]] = splittedParam[1]
    })

    return params
  }
}
