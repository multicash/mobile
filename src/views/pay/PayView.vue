<template>
  <app-navigator></app-navigator>
</template>

<script>
import { Appearance } from 'react-native'
import { createAppContainer, createStackNavigator } from 'vue-native-router'
import AmountScreen from '@/views/pay/AmountScreen'
import RecipientScreen from '@/views/pay/RecipientScreen'

const StackNavigator = createStackNavigator(
  {
    Amount: AmountScreen,
    Recipient: RecipientScreen
  },
  {
    initialRouteName: 'Amount',
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
