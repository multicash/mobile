import Vue from 'vue-native-core'
import constants from '@/support/constants'
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
      const formattedAmount = new Intl.NumberFormat(lang, {
        style: 'decimal',
        minimumFractionDigits: 2
      }).format(amount)

      return `${formattedAmount} ${coin}`
    },

    formatAmountFromSatoshis: (satoshis: number, lang: string) => {
      return new Intl.NumberFormat(lang, {
        style: 'currency',
        currency: 'MCX',
        minimumFractionDigits: 2
      }).format(satoshis / 10 ** constants.decimalPerSatoshi)
    }
  }
})
