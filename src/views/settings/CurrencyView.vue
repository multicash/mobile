<template>
  <modal-view
    title="Currency"
    has-back-button
    @on-dismiss="navigation.goBack()"
    no-padding
    :header="header"
  >
    <table-view
      :sections="currenciesList"
      :header="tableHeader"
    />
  </modal-view>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Currencies from '@/core/assets/currencies'

export default {
  name: 'CurrencyView',

  props: {
    header: {
      type: Boolean,
      default: true
    },

    tableHeader: {
      type: Function,
      default: undefined
    }
  },

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
                this.$emit('selected', currency)
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
