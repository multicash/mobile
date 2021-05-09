<template>
  <view-background no-padding>
    <modal-navigation
      has-back-button
      title="Currency"
      @on-dismiss="navigation.goBack()"
    />
    <table-view :sections="currenciesList"/>
  </view-background>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Currencies from '@/core/assets/currencies'

export default {
  name: 'CurrencyView',

  computed: {
    ...mapGetters(['currentCurrencyCode']),

    currenciesList () {
      const selectedCurrency = this.currentCurrencyCode

      return [
        {
          data: Currencies.map(currency => {
            return {
              title: currency.code,
              subtitle: currency.name,
              checked: selectedCurrency === currency.code,
              onPress: () => {
                this.updateCurrency(currency.code)
              }
            }
          })
        }
      ]
    }
  },

  methods: {
    ...mapActions(['updateCurrency'])
  }
}
</script>
