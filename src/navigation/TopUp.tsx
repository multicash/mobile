import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import OverviewView from '@/views/topUp/OverviewView.vue'

const Stack = createStackNavigator()

export default () => {
  return (
    <Stack.Navigator
      initialRouteName="overview"
      headerMode="none"
    >
      <Stack.Screen
        name="overview"
        component={OverviewView as any}
      />
    </Stack.Navigator>
  )
}
