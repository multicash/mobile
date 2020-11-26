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
import { Platform } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { AppNavigator, SetupNavigator } from '@/navigation'
import { mapGetters, mapActions } from 'vuex'
import store from '@/store'

const Stack = createStackNavigator()
const StackNavigator = Stack.Navigator
const StackScreen = Stack.Screen

export default {
  store: store,

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
    ...mapGetters(['isSetup']),

    screenOptions () {
      return {
        headerShown: false,
        gestureEnabled: false,
        cardOverlayEnabled: true,
        ...Platform.select({
          ios: TransitionPresets.FadeFromBottomAndroid,
          default: TransitionPresets.RevealFromBottomAndroid
        })
      }
    }
  },

  methods: {
    ...mapActions(['updateIsSetup'])
  }
}
</script>
