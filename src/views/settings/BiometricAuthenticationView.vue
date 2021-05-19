<template>
  <view :style="{ flex: 1 }">
    <modal-navigation
      has-back-button
      :title="info.title"
      @on-dismiss="navigation.goBack()"
    />
    <view-background scrollable>
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
    </view-background>
  </view>
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
    this.biometryType = this.route.params.biometryType
  },

  methods: {
    ...mapActions(['setUnlockApplication', 'setUnlockRestoreKey', 'setUnlockExport'])
  }
}

const styleStore = (isDarkScheme) => {
  return {}
}
</script>
