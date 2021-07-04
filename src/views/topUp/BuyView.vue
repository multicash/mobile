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
  <modal-view
    :title="`Buy ${currency}`"
    header
    has-back-button
    @on-dismiss="navigation.goBack()"
  >
    <grouped-field>
      <rounded-text-input
        ref="amount"
        :value="buy"
        @input="buyInput"
        title="You Pay"
        placeholder="0.00"
        keyboard-type="numeric"
        auto-focus
      />
      <spacer small/>
      <selector
        name="Currency"
        :style="styles.currency"
        :value="buyCurrency"
        @on-press="selectBuyCurrency"
      />
    </grouped-field>
    <view>
      <view :style="styles.dottedLine" />
      <view :style="styles.step">
        <icon name="checkmark" :size="20" />
        <text :style="styles.stepText">No extra fees</text>
      </view>
      <view :style="styles.step">
        <icon name="checkmark" :size="20" />
        <text :style="styles.stepText">Estimated rate: 1 {{ currency }} ~ 2.43 {{ buyCurrency }}</text>
      </view>
    </view>
    <grouped-field>
      <rounded-text-input
        ref="estimation"
        :value="estimation"
        @input="estimationInput"
        title="You Get"
        placeholder="0.00"
        keyboard-type="numeric"
      />
      <spacer small/>
      <text
        :style="styles.getCurrency"
      >
        {{ currency }}
      </text>
    </grouped-field>

    <spacer/>

    <rounded-button
      title="Buy"
      icon="card"
      type="primary"
      @on-press="confirm"
    />

    <spacer />

    <text :style="styles.poweredBy">Powered by ChangeNOW</text>
  </modal-view>
</template>

<script>
import { mapGetters } from 'vuex'
import constants from '@/core/support/constants'

const price = 2.4334554

export default {
  name: 'AmountView',

  data () {
    return {
      buy: '1500',
      estimation: (1500 / price).toFixed(5).toString(),
      buyCurrency: constants.defaultCurrencyCode
    }
  },

  computed: {
    ...mapGetters(['currentCurrencyCode']),

    styles () {
      return styleStore(this.isDarkScheme)
    },

    currency () {
      return this.wallet.info.wallet.coin.toUpperCase()
    }
  },

  created () {
    if (constants.supportBuyCurrencies.includes(this.currentCurrencyCode)) {
      this.buyCurrency = this.currentCurrencyCode
    }
  },

  methods: {
    buyInput (amount) {
      this.buy = amount
      this.estimation = ((parseFloat(amount) / 2.4334554) || 0).toFixed(5).toString()
    },

    estimationInput (amount) {
      this.estimation = amount
      this.buy = ((parseFloat(amount) * 2.4334554) || 0).toFixed(2).toString()
    },

    selectBuyCurrency () {
      const unsubscribe = this.navigation.addListener('focus', () => {
        if (this.route.params.currency) {
          this.buyCurrency = this.route.params.currency.code
          this.navigation.removeListener('focus', unsubscribe)
        }
      })

      this.navigation.navigate('currency', {
        currency: this.buyCurrency,
        returnView: 'buy'
      })
    },

    confirm () {
      this.navigation.navigate('confirm', {
        buy: parseFloat(this.buy),
        buyCurrency: this.buyCurrency,
        estimation: parseFloat(this.estimation),
        estimationCurrency: this.currency,
        walletIdentifier: this.wallet.identifier
      })
    }
  }
}

const styleStore = (isDarkScheme) => {
  return {
    currency: {
      maxWidth: 140
    },

    dottedLine: {
      position: 'absolute',
      width: 1,
      height: 100,
      top: -10,
      left: 9,
      borderStyle: 'dashed',
      borderWidth: 1,
      borderColor: isDarkScheme ? '#3e3e3e' : '#cecece'
    },

    step: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10
    },

    stepText: {
      marginLeft: 5,
      color: isDarkScheme ? '#828282' : '#828282'
    },

    getCurrency: {
      width: 140,
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: isDarkScheme ? 'black' : 'white',
      borderRadius: 10,
      paddingVertical: 16,
      paddingHorizontal: 15,
      marginBottom: 10,
      overflow: 'hidden',
      fontSize: 23,
      color: isDarkScheme ? '#dadada' : 'black'
    },

    poweredBy: {
      textAlign: 'center',
      color: isDarkScheme ? '#828282' : '#828282'
    }
  }
}
</script>
