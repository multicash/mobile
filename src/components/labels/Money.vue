<!--MultiCash Mobile-->
<!--Copyright (C) 2021  Swen van Zanten-->

<!--This program is free software: you can redistribute it and/or modify-->
<!--it under the terms of the GNU General Public License as published by-->
<!--the Free Software Foundation, either version 3 of the License, or-->
<!--any later version.-->

<!--This program is distributed in the hope that it will be useful,-->
<!--but WITHOUT ANY WARRANTY; without even the implied warranty of-->
<!--MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the-->
<!--GNU General Public License for more details.-->

<!--You should have received a copy of the GNU General Public License-->
<!--along with this program.  If not, see <https://www.gnu.org/licenses/>.-->

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

      return this.getFormattedCurrency(this.amount, this.currency)
    }
  }
}
</script>
