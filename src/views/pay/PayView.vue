<template>
  <app-navigator></app-navigator>
</template>

<script>
import { Appearance } from 'react-native'
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
    headerMode: 'none',
    cardStyle: {
      backgroundColor: Appearance.getColorScheme() === 'dark' ? '#222429' : '#ededf3'
    }
  }
)

const AppNavigator = createAppContainer(StackNavigator)

export default {
  name: 'PayView',

  components: { AppNavigator }
}
</script>
