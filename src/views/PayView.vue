<template>
  <app-navigator></app-navigator>
</template>

<script>
import { createAppContainer, createStackNavigator } from 'vue-native-router'
import AmountScreen from '@/views/transaction/AmountScreen'
import RecipientScreen from '@/views/transaction/RecipientScreen'
import EnterRecipientScreen from '@/views/transaction/EnterRecipientScreen'
import WalletsScreen from '@/views/transaction/WalletsScreen'
import ConfirmScreen from '@/views/transaction/ConfirmScreen'
import PayingScreen from '@/views/transaction/PayingScreen'

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
    initialRouteParams: { isReceive: false },
    headerMode: 'none'
  }
)

const AppNavigator = createAppContainer(StackNavigator)

export default {
  name: 'PayView',

  components: { AppNavigator }
}
</script>
