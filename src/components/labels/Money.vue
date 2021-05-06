<template>
  <text
    :minimumFontScale="0.01"
    :adjustsFontSizeToFit="true"
    :numberOfLines="1"
    :style="style || {}"
  >
    <text v-if="approximately">≈ </text>
    {{ amountFormatted }}
  </text>
</template>

<script>
import constants from '@/core/support/constants'
import { mapGetters } from 'vuex'

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
    },
    approximately: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    ...mapGetters(['currentCurrencyCode']),

    amountFormatted () {
      if (this.crypto) {
        return this.getFormattedCrypto(this.amount / constants.satoshiDivider, this.currency)
      }

      if (this.convert) {
        const amount = (this.amount / constants.satoshiDivider) * 0.65 // this.currentRate
        return this.getFormattedCurrency(amount, this.currentCurrencyCode)
      }

      return ''
    }
  }
}
</script>
