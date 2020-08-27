<template>
  <text>{{ amountFormatted }}</text>
</template>

<script>
import constants from '@/utils/constants'

export default {
  name: 'money',

  props: {
    amount: {
      type: Number,
      required: true
    },
    currency: {
      type: String,
      default: 'XVG'
    },
    crypto: {
      type: Boolean,
      default: false
    },
    convert: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    // ...mapGetters(['currentRate', 'currentCurrencyCode']),

    amountFormatted () {
      if (this.crypto) {
        return this.getFormattedCrypto(this.amount / 1000000, 'en', this.currency)
      }

      if (this.convert) {
        const amount = (this.amount) * 0.65 // this.currentRate
        return this.getFormattedCurrency(amount, 'en', constants.defaultCurrencyCode) // this.currentCurrencyCode)
      }

      return ''
    }
  }
}
</script>
