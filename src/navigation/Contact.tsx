import * as React from 'react'
import ContactsOverviewView from '@/views/contacts/OverviewView.vue'
import ContactView from '@/views/contacts/ContactView.vue'
import ContactIconsView from '@/views/contacts/IconsView.vue'
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
        component={ContactsOverviewView as any}
      />
      <Stack.Screen
        name="contact"
        component={ContactView as any}
      />
      <Stack.Screen
        name="icons"
        component={ContactIconsView as any}
      />
    </Stack.Navigator>
  )
}
