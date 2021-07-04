/*
  MultiCash Mobile
  Copyright (C) 2021  Swen van Zanten

  This program is free software: you can redistribute it and/or modify
  it under the terms of the GNU General Public License as published by
  the Free Software Foundation, either version 3 of the License, or
  any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
  along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

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
