import MockClient from '@/core/wallet/clients/Mock'
import Multicore from 'multicore-wallet-client'
import { MWS_CLIENT } from '@env'

const mwsClient = MWS_CLIENT || 'mock'
let client: typeof Multicore

console.log(MWS_CLIENT)
if (mwsClient === 'mws') {
  client = Multicore
} else {
  // @ts-ignore
  client = MockClient
}

export const multicore = Multicore
export default client
