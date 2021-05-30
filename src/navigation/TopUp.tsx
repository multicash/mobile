import * as React from 'react'
import BuyView from '@/views/topUp/BuyView.vue'
import CurrencyView from '@/views/topUp/CurrencyView.vue'
import OverviewView from '@/views/topUp/OverviewView.vue'
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
    </Stack.Navigator>
  )
}
