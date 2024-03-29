/*
  MultiCash Mobile
  Copyright (C) 2021  MultiCash Developers

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
import AddView from '@/views/invest/AddView.vue'
import InvestmentView from '@/views/invest/InvestmentView.vue'
import StatisticsView from '@/views/invest/StatisticsView.vue'
import OverviewView from '@/views/invest/OverviewView.vue'
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
        name="add"
        component={AddView as any}
      />
      <Stack.Screen
        name="investment"
        component={InvestmentView as any}
      />
      <Stack.Screen
        name="statistics"
        component={StatisticsView as any}
      />
    </Stack.Navigator>
  )
}
