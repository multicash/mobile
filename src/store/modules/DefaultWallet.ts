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
