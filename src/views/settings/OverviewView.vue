<template>
  <view-background no-padding>
    <modal-navigation title="Settings" has-close-button @on-dismiss="navigation.goBack()"/>
    <table-view :sections="data" :header="renderTableHeader"/>
  </view-background>
</template>

<script>
import { mapActions } from 'vuex'
import TableHeaderView from '@/react/components/TableHeaderView'
import exampleContacts from '@/assets/examples/contacts'
import exampleWallets from '@/assets/examples/wallets'

export default {
  name: 'OverviewView',

  data () {
    return {
      data: [
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
            }
            // {
            //   title: 'Biometric Authentication',
            //   subtitle: 'Manage how MultiCash works with biometric authentication',
            //   leftIcon: { name: 'finger-print' },
            //   onPress: () => {
            //     this.navigation.navigate('biometricAuthentication')
            //   }
            // }
          ]
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
            {
              title: 'Rate MultiCash',
              subtitle: 'Let others know how much you like MultiCash',
              leftAvatar: { source: require('@/assets/rating.png'), size: 40 }
            }
          ]
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
                  this.$store.dispatch('removeContact', contact)
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
                  this.$store.dispatch('addContact', contact)
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
            }
          ]
        }
      ]
    }
  },

  computed: {
    styles () {
      return stylesStore(this.isDarkScheme)
    }
  },

  methods: {
    ...mapActions(['updateIsSetup', 'setDefaultWallet', 'removeAllWallets', 'removeWalletOrder']),

    renderTableHeader (isDarkScheme) {
      return TableHeaderView(
        isDarkScheme,
        undefined,
        'Manage your MultiCash settings',
        require('@/assets/settings.png')
      )
    }
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
