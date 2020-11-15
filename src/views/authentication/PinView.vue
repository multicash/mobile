<template>
  <view-background no-padding>
    <modal-navigation
      v-if="hasAuthenticatedAction"
      has-close-button
      @on-dismiss="navigation.goBack()"
    />

    <status-bar :bar-style="isDarkScheme ? 'light-content' : 'dark-content'" />

    <safe-area-view :style="styles.container">

      <view :style="styles.pinContainer">
        <image
          :source="require('@/assets/pin.png')"
          :style="styles.logoImage"
        />

        <text :style="styles.title">Enter your PIN</text>

        <view :style="styles.digitDotsContainer">
          <view
            v-for="(index, i) in pin"
            :key="i"
            :style="{ paddingLeft: i === 0 ? 0 : 10 }"
          >
            <view v-if="index !== undefined" :style="styles.digitDotFilled" />
            <view v-else :style="styles.digitDot" />
          </view>
        </view>
      </view>

      <pin-keyboard
        v-model="pin"
        :biometry-type="biometryType"
        :max-length="pinLength"
        @input="pinUpdated"
        @auth-requested="authRequested"
      />

    </safe-area-view>
  </view-background>
</template>

<script>
import ReactNativeBiometrics from 'react-native-biometrics'
import { mapActions } from 'vuex'
import { SafeAreaView } from 'react-native-safe-area-context'

export default {
  components: { SafeAreaView },

  data () {
    return {
      pinLength: 4,
      pin: [],
      biometricsAvailable: false,
      biometryType: null
    }
  },

  computed: {
    digits () {
      return Array(this.pinLength)
    },

    styles () {
      return stylesStore(this.isDarkScheme)
    },

    hasAuthenticatedAction () {
      return this.route.params && this.route.params.authenticated && typeof this.route.params.authenticated === 'function'
    }
  },

  created () {
    this.pin = Array(this.pinLength)

    ReactNativeBiometrics.isSensorAvailable()
      .then(({ available, biometryType }) => {
        this.biometricsAvailable = available
        this.biometryType = biometryType
      })
      .catch(e => {
        console.error(e)
      })
  },

  methods: {
    ...mapActions(['updateIsAuthenticated']),

    pinUpdated () {
      this.$forceUpdate()

      if (this.pinLength === this.pin.filter(v => v !== undefined).length) {
        this.authenticate()
      }
    },

    authRequested () {
      if (!this.biometricsAvailable) {
        return
      }

      ReactNativeBiometrics.simplePrompt({ promptMessage: 'Unlock MultiCash' })
        .then(({ success }) => {
          if (success) {
            this.pin = [0, 1, 2, 3]
            this.authenticate()
          }
        })
        .catch(e => {
          console.log('biometrics failed')
          console.error(e)
        })
    },

    authenticate () {
      if (this.pin.join('') === '0123') {
        if (this.hasAuthenticatedAction) {
          return this.route.params.authenticated()
        }

        return this.updateIsAuthenticated(true)
      }

      alert('The correct PIN is 0123 :)')

      this.pin = Array(4)
    }
  }
}

const stylesStore = (isDarkScheme) => {
  return {
    container: {
      padding: 30,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },

    pinContainer: {
      flex: 1,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center'
    },

    logoImage: {
      resizeMode: 'contain',
      height: 75,
      width: '100%',
      marginBottom: 30
    },

    title: {
      fontWeight: '600',
      fontSize: 18,
      color: isDarkScheme ? 'white' : 'black'
    },

    digitDotsContainer: {
      flexDirection: 'row',
      margin: 20
    },

    digitDotFilled: {
      backgroundColor: isDarkScheme ? '#6d6de3' : '#1e1e4d',
      width: 20,
      height: 20,
      borderRadius: 10
    },

    digitDot: {
      backgroundColor: isDarkScheme ? '#b95c8b' : '#931A5A',
      width: 20,
      height: 20,
      borderRadius: 10
    }
  }
}
</script>