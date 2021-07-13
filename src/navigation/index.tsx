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

// eslint-disable-next-line no-use-before-define
import * as React from 'react'
import { Appearance } from 'react-native'
import { createNativeStackNavigator } from 'react-native-screens/native-stack'
import { enableScreens } from 'react-native-screens'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import Add from '@/navigation/Add'
import Contacts from '@/navigation/Contact'
import Pay from '@/navigation/Pay'
import Receive from '@/navigation/Receive'
import Settings from '@/navigation/Settings'
import TopUpExplainView from '@/views/topUp/TopUpExplainView.vue'
import TopUp from '@/navigation/TopUp'
import InvestExplainView from '@/views/invest/InvestExplainView.vue'
import Invest from '@/navigation/Invest'
import Wallet from '@/navigation/Wallet'

// Authentication views
import AuthenticationPinView from '@/views/authentication/PinView.vue'

// Main application views
import HomeView from '@/views/home/HomeView.vue'
import ScanQRView from '@/views/home/ScanQRView.vue'
import SupportView from '@/views/settings/SupportView.vue'
import OrderWalletsView from '@/views/wallet/OrderWalletsView.vue'
import AccountsView from '@/views/wallet/AccountsView.vue'
import WhatsNewView from '@/views/home/WhatsNewView.vue'

enableScreens()
const PinView = AuthenticationPinView
const Stack = createNativeStackNavigator()

export const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        stackPresentation: 'modal',
        contentStyle: {
          backgroundColor: Appearance.getColorScheme() === 'dark' ? '#222429' : '#ededf3'
        }
      }}
    >
      <Stack.Screen
        name="home"
      >
        {props => (
          // @ts-ignore
          <HomeView insets={useSafeAreaInsets()} {...props} />
        )}
      </Stack.Screen>
      <Stack.Screen
        name="settings"
        component={Settings}
      />
      <Stack.Screen
        name="support"
        component={SupportView as any}
      />
      <Stack.Screen
        name="contacts"
        component={Contacts}
      />
      <Stack.Screen
        name="pay"
        component={Pay}
      />
      <Stack.Screen
        name="receive"
        component={Receive}
      />
      <Stack.Screen
        name="topUp.explain"
        component={TopUpExplainView as any}
      />
      <Stack.Screen
        name="topUp"
        component={TopUp}
      />
      <Stack.Screen
        name="invest.explain"
        component={InvestExplainView as any}
      />
      <Stack.Screen
        name="invest"
        component={Invest}
      />
      <Stack.Screen
        name="wallet"
        component={Wallet}
      />
      <Stack.Screen
        name="orderWallets"
        component={OrderWalletsView as any}
      />
      <Stack.Screen
        name="orderWallets.accounts"
        component={AccountsView as any}
      />
      <Stack.Screen
        name="add"
        component={Add}
      />
      <Stack.Screen
        name="scanQR"
        component={ScanQRView as any}
      />
      <Stack.Screen
        name="whatsNew"
        component={WhatsNewView as any}
      />
      <Stack.Screen
        name="pin"
        component={PinView as any}
        options={{
          headerShown: false,
          gestureEnabled: false,
          stackAnimation: 'flip',
          stackPresentation: 'containedModal'
        }}
      />
      <Stack.Screen
        name="authenticate"
        component={AuthenticationPinView as any}
        initialParams={{ unlock: 'application' }}
        options={{
          headerShown: false,
          gestureEnabled: false,
          stackAnimation: 'fade',
          stackPresentation: 'fullScreenModal'
        }}
      />
    </Stack.Navigator>
  )
}
