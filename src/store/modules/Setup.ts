import { Context } from 'vuex'

interface SetupState {
  isSetup: boolean
}

export default {

  state: {
    isSetup: false
  },

  mutations: {
    UPDATE_SETUP_STATUS (state: SetupState, newStatus: boolean): void {
      state.isSetup = newStatus
    }
  },

  actions: {
    updateIsSetup (context: Context, isSetup: boolean): void {
      context.commit('UPDATE_SETUP_STATUS', isSetup)
    }
  },

  getters: {
    isSetup (state: SetupState): boolean {
      return state.isSetup
    }
  }

}
