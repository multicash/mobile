import { Store } from 'vuex'
import { WalletConfigItem } from '@/wallet/ManagerConfig'
import Wallet from '@/wallet/Wallet'

const state: WalletConfigItem[] = []

const mutations = {
  ADD_WALLET (state: WalletConfigItem[], wallet: WalletConfigItem): void {
    state.push(wallet)
  },

  REMOVE_WALLET (state: WalletConfigItem[], wallet: WalletConfigItem): void {
    state.splice(state.indexOf(wallet), 1)
  },

  UPDATE_WALLET (state: WalletConfigItem[], wallet: Wallet): void {
    const index = state.findIndex(stateWallet => {
      return stateWallet.identifier === wallet.identifier
    })

    if (state[index]) {
      state[index].name = wallet.name
      state[index].tag = wallet.tag
      state[index].icon = wallet.icon
      state[index].apiEndpoint = wallet.getClient().request.baseUrl
    }
  },

  REMOVE_ALL_WALLETS (state: WalletConfigItem[]): void {
    const length = state.length

    for (let i = 0; i < length; i++) {
      state.shift()
    }
  }
}

const actions = {
  addWallet (context: Store<WalletConfigItem[]>, wallet: WalletConfigItem): void {
    context.commit('ADD_WALLET', wallet)
  },

  removeWallet (context: Store<WalletConfigItem[]>, wallet: WalletConfigItem): void {
    context.commit('REMOVE_WALLET', wallet)
  },

  getWallet (context: Store<WalletConfigItem[]>, identifier: string): WalletConfigItem|null {
    for (const wallet of context.state) {
      if (wallet.identifier === identifier) {
        return wallet
      }
    }

    return null
  }
}

const getters = {
  wallets (state: WalletConfigItem[]): WalletConfigItem[] {
    return state
  },

  hasWallets (state: WalletConfigItem[]): boolean {
    return state.length > 0
  }
}

export default {
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters
}
