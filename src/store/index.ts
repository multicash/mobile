import Vue from 'vue-native-core'
import Vuex, { Store } from 'vuex'
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

const vuexPersistEmitter = <S>() => {
  return (store: Store<S>): any => {
    store.subscribe(mutation => {
      if (mutation.type === 'RESTORE_MUTATION') { // @ts-ignore
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

const store = new Vuex.Store({
  modules,
  plugins: [vuexLocal.plugin, vuexPersistEmitter()],
  strict: process.env.NODE_ENV !== 'production'
})

Vue.mixin({
  beforeCreate () {
    this.$store = store
  }
})

export default store
export { vuexLocal }
