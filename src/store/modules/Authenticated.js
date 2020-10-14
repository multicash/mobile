export default {

  state: {
    isAuthenticated: false
  },

  mutations: {
    UPDATE_AUTHENTICATION_STATUS (state, newStatus) {
      state.isAuthenticated = newStatus
    }
  },

  actions: {
    updateIsAuthenticated ({ commit }, isAuthenticated) {
      commit('UPDATE_AUTHENTICATION_STATUS', isAuthenticated)
    }
  },

  getters: {
    isAuthenticated (state) {
      return state.isAuthenticated
    }
  }

}
