import Vue from 'vue-native-core'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import AsyncStorage from '@react-native-community/async-storage'

import modules from '@/store/modules'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  // @ts-ignore
  storage: AsyncStorage,
  asyncStorage: true,
  saveState: (key: string, state: {}, storage?: Storage): Promise<void> | void => {
    return storage!.setItem(key, JSON.stringify(state))
  }
})

const vuexPersistEmitter = () => {
  // @ts-ignore
  return store => {
    // @ts-ignore
    store.subscribe(mutation => {
      if (mutation.type === 'RESTORE_MUTATION') {
        store._vm.$root.$emit('storageReady')
      }
    })
  }
}

for (const module in modules) {
  // @ts-ignore
  Object.assign(modules[module].mutations, {
    RESTORE_MUTATION: vuexLocal.RESTORE_MUTATION
  })
}

// @ts-ignore
const store = new Vuex.Store({
  modules,
  plugins: [vuexLocal.plugin, vuexPersistEmitter()],
  // @ts-ignore
  strict: process.env.NODE_ENV !== 'production'
})

Vue.mixin({
  beforeCreate () {
    // @ts-ignore
    this.$store = store
  }
})

export default store
export { vuexLocal }
