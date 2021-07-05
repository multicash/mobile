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
import AboutView from '@/views/settings/AboutView.vue'
import AppearanceView from '@/views/settings/AppearanceView.vue'
import AppIconView from '@/views/settings/AppIconView.vue'
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
      <Stack.Screen
        name="appearance"
        component={AppearanceView as any}
      />
      <Stack.Screen
        name="appIcon"
        component={AppIconView as any}
      />
    </Stack.Navigator>
  )
}
