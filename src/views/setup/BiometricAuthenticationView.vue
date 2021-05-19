<template>
  <safe-area-view :style="styles.safeArea">
    <status-bar :bar-style="isDarkScheme ? 'light-content' : 'dark-content'" />
    <settings-bio-auth-view
      v-if="biometryType"
      :header="false"
      :has-biometry-type="biometryType"
    />
    <rounded-button
      title="Continue"
      :style="styles.continue"
      @on-press="navigation.navigate('currency')"
    />
  </safe-area-view>
</template>

<script>
import SettingsBioAuthView from '@/views/settings/BiometricAuthenticationView'
import ReactNativeBiometrics from 'react-native-biometrics'

export default {
  name: 'BiometricAuthenticationView',

  components: {
    SettingsBioAuthView
  },

  data () {
    return {
      biometricsAvailable: false,
      biometryType: null
    }
  },

  computed: {
    styles () {
      return styleStore(this.isDarkScheme)
    }
  },

  created () {
    ReactNativeBiometrics.isSensorAvailable()
      .then(({ available, biometryType }) => {
        this.biometricsAvailable = available
        this.biometryType = biometryType

        if (!this.biometricsAvailable) {
          this.navigation.navigate('currency')
        }
      })
  }
}

const styleStore = (isDarkScheme) => {
  return {
    safeArea: {
      flex: 1
    },

    continue: {
      marginHorizontal: 20
    }
  }
}
</script>
