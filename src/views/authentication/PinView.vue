<!--MultiCash Mobile-->
<!--Copyright (C) 2021  MultiCash Developers-->

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
  <view-background no-padding>
    <status-bar :bar-style="isDarkScheme ? 'light-content' : 'dark-content'" />

    <safe-area-view :style="styles.safeAreaView">
      <header-view
        :title="showCloseButton ? 'Verify Yourself' : 'Unlock MultiCash'"
        :image-background="showCloseButton ? require('@/assets/cyber-security.png') : require('@/assets/pin.png')"
      />

      <view :style="styles.container">
        <view :style="styles.pinContainer">
          <text :style="styles.title">Enter your PIN</text>

          <dot-input :value.sync="pin" />
        </view>

        <pin-keyboard
          v-model="pin"
          :biometric-unlockable="biometricUnlockable"
          :biometry-type="biometryType"
          :max-length="pinLength"
          @input="pinUpdated"
          @auth-requested="authRequested"
        />

      </view>
    </safe-area-view>

    <round-button
      v-if="showCloseButton"
      @on-press="onDismiss"
      :style="{ position: 'absolute', top: 20, left: 20 }"
    >
      <icon name="close" />
    </round-button>

  </view-background>
</template>

<script>
import { Alert } from 'react-native'
import ReactNativeBiometrics from 'react-native-biometrics'
import { SafeAreaView } from 'react-native-safe-area-context'
import { mapGetters, mapActions } from 'vuex'

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
    ...mapGetters(['getPin', 'applicationOptions']),

    biometricUnlockable () {
      if (this.route.params && this.route.params.unlock) {
        switch (this.route.params.unlock) {
          case 'application':
            return this.applicationOptions.unlock.application
          case 'restoreKey':
            return this.applicationOptions.unlock.restoreKey
          case 'export':
            return this.applicationOptions.unlock.export
          default:
            return false
        }
      }

      return false
    },

    digits () {
      return Array(this.pinLength)
    },

    styles () {
      return stylesStore(this.isDarkScheme, this.showCloseButton)
    },

    showCloseButton () {
      if (this.route.params && this.route.params.showCloseButton) {
        return this.route.params.showCloseButton
      }

      return false
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
        alert('Sensor not available: ' + e.message)
      })
  },

  methods: {
    ...mapActions(['updateIsSetup']),

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

      if (!this.applicationOptions.unlock.application) {
        return
      }

      ReactNativeBiometrics.simplePrompt({ promptMessage: 'Unlock MultiCash' })
        .then(({ success }) => {
          if (success === true) {
            this.successfullyAuthenticated()
          }
        })
        .catch(e => {
          alert('biometrics failed: ' + e.message)
        })
    },

    authenticate () {
      if (this.pin.join('') === this.getPin) {
        return this.successfullyAuthenticated()
      }

      Alert.alert(
        'Incorrect PIN provided, please retry',
        null,
        [
          {
            text: 'Reset MultiCash',
            onPress: this.resetMultiCash,
            style: 'destructive'
          },
          {
            text: 'Ok',
            style: 'default'
          }
        ]
      )

      this.pin = Array(4)
    },

    successfullyAuthenticated () {
      this.navigation.goBack()
      this.$eventBus.$emit('authenticated')
    },

    resetMultiCash () {
      Alert.alert(
        'Reset MultiCash',
        'You\'re about to reset MultiCash on this device. Your wallets will be removed and you\'ll have restore them again in order to access them.',
        [
          {
            text: 'Cancel',
            style: 'cancel'
          },
          {
            text: 'Reset',
            style: 'destructive',
            onPress: () => {
              this.updateIsSetup()
              this.$walletManager.wallets.forEach(wallet => {
                setTimeout(() => {
                  this.$walletManager.removeWallet(wallet)
                }, 250)
              })
            }
          }
        ]
      )
    },

    onDismiss () {
      this.$eventBus.$emit('authenticationAborted')
      this.navigation.goBack()
    }
  }
}

const stylesStore = (isDarkScheme, showCloseButton) => {
  return {
    safeAreaView: {
      flex: 1
    },

    container: {
      padding: showCloseButton ? 0 : 20,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },

    pinContainer: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 50
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
    }
  }
}
</script>
