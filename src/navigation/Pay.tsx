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
import AmountView from '@/views/transaction/AmountView.vue'
import WalletsView from '@/views/transaction/WalletsView.vue'
import RecipientView from '@/views/transaction/RecipientView.vue'
import EnterRecipientView from '@/views/transaction/EnterRecipientView.vue'
import ConfirmView from '@/views/transaction/ConfirmView.vue'
import PayingView from '@/views/transaction/PayingView.vue'
import { createNativeStackNavigator } from 'react-native-screens/native-stack'
import { enableScreens } from 'react-native-screens'
import { Appearance } from 'react-native'

enableScreens()
const Stack = createNativeStackNavigator()

export default () => {
  return (
    <Stack.Navigator
      initialRouteName="amount"
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: Appearance.getColorScheme() === 'dark' ? '#222429' : '#ededf3'
        }
      }}
    >
      <Stack.Screen
        name="amount"
        component={AmountView as any}
        initialParams={{ isReceive: false }}
      />
      <Stack.Screen
        name="wallets"
        component={WalletsView as any}
      />
      <Stack.Screen
        name="recipient"
        component={RecipientView as any}
      />
      <Stack.Screen
        name="enterRecipient"
        component={EnterRecipientView as any}
      />
      <Stack.Screen
        name="confirm"
        component={ConfirmView as any}
      />
      <Stack.Screen
        name="paying"
        component={PayingView as any}
        options={{
          headerShown: false,
          gestureEnabled: false,
          stackPresentation: 'modal'
        }}
      />
    </Stack.Navigator>
  )
}
