import { Context } from 'vuex'

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
  ADD_WALLET (state: Wallet[], wallet: Wallet): void {
    state.push(wallet)
  },

  REMOVE_WALLET (state: Wallet[], wallet: Wallet): void {
    state.splice(state.indexOf(wallet), 1)
  },

  REMOVE_ALL_WALLETS (state: Wallet[]): void {
    const length = state.length

    for (let i = 0; i < length; i++) {
      state.shift()
    }
  }
}

const actions = {
  addWallet (context: Context, wallet: Wallet): void {
    context.commit('ADD_WALLET', wallet)
  },

  removeWallet (context: Context, wallet: Wallet): void {
    context.commit('REMOVE_WALLET', wallet)
  },

  removeAllWallets (context: Context): void {
    context.commit('REMOVE_ALL_WALLETS')
  },

  addExamplesWallets (context: Context): void {
    exampleWallets.forEach(wallet => {
      context.commit('ADD_WALLET', wallet)
    })
  }
}

const getters = {
  wallets (state: Wallet[]): Wallet[] {
    return state
  }
}

export default {
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters
}
