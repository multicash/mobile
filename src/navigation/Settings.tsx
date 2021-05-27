import * as React from 'react'
import AboutView from '@/views/settings/AboutView.vue'
import SettingsOverviewView from '@/views/settings/OverviewView.vue'
import BiometricAuthenticationView from '@/views/settings/BiometricAuthenticationView.vue'
import ChangePinView from '@/views/settings/ChangePinView.vue'
import CurrencyView from '@/views/settings/CurrencyView.vue'
import SupportView from '@/views/settings/SupportView.vue'
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
