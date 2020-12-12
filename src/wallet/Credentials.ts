export interface CredentialsInterface {
  mnemonic: string
  walletPrivKey: string

  getDerivedXPrivKey (): Promise<object>
}

export default class Credentials implements CredentialsInterface {
  public mnemonic: string = 'output sphere drift town world sail gauge mechanic track core tiny into'
  public readonly walletPrivKey: string = 'privkey'

  public getDerivedXPrivKey (): Promise<object> {
    return Promise.resolve({})
  }
}
