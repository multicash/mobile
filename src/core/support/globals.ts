// @ts-nocheck
import base64 from 'react-native-base64'
import Buffer from 'buffer/'
import crypto from 'crypto'

// noinspection JSConstantReassignment
global.crypto = global.msCrypto = crypto

global.Buffer = Buffer.Buffer

global.btoa = (data: string) => {
  return base64.encode(data)
}

global.atob = (data: string) => {
  return base64.decode(data)
}
