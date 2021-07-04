<!--MultiCash Mobile-->
<!--Copyright (C) 2021  Swen van Zanten-->

<!--This program is free software: you can redistribute it and/or modify-->
<!--it under the terms of the GNU General Public License as published by-->
<!--the Free Software Foundation, either version 3 of the License, or-->
<!--any later version.-->

<!--This program is distributed in the hope that it will be useful,-->
<!--but WITHOUT ANY WARRANTY; without even the implied warranty of-->
<!--MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the-->
<!--GNU General Public License for more details.-->

<!--You should have received a copy of the GNU General Public License-->
<!--along with this program.  If not, see <https://www.gnu.org/licenses/>.-->

<template>
  <safe-area-provider>
    <navigation-container>
      <stack-navigator
        headerMode="none"
        :screenOptions="screenOptions"
      >
        <stack-screen
          v-if="!isSetup"
          name="setup"
          :component="setup"
        />
        <stack-screen
          v-if="isSetup"
          name="app"
          :component="app"
        />
      </stack-navigator>
    </navigation-container>
  </safe-area-provider>
</template>

<script>
import { Appearance } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { AppNavigator } from '@/navigation'
import SetupNavigator from '@/navigation/Setup'
import Vue from 'vue-native-core'
import { mapGetters, mapActions } from 'vuex'
import Vuelidate from 'vuelidate'
import store from '@/store'
import AuthManager from '@/plugins/AuthManager'
import EventBus from '@/plugins/EventBus'
import WalletManager from '@/plugins/WalletManager'
import { createNativeStackNavigator } from 'react-native-screens/native-stack'
import { enableScreens } from 'react-native-screens'

enableScreens()
const Stack = createNativeStackNavigator()
const StackNavigator = Stack.Navigator
const StackScreen = Stack.Screen

Vue.use(Vuelidate)
Vue.use(WalletManager, { store })
Vue.use(EventBus)
Vue.use(AuthManager)

export default {
  store: store,
  eventBus: EventBus,
  walletManager: WalletManager,
  authManager: AuthManager,

  components: {
    NavigationContainer,
    SafeAreaProvider,
    StackNavigator,
    StackScreen
  },

  data () {
    return {
      app: AppNavigator,
      setup: SetupNavigator
    }
  },

  created () {
    if (!this.hasPin) {
      this.updateIsSetup(false)
    }
  },

  computed: {
    ...mapGetters(['isSetup', 'hasPin']),

    screenOptions () {
      return {
        headerShown: false,
        gestureEnabled: false,
        replaceAnimation: 'push',
        contentStyle: {
          backgroundColor: Appearance.getColorScheme() === 'dark' ? '#222429' : '#ededf3'
        }
      }
    }
  },

  methods: {
    ...mapActions(['updateIsSetup'])
  }
}
</script>
