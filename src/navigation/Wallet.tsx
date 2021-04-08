import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import OverviewView from '@/views/wallet/OverviewView.vue'
import WalletSettingsView from '@/views/wallet/SettingsView.vue'
import TransactionView from '@/views/wallet/TransactionView.vue'
import NameView from '@/views/wallet/NameView.vue'
import IconView from '@/views/wallet/IconView.vue'
import RestoreKeyView from '@/views/wallet/RestoreKeyView.vue'
import ExportView from '@/views/wallet/ExportView.vue'
import WalletIconsView from '@/views/wallet/IconsView.vue'

const Stack = createStackNavigator()

export default () => {
  return (
    <Stack.Navigator
      initialRouteName="overview"
      headerMode="none"
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
