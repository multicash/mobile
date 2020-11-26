<template>
  <text
    :minimumFontScale="0.01"
    :adjustsFontSizeToFit="true"
    :numberOfLines="1"
  >{{ amountFormatted }}</text>
</template>

<script>
import constants from '@/support/constants'

export default {
  name: 'money',

  props: {
    amount: {
      type: Number,
      required: true
    },
    currency: {
      type: String,
      default: 'MCX'
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
        return this.getFormattedCrypto(this.amount / constants.satoshiDivider, 'en', this.currency)
      }

      if (this.convert) {
        const amount = (this.amount / constants.satoshiDivider) * 0.65 // this.currentRate
        return this.getFormattedCurrency(amount, 'en', constants.defaultCurrencyCode) // this.currentCurrencyCode)
      }

      return ''
    }
  }
}
</script>
