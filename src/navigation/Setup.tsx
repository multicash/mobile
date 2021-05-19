import * as React from 'react'
import { Appearance } from 'react-native'
import { createNativeStackNavigator } from 'react-native-screens/native-stack'
import { enableScreens } from 'react-native-screens'
import BiometricAuthenticationView from '@/views/setup/BiometricAuthenticationView.vue'
import CurrencyView from '@/views/setup/CurrencyView.vue'
import WelcomeView from '@/views/setup/WelcomeView.vue'
import IntroView from '@/views/setup/IntroView.vue'
import PinExplanationView from '@/views/setup/PinExplanationView.vue'
import SetupPinView from '@/views/setup/SetupPinView.vue'
import DoneView from '@/views/setup/DoneView.vue'

enableScreens()
const Stack = createNativeStackNavigator()

export default () => {
  return (
    <Stack.Navigator
      initialRouteName="welcome"
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
        contentStyle: {
          backgroundColor: Appearance.getColorScheme() === 'dark' ? '#222429' : '#ededf3'
        }
      }}
    >
      <Stack.Screen
        name="welcome"
        component={WelcomeView as any}
      />
      <Stack.Screen
        name="intro"
        component={IntroView as any}
      />
      <Stack.Screen
        name="pinExplanation"
        component={PinExplanationView as any}
      />
      <Stack.Screen
        name="setupPin"
        component={SetupPinView as any}
        options={{
          headerShown: false,
          gestureEnabled: false,
          stackPresentation: 'modal'
        }}
      />
      <Stack.Screen
        name="biometricAuthentication"
        component={BiometricAuthenticationView as any}
      />
      <Stack.Screen
        name="currency"
        component={CurrencyView as any}
      />
      <Stack.Screen
        name="done"
        component={DoneView as any}
      />
    </Stack.Navigator>
  )
}
