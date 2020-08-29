<template>
  <app-navigator></app-navigator>
</template>

<script>
import { createAppContainer, createStackNavigator } from 'vue-native-router'
import AmountScreen from '@/views/pay/AmountScreen'
import RecipientScreen from '@/views/pay/RecipientScreen'
import EnterRecipientScreen from '@/views/pay/EnterRecipientScreen'
import WalletsScreen from '@/views/pay/WalletsScreen'
import ConfirmScreen from '@/views/pay/ConfirmScreen'
import PayingScreen from '@/views/pay/PayingScreen'

const StackNavigator = createStackNavigator(
  {
    amount: AmountScreen,
    recipient: RecipientScreen,
    enterRecipient: EnterRecipientScreen,
    wallets: WalletsScreen,
    confirm: ConfirmScreen,
    pay: PayingScreen
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
