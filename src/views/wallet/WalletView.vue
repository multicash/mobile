<template>
  <app-navigator ref="appNavigator"></app-navigator>
</template>

<script>
import { createAppContainer, createStackNavigator } from 'vue-native-router'
import OverviewScreen from '@/views/wallet/OverviewScreen'
import SettingsScreen from '@/views/wallet/SettingsScreen'
import TransactionScreen from '@/views/wallet/TransactionScreen'

const StackNavigator = createStackNavigator(
  {
    overview: OverviewScreen,
    settings: SettingsScreen,
    transaction: TransactionScreen
  },
  {
    initialRouteName: 'overview',
    headerMode: 'none'
  }
)

const AppNavigator = createAppContainer(StackNavigator)

export default {
  name: 'WalletView',

  components: { AppNavigator },

  props: {
    wallet: {
      type: Object,
      required: true
    }
  },

  mounted () {
    const overviewScreen = this.$children[0]

    if (overviewScreen.$options.name === 'OverviewScreen') {
      overviewScreen.wallet = this.wallet
    }
  }
}
</script>
