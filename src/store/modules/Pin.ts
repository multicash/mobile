import { Context } from 'vuex'

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
    updatePin (context: Context, pin: string|null): void {
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
