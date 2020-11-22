interface Wallet {
  name: string,
  amount: number,
  icon: string,
  tag: string,
  address: string
}

const exampleWallets = [
  {
    name: 'Main Account',
    amount: 10505.43,
    icon: 'wallet',
    tag: '@SwenVanZanten',
    address: 'M6NYsdntCHYDv6X6uGzgEChnoQruHBR1De'
  },
  {
    name: 'Savings Account',
    amount: 1430705.54,
    icon: 'gift',
    tag: '@SwenSaving',
    address: 'M6NYsdntCHYDv6X6uGzgEChnoQruHBR1De'
  }
]

const state: Wallet[] = []

const mutations = {
  ADD_WALLET (state: Wallet[], wallet: Wallet) {
    state.push(wallet)
  },

  REMOVE_WALLET (state: Wallet[], wallet: Wallet) {
    state.splice(state.indexOf(wallet), 1)
  },

  REMOVE_ALL_WALLETS (state: Wallet[]) {
    const length = state.length

    for (let i = 0; i < length; i++) {
      state.shift()
    }
  }
}

const actions = {
  addWallet ({ commit }, wallet: Wallet) {
    commit('ADD_WALLET', wallet)
  },

  removeWallet ({ commit }, wallet: Wallet) {
    commit('REMOVE_WALLET', wallet)
  },

  removeAllWallets ({ commit }) {
    commit('REMOVE_ALL_WALLETS')
  },

  addExamplesWallets ({ commit }) {
    exampleWallets.forEach(wallet => {
      commit('ADD_WALLET', wallet)
    })
  }
}

const getters = {
  wallets: (state: Wallet[]) => {
    return state
  }
}

export default {
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters
}
