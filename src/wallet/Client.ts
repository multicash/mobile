import MockClient from '@/wallet/clients/Mock'
import Multicore from 'multicore-wallet-client'
import { MWS_CLIENT } from '@env'

const mwsClient = MWS_CLIENT || 'mock'
let client: typeof Multicore

if (mwsClient === 'mws') {
  client = Multicore
} else {
  // @ts-ignore
  client = MockClient
}

export const multicore = Multicore
export default client
