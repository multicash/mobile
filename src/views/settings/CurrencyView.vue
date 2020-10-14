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
export default {
  name: 'CurrencyView',

  data () {
    return {
      currencies: [
        {
          code: 'AUD',
          name: 'Australian Dollar'
        },
        {
          code: 'BRL',
          name: 'Brazilian Real'
        },
        {
          code: 'CAD',
          name: 'Canadian Dollar'
        },
        {
          code: 'CHF',
          name: 'Swiss Franc'
        },
        {
          code: 'CNY',
          name: 'Chinese Yuan'
        },
        {
          code: 'DKK',
          name: 'Danish krone'
        },
        {
          code: 'EUR',
          name: 'Euro'
        },
        {
          code: 'GBP',
          name: 'British Pound'
        },
        {
          code: 'HKD',
          name: 'Hong Kong Dollar'
        },
        {
          code: 'IDR',
          name: 'Indonesian Rupiah'
        },
        {
          code: 'NZD',
          name: 'New Zealand Dollar'
        },
        {
          code: 'RUB',
          name: 'Russian Ruble'
        },
        {
          code: 'SGD',
          name: 'Singapore dollar'
        },
        {
          code: 'THB',
          name: 'Thai Baht'
        },
        {
          code: 'USD',
          name: 'United States Dollar'
        }
      ]
    }
  },

  computed: {
    currenciesList () {
      const selectedCurrency = this.route.params ? this.route.params.currencyCode : null

      return [
        {
          data: this.currencies.map(currency => {
            return {
              title: currency.code,
              subtitle: currency.name,
              checked: selectedCurrency === currency.code
            }
          })
        }
      ]
    }
  }
}
</script>
