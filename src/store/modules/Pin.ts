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

interface PinState {
  pin: string|null
}

export default {
  state: {
    pin: null
  },

  mutations: {
    UPDATE_PIN (state: PinState, newPin: string|null): void {
      state.pin = newPin
    }
  },

  actions: {
    updatePin (context: Store<PinState>, pin: string|null): void {
      context.commit('UPDATE_PIN', pin)
    }
  },

  getters: {
    getPin (state: PinState): string|null {
      return state.pin
    },

    hasPin (state: PinState): boolean {
      return !!state.pin
    }
  }
}
