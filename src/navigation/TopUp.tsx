/*
  MultiCash Mobile
  Copyright (C) 2021  Swen van Zanten

  This program is free software: you can redistribute it and/or modify
  it under the terms of the GNU General Public License as published by
  the Free Software Foundation, either version 3 of the License, or
  any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
  along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

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
        options={{
          gestureEnabled: false,
          stackPresentation: 'modal'
        }}
      >
        {() => (
          <Stack.Navigator
            initialRouteName="nice"
            screenOptions={{
              headerShown: false,
              gestureEnabled: false,
              contentStyle: {
                backgroundColor: Appearance.getColorScheme() === 'dark' ? '#222429' : '#ededf3'
              }
            }}
          >
            <Stack.Screen
              name="nice"
              component={PayView as any}
            />
            <Stack.Screen
              name="payed"
              component={PayedView as any}
            />
          </Stack.Navigator>
        )}
      </Stack.Screen>
    </Stack.Navigator>
  )
}
