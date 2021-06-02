<template>
  <view-background no-padding>
    <modal-navigation title="Settings" has-close-button @on-dismiss="navigation.goBack()"/>
    <table-view :sections="data"/>
  </view-background>
</template>

<script>
import { mapActions } from 'vuex'
import exampleContacts from '@/assets/examples/contacts'
import exampleWallets from '@/assets/examples/wallets'
import ReactNativeBiometrics from 'react-native-biometrics'
import { Platform } from 'react-native'

export default {
  name: 'OverviewView',

  data () {
    return {
      biometricsAvailable: false,
      biometryType: null
    }
  },

  created () {
    ReactNativeBiometrics.isSensorAvailable()
      .then(({ available, biometryType }) => {
        this.biometricsAvailable = available
        this.biometryType = biometryType
      })
  },

  computed: {
    styles () {
      return stylesStore(this.isDarkScheme)
    },

    biometricAuthentication () {
      switch (this.biometryType) {
        case 'TouchID':
          return {
            title: 'Touch ID',
            subtitle: 'Manage how MultiCash works with Touch ID.',
            leftAvatar: { source: require('@/assets/touch-id.png') }
          }
        case 'FaceID':
          return {
            title: 'Face ID',
            subtitle: 'Manage how MultiCash works with Face ID.',
            leftAvatar: { source: require('@/assets/face-id.png') }
          }
        case 'Biometrics':
          return {
            title: 'Biometric Authentication',
            subtitle: 'Manage how MultiCash works with biometric authentication.',
            leftAvatar: { source: require('@/assets/fingerprint.png') }
          }
        default:
          return null
      }
    },

    data () {
      return [
        {
          title: 'Manage MultiCash',
          data: [
            {
              title: 'Currency',
              subtitle: 'All fiat amounts will be displayed in this currency',
              leftAvatar: { source: require('@/assets/currency-exchange.png'), size: 40 },
              onPress: () => {
                this.navigation.navigate('currency')
              }
            },
            {
              title: 'Change PIN',
              subtitle: 'Change the PIN used for securing your wallets by MultiCash',
              leftAvatar: { source: require('@/assets/phonelink-lock.png'), size: 40 },
              onPress: () => {
                this.$authManager.authenticate().then(authenticated => {
                  if (authenticated) {
                    this.navigation.navigate('changePin')
                  }
                })
              }
            },
            this.biometricsAvailable ? {
              title: this.biometricAuthentication.title,
              subtitle: this.biometricAuthentication.subtitle,
              leftAvatar: this.biometricAuthentication.leftAvatar,
              onPress: () => {
                this.navigation.navigate('biometricAuthentication', {
                  biometryType: this.biometryType
                })
              }
            } : null
          ].filter(x => !!x)
        },
        {
          title: 'More',
          data: [
            {
              title: 'Support',
              subtitle: 'Let us help you when you run into trouble with MultiCash',
              leftAvatar: { source: require('@/assets/faq.png'), size: 40 },
              onPress: () => {
                this.navigation.navigate('support')
              }
            },
            Platform.OS === 'ios' ? {
              title: 'App Icon',
              leftAvatar: { source: require('@/assets/ios-app-icon-shape.png'), size: 40 },
              onPress: () => {
                this.navigation.navigate('appIcon')
              }
            } : null,
            {
              title: 'About MultiCash',
              leftAvatar: { source: require('@/assets/coins/MCX.png'), size: 40 },
              onPress: () => {
                this.navigation.navigate('about')
              }
            },
            {
              title: 'Rate MultiCash',
              subtitle: 'Let others know how much you like MultiCash',
              leftAvatar: { source: require('@/assets/rating.png'), size: 40 }
            }
          ].filter(x => !!x)
        },
        {
          title: 'Development',
          data: [
            {
              title: 'Return to setup state',
              subtitle: 'The MultiCash app will return to the state on initial setup.',
              leftIcon: { name: 'refresh-circle-outline' },
              noChevron: true,
              onPress: () => {
                this.$walletManager.wallets.forEach(wallet => {
                  setTimeout(() => {
                    this.$walletManager.removeWallet(wallet)
                  }, 250)
                })

                for (const contact of this.$store.getters.contacts) {
                  this.removeContact(contact)
                }

                this.updateCurrency('')
                this.setUnlockApplication(false)
                this.setUnlockRestoreKey(false)
                this.setUnlockExport(false)
                this.showAllAnnouncements()
                this.updateIsSetup(false)
              }
            },
            {
              title: 'Remove all example contacts',
              subtitle: 'To see the no contacts views remove all the contacts here',
              leftIcon: { name: 'person-remove' },
              noChevron: true,
              onPress: () => {
                for (const contact of this.$store.getters.contacts) {
                  this.removeContact(contact)
                }
              }
            },
            {
              title: 'Add example contacts',
              subtitle: 'Add some example contacts to play with',
              leftIcon: { name: 'person-add' },
              noChevron: true,
              onPress: () => {
                for (const contact of exampleContacts) {
                  this.addContact(contact)
                }
              }
            },
            {
              title: 'Remove example wallets',
              subtitle: 'Remove the example wallets from the home view',
              leftIcon: { name: 'trash-outline' },
              noChevron: true,
              onPress: () => {
                this.$walletManager.wallets.forEach(wallet => {
                  setTimeout(() => {
                    this.$walletManager.removeWallet(wallet)
                  }, 250)
                })

                this.setDefaultWallet(null)
                this.removeAllWallets()
                this.removeWalletOrder()
              }
            },
            {
              title: 'Add example wallets',
              subtitle: 'Add the example wallets on the home view',
              leftIcon: { name: 'add-circle-outline' },
              noChevron: true,
              onPress: () => {
                for (const wallet of exampleWallets) {
                  this.$walletManager.addWallet(wallet)
                }
              }
            },
            {
              title: 'Reset announcements',
              subtitle: 'Announcements only show once. Removing their version tags will show them again.',
              leftIcon: { name: 'chatbox-outline' },
              noChevron: true,
              onPress: () => {
                this.showAllAnnouncements()
              }
            }
          ]
        }
      ]
    }
  },

  methods: {
    ...mapActions([
      'updateIsSetup',
      'setDefaultWallet',
      'removeContact',
      'addContact',
      'removeAllWallets',
      'removeWalletOrder',
      'setUnlockApplication',
      'setUnlockRestoreKey',
      'setUnlockExport',
      'showAllAnnouncements',
      'updateCurrency'
    ])
  }
}

const stylesStore = (isDarkScheme) => {
  return {
    actionButtonIcon: {
      width: 55,
      height: 55,
      resizeMode: 'contain'
    }
  }
}
</script>
