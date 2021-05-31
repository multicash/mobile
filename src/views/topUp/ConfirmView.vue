<template>
  <modal-view
    title="Confirm Top Up"
    has-back-button
    @on-dismiss="navigation.goBack()"
    scrollable
  >
    <view-section
      title="Summary"
    >
      <action-notification
        title="You pay"
        :label="`1 ${ route.params.estimationCurrency } ≈ 2.43 ${ route.params.buyCurrency }`"
      >
        <money
          :amount="route.params.buy"
          :currency="route.params.buyCurrency"
          :style="styles.pay"
        />
      </action-notification>

      <action-notification
        title="You get"
        type="success"
        :label="wallet.tag"
      >
        <money
          :amount="route.params.estimation * 100000000"
          crypto
          :style="styles.estimation"
          approximately
        />
      </action-notification>

      <action-notification
        type="primary"
        title="Estimated Arrival"
        label="≈ 10 minutes"
      />
    </view-section>

    <view-section
      title="Confirm"
    >
      <switch-notification
        label="I've read and agree to the ChangeNOW Terms of Use, Privacy Policy and Risk Disclosure Statement"
        :value="readTerms"
        @input="readTerms = $event"
        always-show-extra
      >
        <rounded-button title="Show documents" />
      </switch-notification>
      <switch-notification
        label="I'm aware that this exchange is made through a third-party service"
        :value="awareTerm"
        @input="awareTerm = $event"
      />

      <rounded-button
        :disabled="!(readTerms && awareTerm)"
        type="primary"
        title="Pay"
        icon="card"
        @on-press="pay"
      />
    </view-section>
  </modal-view>
</template>

<script>
import { Platform } from 'react-native'

export default {
  name: 'ConfirmView',

  data () {
    return {
      readTerms: false,
      awareTerm: false
    }
  },

  computed: {
    styles () {
      return styleStore(this.isDarkScheme)
    }
  },

  methods: {
    pay () {
      this.navigation.navigate('pay', {
        buy: this.route.params.buy,
        buyCurrency: this.route.params.buyCurrency,
        estimation: this.route.params.estimation,
        estimationCurrency: this.route.params.estimationCurrency,
        walletIdentifier: this.wallet.identifier
      })
    }
  }
}

const styleStore = (isDarkScheme) => {
  return {
    pay: {
      fontWeight: Platform.OS === 'ios' ? '900' : 'bold',
      fontSize: 25
    },

    estimation: {
      fontWeight: Platform.OS === 'ios' ? '900' : 'bold',
      fontSize: 25,
      color: 'white'
    }
  }
}
</script>
