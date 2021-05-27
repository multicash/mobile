import * as React from 'react'
import AddView from '@/views/wallet/AddView.vue'
import AddCoinView from '@/views/wallet/add/CoinView.vue'
import AddConfirmView from '@/views/wallet/add/ConfirmView.vue'
import AddCreateView from '@/views/wallet/add/CreateView.vue'
import AddEnterRestoreKeyView from '@/views/wallet/add/EnterRestoreKeyView.vue'
import AddImportView from '@/views/wallet/add/ImportView.vue'
import AddPreferencesView from '@/views/wallet/add/PreferencesView.vue'
import AddRestoreKeyView from '@/views/wallet/add/RestoreKeyView.vue'
import WalletIconsView from '@/views/wallet/IconsView.vue'
import AddTagView from '@/views/wallet/add/TagView.vue'
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
        name="add"
        component={AddView as any}
      />
      <Stack.Screen
        name="coin"
        component={AddCoinView as any}
      />
      <Stack.Screen
        name="tag"
        component={AddTagView as any}
      />
      <Stack.Screen
        name="preferences"
        component={AddPreferencesView as any}
      />
      <Stack.Screen
        name="restoreKey"
        component={AddRestoreKeyView as any}
      />
      <Stack.Screen
        name="enterRestoreKey"
        component={AddEnterRestoreKeyView as any}
      />
      <Stack.Screen
        name="import"
        component={AddImportView as any}
      />
      <Stack.Screen
        name="confirm"
        component={AddConfirmView as any}
      />
      <Stack.Screen
        name="create"
        component={AddCreateView as any}
        options={{
          headerShown: false,
          gestureEnabled: false,
          stackPresentation: 'modal'
        }}
      />
      <Stack.Screen
        name="icons"
        component={WalletIconsView as any}
      />
    </Stack.Navigator>
  )
}
