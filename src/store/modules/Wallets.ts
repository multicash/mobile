import { Store } from 'vuex'
import { WalletConfigItem } from '@/walletManager/ManagerConfig'

const state: WalletConfigItem[] = []

const mutations = {
  ADD_WALLET (state: WalletConfigItem[], wallet: WalletConfigItem): void {
    state.push(wallet)
  },

  REMOVE_WALLET (state: WalletConfigItem[], wallet: WalletConfigItem): void {
    state.splice(state.indexOf(wallet), 1)
  },

  UPDATE_WALLET (state: WalletConfigItem[], wallet: WalletConfigItem): void {
    //
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

  getWallet (context: Store<WalletConfigItem[]>, name: string): WalletConfigItem|null {
    for (const wallet of context.state) {
      if (wallet.name === name) {
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
