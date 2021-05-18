import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import AboutView from '@/views/settings/AboutView.vue'
import SettingsOverviewView from '@/views/settings/OverviewView.vue'
import BiometricAuthenticationView from '@/views/settings/BiometricAuthenticationView.vue'
import ChangePinView from '@/views/settings/ChangePinView.vue'
import CurrencyView from '@/views/settings/CurrencyView.vue'
import SupportView from '@/views/settings/SupportView.vue'

const Stack = createStackNavigator()

export default () => {
  return (
    <Stack.Navigator
      initialRouteName="overview"
      headerMode="none"
    >
      <Stack.Screen
        name="overview"
        component={SettingsOverviewView as any}
      />
      <Stack.Screen
        name="biometricAuthentication"
        component={BiometricAuthenticationView as any}
      />
      <Stack.Screen
        name="changePin"
        component={ChangePinView as any}
      />
      <Stack.Screen
        name="currency"
        component={CurrencyView as any}
      />
      <Stack.Screen
        name="support"
        component={SupportView as any}
      />
      <Stack.Screen
        name="about"
        component={AboutView as any}
      />
    </Stack.Navigator>
  )
}
