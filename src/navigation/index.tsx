// eslint-disable-next-line no-use-before-define
import * as React from 'react'
import { Easing, Platform } from 'react-native'
import {
  createStackNavigator,
  TransitionPresets,
  TransitionSpecs,
  CardStyleInterpolators,
  HeaderStyleInterpolators
} from '@react-navigation/stack'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import Add from '@/navigation/Add'
import Contacts from '@/navigation/Contact'
import Pay from '@/navigation/Pay'
import Receive from '@/navigation/Receive'
import Settings from '@/navigation/Settings'
import Wallet from '@/navigation/Wallet'

// Authentication views
import AuthenticationPinView from '@/views/authentication/PinView.vue'

// Main application views
import HomeView from '@/views/HomeView.vue'
import ScanQRView from '@/views/ScanQRView.vue'
import SupportView from '@/views/settings/SupportView.vue'
import OrderWalletsView from '@/views/wallet/OrderWalletsView.vue'

const PinView = AuthenticationPinView
const Stack = createStackNavigator()

export const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        cardOverlayEnabled: true,
        ...Platform.select({
          ios: TransitionPresets.ModalPresentationIOS,
          default: TransitionPresets.FadeFromBottomAndroid
        })
      }}
      headerMode="none"
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
        name="wallet"
        component={Wallet}
      />
      <Stack.Screen
        name="orderWallets"
        component={OrderWalletsView as any}
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
        name="pin"
        component={PinView as any}
      />
      <Stack.Screen
        name="authenticate"
        component={AuthenticationPinView as any}
        options={{
          headerShown: false,
          gestureEnabled: false,
          cardOverlayEnabled: false,
          gestureDirection: 'vertical',
          transitionSpec: {
            open: {
              animation: 'timing',
              config: {
                duration: 0,
                easing: Easing.out(Easing.poly(5))
              }
            },
            close: TransitionSpecs.FadeOutToBottomAndroidSpec
          },
          cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
          headerStyleInterpolator: HeaderStyleInterpolators.forFade
        }}
      />
    </Stack.Navigator>
  )
}
