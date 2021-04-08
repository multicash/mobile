import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import WelcomeView from '@/views/setup/WelcomeView.vue'
import IntroView from '@/views/setup/IntroView.vue'
import SetupPinView from '@/views/setup/SetupPinView.vue'
import DoneView from '@/views/setup/DoneView.vue'

const Stack = createStackNavigator()

export default () => {
  return (
    <Stack.Navigator
      initialRouteName="welcome"
      headerMode="none"
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
        name="setupPin"
        component={SetupPinView as any}
      />
      <Stack.Screen
        name="done"
        component={DoneView as any}
      />
    </Stack.Navigator>
  )
}
