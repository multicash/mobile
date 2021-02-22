import { Store } from 'vuex'

interface DefaultWalletState {
  walletIdentifier: string|null
}

const state: DefaultWalletState = {
  walletIdentifier: null
}

const mutations = {
  SET_DEFAULT_WALLET (state: DefaultWalletState, identifier: string|null): void {
    state.walletIdentifier = identifier
  }
}

const actions = {
  setDefaultWallet (context: Store<DefaultWalletState>, identifier: string|null): void {
    context.commit('SET_DEFAULT_WALLET', identifier)
  }
}

const getters = {
  getDefaultWallet (state: DefaultWalletState): string|null {
    return state.walletIdentifier
  }
}

export default {
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters
}
