import { Store } from 'vuex'
import constants from '@/support/constants'

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
