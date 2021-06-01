<template>
  <modal-view
    title="Top Up"
  >
<!--    <web-view-->
<!--      :style="styles.webView"-->
<!--      :source="{ uri: 'https://payments.guardarian.com/checkout?tid=4865078210' }"-->
<!--    />-->
    <text>Placeholder for (I guess) ChangeNOW pay portal</text>
    <rounded-button title="Pay" @on-press="navigation.navigate('payed')" icon="logo-euro"/>
  </modal-view>
</template>

<script>
// import WebView from 'react-native-webview'

export default {
  name: 'PayView',

  components: {
    // WebView
  },

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
  return {
    webView: {
      flex: 1
    }
  }
}
</script>
