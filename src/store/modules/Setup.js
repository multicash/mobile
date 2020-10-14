export default {

  state: {
    isSetup: false
  },

  mutations: {
    UPDATE_SETUP_STATUS (state, newStatus) {
      state.isSetup = newStatus
    }
  },

  actions: {
    updateIsSetup ({ commit }, isSetup) {
      commit('UPDATE_SETUP_STATUS', isSetup)
    }
  },

  getters: {
    isSetup (state) {
      return state.isSetup
    }
  }

}
