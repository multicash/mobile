import * as React from 'react'
import BuyView from '@/views/topUp/BuyView.vue'
import ConfirmView from '@/views/topUp/ConfirmView.vue'
import CurrencyView from '@/views/topUp/CurrencyView.vue'
import OverviewView from '@/views/topUp/OverviewView.vue'
import PayedView from '@/views/topUp/PayedView.vue'
import PayView from '@/views/topUp/PayView.vue'
import { enableScreens } from 'react-native-screens'
import { createNativeStackNavigator } from 'react-native-screens/native-stack'
import { Appearance } from 'react-native'

enableScreens()
const Stack = createNativeStackNavigator()

export default () => {
  return (
    <Stack.Navigator
      initialRouteName="overview"
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: Appearance.getColorScheme() === 'dark' ? '#222429' : '#ededf3'
        }
      }}
    >
      <Stack.Screen
        name="overview"
        component={OverviewView as any}
      />
      <Stack.Screen
        name="buy"
        component={BuyView as any}
      />
      <Stack.Screen
        name="currency"
        component={CurrencyView as any}
      />
      <Stack.Screen
        name="confirm"
        component={ConfirmView as any}
      />
      <Stack.Screen
        name="pay"
        component={PayView as any}
      />
      <Stack.Screen
        name="payed"
        component={PayedView as any}
      />
    </Stack.Navigator>
  )
}
