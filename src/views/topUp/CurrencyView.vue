<template>
  <modal-view
    title="Currency"
    has-back-button
    @on-dismiss="navigation.goBack()"
    no-padding
  >
    <table-view
      :sections="currencies"
    />
  </modal-view>
</template>

<script>
import { mapGetters } from 'vuex'
import { buyCurrencies } from '@/core/assets/currencies'

export default {
  name: 'CurrencyView',

  computed: {
    ...mapGetters(['currentCurrencyCode']),

    styles () {
      return styleStore(this.isDarkScheme)
    },

    currencies () {
      const selectedCurrency = this.route.params.currency

      return [
        {
          data: buyCurrencies.map(currency => {
            return {
              title: currency.code,
              subtitle: currency.name,
              checked: selectedCurrency === currency.code,
              onPress: () => {
                this.navigation.navigate(this.route.params.returnView, { currency })
              }
            }
          })
        }
      ]
    }
  }
}

const styleStore = (isDarkScheme) => {
  return {}
}
</script>
