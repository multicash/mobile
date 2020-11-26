<template>
  <view-background no-padding>
    <modal-navigation title="Settings" has-close-button @on-dismiss="navigation.goBack()"/>
    <table-view :sections="data" :header="renderTableHeader"/>
  </view-background>
</template>

<script>
import { mapActions } from 'vuex'
import TableHeaderView from '@/react/components/TableHeaderView'

const exampleWallets = [
  {
    name: 'Main Account',
    icon: 'wallet',
    tag: '@SwenVanZanten',
    address: 'M6NYsdntCHYDv6X6uGzgEChnoQruHBR1De',
    coin: 'mcx',
    network: 'livenet',
    restoreKey: 'random okay unusual trim fan blue patrol feed mention crane ankle exile',
    singleAddress: true
  },
  {
    name: 'Savings Account',
    icon: 'gift',
    tag: '@SwenSaving',
    address: 'M6NYsdntCHYDv6X6uGzgEChnoQruHBR1De',
    coin: 'mcx',
    network: 'livenet',
    restoreKey: 'output sphere drift town world sail gauge mechanic track core tiny into',
    singleAddress: true
  }
]

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
              leftIcon: { name: 'cash' },
              onPress: () => {
                this.navigation.navigate('currency')
              }
            },
            {
              title: 'Change PIN',
              subtitle: 'Change the PIN used for securing your wallets by MultiCash',
              leftIcon: { name: 'lock-closed' },
              onPress: () => {
                this.navigation.navigate('pin', {
                  authenticated: () => {
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
              leftIcon: { name: 'help-buoy' },
              onPress: () => {
                this.navigation.navigate('support')
              }
            },
            {
              title: 'Rate MultiCash',
              subtitle: 'Let others know how much you like MultiCash',
              leftIcon: { name: 'star' }
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
                this.updateIsSetup(false)
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
    ...mapActions(['updateIsSetup', 'removeAllWallets', 'addExamplesWallets']),

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
