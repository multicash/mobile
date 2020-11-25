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

// Setup views
import WelcomeView from '@/views/setup/WelcomeView.vue'
import IntroView from '@/views/setup/IntroView.vue'
import SetupPinView from '@/views/setup/SetupPinView.vue'
import DoneView from '@/views/setup/DoneView.vue'

// Authentication views
import AuthenticationPinView from '@/views/authentication/PinView.vue'

// Main application views
import HomeView from '@/views/HomeView.vue'

// Settings views
import SettingsOverviewView from '@/views/settings/OverviewView.vue'
import BiometricAuthenticationView from '@/views/settings/BiometricAuthenticationView.vue'
import ChangePinView from '@/views/settings/ChangePinView.vue'
import CurrencyView from '@/views/settings/CurrencyView.vue'
import SupportView from '@/views/settings/SupportView.vue'

// Contact views
import ContactsOverviewView from '@/views/contacts/OverviewView.vue'
import ContactView from '@/views/contacts/ContactView.vue'
import ContactIconsView from '@/views/contacts/IconsView.vue'

// Transaction views
import AmountView from '@/views/transaction/AmountView.vue'
import WalletsView from '@/views/transaction/WalletsView.vue'
import RecipientView from '@/views/transaction/RecipientView.vue'
import EnterRecipientView from '@/views/transaction/EnterRecipientView.vue'
import QrView from '@/views/transaction/QrView.vue'
import ConfirmView from '@/views/transaction/ConfirmView.vue'
import PayingView from '@/views/transaction/PayingView.vue'

// Wallet views
import OverviewView from '@/views/wallet/OverviewView.vue'
import WalletSettingsView from '@/views/wallet/SettingsView.vue'
import TransactionView from '@/views/wallet/TransactionView.vue'
import NameView from '@/views/wallet/NameView.vue'
import IconView from '@/views/wallet/IconView.vue'
import RestoreKeyView from '@/views/wallet/RestoreKeyView.vue'
import ExportView from '@/views/wallet/ExportView.vue'
import OrderWalletsView from '@/views/wallet/OrderWalletsView.vue'
import WalletIconsView from '@/views/wallet/IconsView.vue'

// Add wallet views
import AddView from '@/views/wallet/AddView.vue'
import AddPreferencesView from '@/views/wallet/add/PreferencesView.vue'
import AddRestoreKeyView from '@/views/wallet/add/RestoreKeyView.vue'
import AddEnterRestoreKeyView from '@/views/wallet/add/EnterRestoreKeyView.vue'
import AddImportView from '@/views/wallet/add/ImportView.vue'
import AddConfirmView from '@/views/wallet/add/ConfirmView.vue'
import AddCreateView from '@/views/wallet/add/CreateView.vue'

const PinView = AuthenticationPinView
const Stack = createStackNavigator()

const Settings = () => {
  return (
    <Stack.Navigator
      initialRouteName="overview"
      headerMode="none"
    >
      <Stack.Screen
        name="overview"
        component={SettingsOverviewView}
      />
      <Stack.Screen
        name="biometricAuthentication"
        component={BiometricAuthenticationView}
      />
      <Stack.Screen
        name="changePin"
        component={ChangePinView}
      />
      <Stack.Screen
        name="currency"
        component={CurrencyView}
      />
      <Stack.Screen
        name="support"
        component={SupportView}
      />
    </Stack.Navigator>
  )
}

const Contacts = () => {
  return (
    <Stack.Navigator
      initialRouteName="overview"
      headerMode="none"
    >
      <Stack.Screen
        name="overview"
        component={ContactsOverviewView}
      />
      <Stack.Screen
        name="contact"
        component={ContactView}
      />
      <Stack.Screen
        name="icons"
        component={ContactIconsView}
      />
    </Stack.Navigator>
  )
}

const Pay = () => {
  return (
    <Stack.Navigator
      initialRouteName="amount"
      headerMode="none"
    >
      <Stack.Screen
        name="amount"
        component={AmountView}
        initialParams={{ isReceive: false }}
      />
      <Stack.Screen
        name="wallets"
        component={WalletsView}
      />
      <Stack.Screen
        name="recipient"
        component={RecipientView}
      />
      <Stack.Screen
        name="enterRecipient"
        component={EnterRecipientView}
      />
      <Stack.Screen
        name="confirm"
        component={ConfirmView}
      />
      <Stack.Screen
        name="paying"
        component={PayingView}
      />
    </Stack.Navigator>
  )
}

const Receive = () => {
  return (
    <Stack.Navigator
      initialRouteName="amount"
      headerMode="none"
    >
      <Stack.Screen
        name="amount"
        component={AmountView}
        initialParams={{ isReceive: true }}
      />
      <Stack.Screen
        name="wallets"
        component={WalletsView}
      />
      <Stack.Screen
        name="recipient"
        component={RecipientView}
      />
      <Stack.Screen
        name="qr"
        component={QrView}
      />
      <Stack.Screen
        name="confirm"
        component={ConfirmView}
      />
      <Stack.Screen
        name="paying"
        component={PayingView}
      />
    </Stack.Navigator>
  )
}

const Wallet = () => {
  return (
    <Stack.Navigator
      initialRouteName="overview"
      headerMode="none"
    >
      <Stack.Screen
        name="overview"
        component={OverviewView}
      />
      <Stack.Screen
        name="settings"
        component={WalletSettingsView}
      />
      <Stack.Screen
        name="transaction"
        component={TransactionView}
      />
      <Stack.Screen
        name="name"
        component={NameView}
      />
      <Stack.Screen
        name="icon"
        component={IconView}
      />
      <Stack.Screen
        name="restoreKey"
        component={RestoreKeyView}
      />
      <Stack.Screen
        name="export"
        component={ExportView}
      />
      <Stack.Screen
        name="icons"
        component={WalletIconsView}
      />
    </Stack.Navigator>
  )
}

const Add = () => {
  return (
    <Stack.Navigator
      initialRouteName="overview"
      headerMode="none"
    >
      <Stack.Screen
        name="add"
        component={AddView}
      />
      <Stack.Screen
        name="preferences"
        component={AddPreferencesView}
      />
      <Stack.Screen
        name="restoreKey"
        component={AddRestoreKeyView}
      />
      <Stack.Screen
        name="enterRestoreKey"
        component={AddEnterRestoreKeyView}
      />
      <Stack.Screen
        name="import"
        component={AddImportView}
      />
      <Stack.Screen
        name="confirm"
        component={AddConfirmView}
      />
      <Stack.Screen
        name="create"
        component={AddCreateView}
      />
      <Stack.Screen
        name="icons"
        component={WalletIconsView}
      />
    </Stack.Navigator>
  )
}

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
          <HomeView insets={useSafeAreaInsets()} {...props} />
        )}
      </Stack.Screen>
      <Stack.Screen
        name="settings"
        component={Settings}
      />
      <Stack.Screen
        name="support"
        component={SupportView}
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
        component={OrderWalletsView}
      />
      <Stack.Screen
        name="add"
        component={Add}
      />
      <Stack.Screen
        name="pin"
        component={PinView}
      />
      <Stack.Screen
        name="authenticate"
        component={AuthenticationPinView}
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

export const SetupNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="welcome"
      headerMode="none"
    >
      <Stack.Screen
        name="welcome"
        component={WelcomeView}
      />
      <Stack.Screen
        name="intro"
        component={IntroView}
      />
      <Stack.Screen
        name="setupPin"
        component={SetupPinView}
      />
      <Stack.Screen
        name="done"
        component={DoneView}
      />
    </Stack.Navigator>
  )
}
