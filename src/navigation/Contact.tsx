import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ContactsOverviewView from '@/views/contacts/OverviewView.vue'
import ContactView from '@/views/contacts/ContactView.vue'
import ContactIconsView from '@/views/contacts/IconsView.vue'

const Stack = createStackNavigator()

export default () => {
  return (
    <Stack.Navigator
      initialRouteName="overview"
      headerMode="none"
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
