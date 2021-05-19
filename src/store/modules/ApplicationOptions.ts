import { Store } from 'vuex'

interface ApplicationOptions {
  unlock: {
    application: boolean
    restoreKey: boolean
    export: boolean
  }
}

const state: ApplicationOptions = {
  unlock: {
    application: false,
    restoreKey: false,
    export: false
  }
}

const mutations = {
  SET_UNLOCK_APPLICATION (state: ApplicationOptions, value: boolean): void {
    state.unlock.application = value
  },

  SET_UNLOCK_RESTORE_KEY (state: ApplicationOptions, value: boolean): void {
    state.unlock.restoreKey = value
  },

  SET_UNLOCK_EXPORT (state: ApplicationOptions, value: boolean): void {
    state.unlock.export = value
  }
}

const actions = {
  setUnlockApplication (context: Store<ApplicationOptions>, value: boolean): void {
    context.commit('SET_UNLOCK_APPLICATION', value)
  },

  setUnlockRestoreKey (context: Store<ApplicationOptions>, value: boolean): void {
    context.commit('SET_UNLOCK_RESTORE_KEY', value)
  },

  setUnlockExport (context: Store<ApplicationOptions>, value: boolean): void {
    context.commit('SET_UNLOCK_EXPORT', value)
  }
}

const getters = {
  applicationOptions (state: ApplicationOptions): ApplicationOptions {
    return state
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
