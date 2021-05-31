<template>
  <safe-area-provider>
    <navigation-container>
      <stack-navigator
        headerMode="none"
        :screenOptions="screenOptions"
      >
        <stack-screen
          v-if="isSetup"
          name="app"
          :component="app"
        />
        <stack-screen
          v-if="!isSetup"
          name="setup"
          :component="setup"
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
        stackAnimation: 'fade',
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
