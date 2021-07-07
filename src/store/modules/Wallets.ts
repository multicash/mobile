/*
  MultiCash Mobile
  Copyright (C) 2021  MultiCash Developers

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
import { WalletConfigItem } from '@/core/wallet/ManagerConfig'
import Wallet from '@/core/wallet/Wallet'

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
  },

  removeAllWallets (context: Store<WalletConfigItem[]>): void {
    for (const wallet of context.state) {
      context.commit('REMOVE_WALLET', wallet)
    }
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
  state,
  mutations,
  actions,
  getters
}
