export default interface CredentialsInterface {
  mnemonic: string
  walletPrivKey: string

  getDerivedXPrivKey (): Promise<object>
}
