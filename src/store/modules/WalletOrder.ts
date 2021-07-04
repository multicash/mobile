/*
  MultiCash Mobile
  Copyright (C) 2021  Swen van Zanten

  This program is free software: you can redistribute it and/or modify
  it under the terms of the GNU General Public License as published by
  the Free Software Foundation, either version 3 of the License, or
  any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
  along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

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
    },

    removeWalletOrder (context: Store<WalletOrderState>): void {
      context.state.order.forEach(walletIdentifier => context.commit('REMOVE_FROM_WALLET_ORDER', walletIdentifier))
    }
  },

  getters: {
    getWalletOrder (state: WalletOrderState): WalletOrder {
      return state.order
    }
  }
}
