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
  <safe-area-view :style="styles.safeArea">
    <status-bar :bar-style="isDarkScheme ? 'light-content' : 'dark-content'" />
    <settings-bio-auth-view
      v-if="biometryType"
      :header="false"
      :has-biometry-type="biometryType"
    />
    <rounded-button
      title="Continue"
      type="primary"
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
