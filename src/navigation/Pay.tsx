import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import AmountView from '@/views/transaction/AmountView.vue'
import WalletsView from '@/views/transaction/WalletsView.vue'
import RecipientView from '@/views/transaction/RecipientView.vue'
import EnterRecipientView from '@/views/transaction/EnterRecipientView.vue'
import ConfirmView from '@/views/transaction/ConfirmView.vue'
import PayingView from '@/views/transaction/PayingView.vue'

const Stack = createStackNavigator()

export default () => {
  return (
    <Stack.Navigator
      initialRouteName="amount"
      headerMode="none"
    >
      <Stack.Screen
        name="amount"
        component={AmountView as any}
        initialParams={{ isReceive: false }}
      />
      <Stack.Screen
        name="wallets"
        component={WalletsView as any}
      />
      <Stack.Screen
        name="recipient"
        component={RecipientView as any}
      />
      <Stack.Screen
        name="enterRecipient"
        component={EnterRecipientView as any}
      />
      <Stack.Screen
        name="confirm"
        component={ConfirmView as any}
      />
      <Stack.Screen
        name="paying"
        component={PayingView as any}
      />
    </Stack.Navigator>
  )
}
