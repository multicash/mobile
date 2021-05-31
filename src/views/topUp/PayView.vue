<template>
  <modal-view>
    <text>ChangeNOW pay view</text>
    <rounded-button
      title="simulate pay"
      @on-press="payed"
    />
  </modal-view>
</template>

<script>
export default {
  name: 'PayView',

  computed: {
    styles () {
      return styleStore(this.isDarkScheme)
    }
  },

  methods: {
    payed () {
      this.navigation.navigate('payed', {
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
  return {}
}
</script>
