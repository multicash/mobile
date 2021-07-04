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
