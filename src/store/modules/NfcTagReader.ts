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
        return resolve(`${Constants.payLink}/?id=6a52cfaa-25fb-4bf8-8a62-d2bf21342638&address=MsnDg65r9sE2mmS5Ksg9U4egwRsHKqd9JeL&tag=%40arcuriSavings&amount=655&label=My%20Label`)
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
