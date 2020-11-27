import { Store } from 'vuex'

type WalletOrder = string[]

export interface WalletOrderState {
  order: WalletOrder
}

export default {
  state: {
    order: []
  },

  mutations: {
    ADD_TO_WALLET_ORDER (state: WalletOrderState, walletIdentifier: string): void {
      state.order.push(walletIdentifier)
    },

    UPDATE_ORDER (state: WalletOrderState, order: WalletOrder): void {
      for (const walletIdentifier of order) {
        state.order.splice(state.order.indexOf(walletIdentifier), 1)
      }

      for (const walletIdentifier of order) {
        state.order.push(walletIdentifier)
      }
    },

    REMOVE_FROM_WALLET_ORDER (state: WalletOrderState, walletIdentifier: string): void {
      state.order.splice(state.order.indexOf(walletIdentifier), 1)
    }
  },

  actions: {
    addToWalletOrder (context: Store<WalletOrderState>, walletIdentifier: string): void {
      context.commit('ADD_TO_WALLET_ORDER', walletIdentifier)
    },

    updateWalletOrder (context: Store<WalletOrderState>, order: WalletOrder): void {
      context.commit('UPDATE_ORDER', order)
    },

    removeFromWalletOrder (context: Store<WalletOrderState>, walletIdentifier: string): void {
      context.commit('REMOVE_FROM_WALLET_ORDER', walletIdentifier)
    }
  },

  getters: {
    getWalletOrder (state: WalletOrderState): WalletOrder {
      return state.order
    }
  }
}
