<template>
  <app-navigator />
</template>

<script>
import * as React from 'react'
import { Platform } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import HomeView from '@/views/HomeView'
import SettingsView from '@/views/SettingsView'
import ContactsOverviewView from '@/views/contacts/OverviewView'
import AmountView from '@/views/transaction/AmountView'
import WalletsView from '@/views/transaction/WalletsView'
import RecipientView from '@/views/transaction/RecipientView'
import EnterRecipientView from '@/views/transaction/EnterRecipientView'
import QrView from '@/views/transaction/QrView'
import ConfirmView from '@/views/transaction/ConfirmView'
import PayingView from '@/views/transaction/PayingView'
import OverviewView from '@/views/wallet/OverviewView'
import WalletSettingsView from '@/views/wallet/SettingsView'
import TransactionView from '@/views/wallet/TransactionView'

const Stack = createStackNavigator()

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
    </Stack.Navigator>
  )
}

const AppNavigator = () => {
  return (
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
          component={SettingsView}
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
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default {
  name: 'App',
  components: { AppNavigator }
}
</script>
