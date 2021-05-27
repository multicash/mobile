import * as React from 'react'
import AmountView from '@/views/transaction/AmountView.vue'
import WalletsView from '@/views/transaction/WalletsView.vue'
import RecipientView from '@/views/transaction/RecipientView.vue'
import QrView from '@/views/transaction/QrView.vue'
import ConfirmView from '@/views/transaction/ConfirmView.vue'
import PayingView from '@/views/transaction/PayingView.vue'
import { enableScreens } from 'react-native-screens'
import { createNativeStackNavigator } from 'react-native-screens/native-stack'
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
        initialParams={{ isReceive: true }}
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
        name="qr"
        component={QrView as any}
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
