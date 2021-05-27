import * as React from 'react'
import AmountView from '@/views/transaction/AmountView.vue'
import WalletsView from '@/views/transaction/WalletsView.vue'
import RecipientView from '@/views/transaction/RecipientView.vue'
import EnterRecipientView from '@/views/transaction/EnterRecipientView.vue'
import ConfirmView from '@/views/transaction/ConfirmView.vue'
import PayingView from '@/views/transaction/PayingView.vue'
import { createNativeStackNavigator } from 'react-native-screens/native-stack'
import { enableScreens } from 'react-native-screens'
import { Appearance } from 'react-native'

enableScreens()
const Stack = createNativeStackNavigator()

export default () => {
  return (
    <Stack.Navigator
      initialRouteName="amount"
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: Appearance.getColorScheme() === 'dark' ? '#222429' : '#ededf3'
        }
      }}
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
        options={{
          headerShown: false,
          gestureEnabled: false,
          stackPresentation: 'modal'
        }}
      />
    </Stack.Navigator>
  )
}
