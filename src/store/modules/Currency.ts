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
import constants from '@/core/support/constants'

interface Currency {
  code: string
}

const state: Currency = {
  code: constants.defaultCurrencyCode
}

const mutations = {
  UPDATE_CURRENCY (state: Currency, newCurrencyCode: string): void {
    state.code = newCurrencyCode
  }
}

const actions = {
  updateCurrency (context: Store<Currency>, currency: string): void {
    context.commit('UPDATE_CURRENCY', currency)
  }
}

const getters = {
  currentCurrencyCode (state: Currency): string {
    return state.code
  }
}

export default {
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters
}
