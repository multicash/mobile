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
  <modal-view
    has-back-button
    :title="info.title"
    @on-dismiss="navigation.goBack()"
    scrollable
    :header="header"
  >
    <header-view
      :title="info.title"
      :subtitle="info.subtitle"
      :image-background="info.image"
    />

    <switch-notification
      label="Unlock the application"
      :value.sync="applicationOptions.unlock.application"
      @input="setUnlockApplication($event)"
    />
    <input-description :label="`If you enable ${info.title} to unlock the application, anyone who can unlock this ${info.deviceName} using either ${info.title} or the ${info.deviceName}'s Passcode will be able to log in to your MultiCash accounts.`" />

    <spacer />

    <switch-notification
      label="Unlock account restore keys"
      :value.sync="applicationOptions.unlock.restoreKey"
      @input="setUnlockRestoreKey($event)"
    />

    <switch-notification
      label="Unlock account export"
      :value.sync="applicationOptions.unlock.export"
      @input="setUnlockExport($event)"
    />
  </modal-view>
</template>

<script>
import { getModel } from 'react-native-device-info'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'BiometricAuthenticationView',

  data () {
    return {
      biometryType: null
    }
  },

  props: {
    header: {
      type: Boolean,
      default: true
    },

    hasBiometryType: {
      type: String,
      default: null
    }
  },

  computed: {
    ...mapGetters(['applicationOptions']),

    info () {
      switch (this.biometryType) {
        case 'TouchID':
          return {
            title: 'Touch ID',
            subtitle: 'Manage how MultiCash works with Touch ID.',
            image: require('@/assets/touch-id.png'),
            deviceName: getModel()
          }
        case 'FaceID':
          return {
            title: 'Face ID',
            subtitle: 'Manage how MultiCash works with Face ID.',
            image: require('@/assets/face-id.png'),
            deviceName: getModel()
          }
        case 'Biometrics':
        default:
          return {
            title: 'Biometric Authentication',
            subtitle: 'Manage how MultiCash works with biometric authentication.',
            image: require('@/assets/fingerprint.png'),
            deviceName: getModel()
          }
      }
    },

    styles () {
      return styleStore(this.isDarkScheme)
    }
  },

  created () {
    if (this.route && this.route.params && this.route.params.biometryType) {
      this.biometryType = this.route.params.biometryType
    }

    if (this.hasBiometryType) {
      this.biometryType = this.hasBiometryType
    }
  },

  methods: {
    ...mapActions(['setUnlockApplication', 'setUnlockRestoreKey', 'setUnlockExport'])
  }
}

const styleStore = (isDarkScheme) => {
  return {}
}
</script>
