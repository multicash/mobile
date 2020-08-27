import Vue from 'vue-native-core'
import constants from '@/utils/constants'
import Intl from 'intl'
import 'intl/locale-data/jsonp/en'

Vue.mixin({
  methods: {
    getFormattedCurrency: (amount: number, lang: string, currency: string = constants.defaultCurrencyCode) => {
      return new Intl.NumberFormat(lang, {
        style: 'currency',
        currency: currency
      }).format(amount)
    },

    getFormattedCrypto: (amount: number, lang: string, coin: any) => {
      return new Intl.NumberFormat(lang, {
        style: 'currency',
        currency: coin
      }).format(amount)
    },

    formatAmountFromSatoshis: (satoshis: number, lang: string) => {
      return new Intl.NumberFormat(lang, {
        style: 'currency',
        currency: 'XVG'
      }).format(satoshis / 10 ** constants.decimalPerSatoshi)
    }
  }
})
