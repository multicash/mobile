<template>
  <app-navigator></app-navigator>
</template>

<script>
import { createAppContainer, createStackNavigator } from 'vue-native-router'
import AmountScreen from '@/views/pay/AmountScreen'
import RecipientScreen from '@/views/pay/RecipientScreen'
import WalletsScreen from '@/views/pay/WalletsScreen'
import ConfirmScreen from '@/views/pay/ConfirmScreen'

const StackNavigator = createStackNavigator(
  {
    amount: AmountScreen,
    recipient: RecipientScreen,
    wallets: WalletsScreen,
    confirm: ConfirmScreen
  },
  {
    initialRouteName: 'amount',
    headerMode: 'none'
  }
)

const AppNavigator = createAppContainer(StackNavigator)

export default {
  name: 'PayView',

  components: { AppNavigator }
}
</script>
