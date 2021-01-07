<template>
  <text
    :minimumFontScale="0.01"
    :adjustsFontSizeToFit="true"
    :numberOfLines="1"
    :style="style || {}"
  >{{ amountFormatted }}</text>
</template>

<script>
import constants from '@/support/constants'
import { mapGetters } from 'vuex'
import Locale from '@/support/locale'

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
    },
    style: {
      type: Array,
      default: null
    }
  },

  computed: {
    ...mapGetters(['currentCurrencyCode']),

    amountFormatted () {
      const locale = Locale.getCurrentLocale()

      if (this.crypto) {
        return this.getFormattedCrypto(this.amount / constants.satoshiDivider, locale, this.currency)
      }

      if (this.convert) {
        const amount = (this.amount / constants.satoshiDivider) * 0.65 // this.currentRate
        return this.getFormattedCurrency(amount, locale, this.currentCurrencyCode)
      }

      return ''
    }
  }
}
</script>
