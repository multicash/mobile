<template>
  <view-background no-padding>
    <modal-navigation title="Settings" has-close-button @on-dismiss="navigation.goBack()"/>
    <table-view :sections="data" :header="renderTableHeader"/>
  </view-background>
</template>

<script>
import { mapActions } from 'vuex'
import TableHeaderView from '@/react/components/TableHeaderView'

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
                this.updateIsAuthenticated(false)
                this.updateIsSetup(false)
              }
            },
            {
              title: 'Return to PIN view',
              subtitle: 'Show the PIN view as the app is coming from the background',
              leftIcon: { name: 'lock-closed-outline' },
              noChevron: true,
              onPress: () => {
                this.updateIsAuthenticated(false)
              }
            },
            {
              title: 'Remove example wallets',
              subtitle: 'Remove the example wallets from the home view',
              leftIcon: { name: 'trash-outline' },
              noChevron: true,
              onPress: () => {
                this.removeAllWallets()
              }
            },
            {
              title: 'Add example wallets',
              subtitle: 'Add the example wallets on the home view',
              leftIcon: { name: 'add-circle-outline' },
              noChevron: true,
              onPress: () => {
                this.addExamplesWallets()
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
    ...mapActions(['updateIsAuthenticated', 'updateIsSetup', 'removeAllWallets', 'addExamplesWallets']),

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
