import * as React from 'react'
import { Platform } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import { SafeAreaProvider } from 'react-native-safe-area-context'

// Setup views
import WelcomeView from '@/views/setup/WelcomeView'
import IntroView from '@/views/setup/IntroView'
import SetupPinView from '@/views/setup/SetupPinView'

// Authentication views
import AuthenticationPinView from '@/views/authentication/PinView'

// Main application views
import HomeView from '@/views/HomeView'

// Settings views
import SettingsOverviewView from '@/views/settings/OverviewView'
import BiometricAuthenticationView from '@/views/settings/BiometricAuthenticationView'
import ChangePinView from '@/views/settings/ChangePinView'
import CurrencyView from '@/views/settings/CurrencyView'
import SupportView from '@/views/settings/SupportView'

// Contact views
import ContactsOverviewView from '@/views/contacts/OverviewView'
import ContactView from '@/views/contacts/ContactView'

// Transaction views
import AmountView from '@/views/transaction/AmountView'
import WalletsView from '@/views/transaction/WalletsView'
import RecipientView from '@/views/transaction/RecipientView'
import EnterRecipientView from '@/views/transaction/EnterRecipientView'
import QrView from '@/views/transaction/QrView'
import ConfirmView from '@/views/transaction/ConfirmView'
import PayingView from '@/views/transaction/PayingView'

// Wallet views
import OverviewView from '@/views/wallet/OverviewView'
import WalletSettingsView from '@/views/wallet/SettingsView'
import TransactionView from '@/views/wallet/TransactionView'
import NameView from '@/views/wallet/NameView'
import IconView from '@/views/wallet/IconView'
import RestoreKeyView from '@/views/wallet/RestoreKeyView'
import ExportView from '@/views/wallet/ExportView'
import OrderWalletsView from '@/views/wallet/OrderWalletsView'

// Add wallet views
import AddView from '@/views/wallet/AddView'
import AddPreferencesView from '@/views/wallet/add/PreferencesView'
import AddRestoreKeyView from '@/views/wallet/add/RestoreKeyView'
import AddEnterRestoreKeyView from '@/views/wallet/add/EnterRestoreKeyView'
import AddImportView from '@/views/wallet/add/ImportView'
import AddConfirmView from '@/views/wallet/add/ConfirmView'
import AddCreateView from '@/views/wallet/add/CreateView'

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
    </Stack.Navigator>
  )
}

export const AppNavigator = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
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
            component={HomeView}
          />
          <Stack.Screen
            name="settings"
            component={Settings}
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
            component={AuthenticationPinView}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export const AuthenticationNavigator = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="pin"
          headerMode="none"
        >
          <Stack.Screen
            name="pin"
            component={AuthenticationPinView}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export const SetupNavigator = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
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
            name="pinView"
            component={SetupPinView}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}
