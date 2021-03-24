import { Store } from 'vuex'
import NfcManager, { Ndef, NfcEvents, TagEvent } from 'react-native-nfc-manager'
import DeviceInfo from 'react-native-device-info'
import Constants from '@/core/support/constants'

interface NfcTagReaderState {
  lastReadTag: string|null
}

const state: NfcTagReaderState = {
  lastReadTag: null
}

const mutations = {
  SET_LAST_READ_TAG (state: NfcTagReaderState, tag: string): void {
    state.lastReadTag = tag
  }
}

const actions = {
  async startNfcTagReader (context: Store<NfcTagReaderState>): Promise<string> {
    const isEmulator = await DeviceInfo.isEmulator()

    return new Promise((resolve) => {
      if (isEmulator) {
        return resolve(`${Constants.payLink}/Md9sajd9j29d29ejd9ejd892jeje2jd9j9d28?tag=@SwenSaving&amount=4455`)
      }

      NfcManager.start()
      NfcManager.setEventListener(NfcEvents.DiscoverTag, (tag: TagEvent) => {
        NfcManager.setAlertMessageIOS('MultiCash pay link found!')

        // @ts-ignore
        const ndefPayload: Uint8Array = tag.ndefMessage[0].payload
        const tagPayload: string = Ndef.uri.decodePayload(ndefPayload)
        resolve(tagPayload)

        context.commit('SET_LAST_READ_TAG', tagPayload)

        NfcManager.unregisterTagEvent().catch(() => 0)
      })

      NfcManager.registerTagEvent()
    })
  }
}

const getters = {
  getLastReadTag (state: NfcTagReaderState): string|null {
    return state.lastReadTag
  }
}

export default {
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters
}
