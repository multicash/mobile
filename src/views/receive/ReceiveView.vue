<template>
  <app-navigator></app-navigator>
</template>

<script>
import { createAppContainer, createStackNavigator } from 'vue-native-router'
import ReceiveScreen from '@/views/receive/ReceiveScreen'
import WalletsScreen from '@/views/wallet/WalletsScreen'

const StackNavigator = createStackNavigator(
  {
    receive: ReceiveScreen,
    wallets: WalletsScreen
  },
  {
    initialRouteName: 'receive',
    headerMode: 'none'
  }
)

const AppNavigator = createAppContainer(StackNavigator)

export default {
  name: 'ReceiveView',

  components: { AppNavigator }
}
</script>
