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
        :value="amount"
        @input="amount = $event"
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
    />

    <spacer />

    <text :style="styles.poweredBy">Powered by ChangeNOW</text>
  </modal-view>
</template>

<script>
import { mapGetters } from 'vuex'
import constants from '@/core/support/constants'

export default {
  name: 'AmountView',

  data () {
    return {
      amount: '1500',
      buyCurrency: constants.defaultCurrencyCode
    }
  },

  computed: {
    ...mapGetters(['currentCurrencyCode']),

    styles () {
      return styleStore(this.isDarkScheme)
    },

    estimation () {
      return (parseFloat(this.amount) * 2.4334554 || 0).toFixed(5).toString()
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
    }
  }
}

const styleStore = (isDarkScheme) => {
  return {
    currency: {
      flex: 0.1
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
      minWidth: 153,
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
