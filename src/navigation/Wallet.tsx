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
import OverviewView from '@/views/wallet/OverviewView.vue'
import WalletSettingsView from '@/views/wallet/SettingsView.vue'
import TransactionView from '@/views/wallet/TransactionView.vue'
import NameView from '@/views/wallet/NameView.vue'
import IconView from '@/views/wallet/IconView.vue'
import RestoreKeyView from '@/views/wallet/RestoreKeyView.vue'
import ExportView from '@/views/wallet/ExportView.vue'
import WalletIconsView from '@/views/wallet/IconsView.vue'
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
        name="settings"
        component={WalletSettingsView as any}
      />
      <Stack.Screen
        name="transaction"
        component={TransactionView as any}
      />
      <Stack.Screen
        name="name"
        component={NameView as any}
      />
      <Stack.Screen
        name="icon"
        component={IconView as any}
      />
      <Stack.Screen
        name="restoreKey"
        component={RestoreKeyView as any}
      />
      <Stack.Screen
        name="export"
        component={ExportView as any}
      />
      <Stack.Screen
        name="icons"
        component={WalletIconsView as any}
      />
    </Stack.Navigator>
  )
}
