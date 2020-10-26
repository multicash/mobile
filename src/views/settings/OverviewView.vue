<template>
  <view-background no-padding>
    <modal-navigation title="Settings" has-close-button @on-dismiss="navigation.goBack()"/>
    <table-view :sections="data" :header="renderTableHeader"/>
  </view-background>
</template>

<script>
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
              navigate: () => {
                this.navigation.navigate('currency')
              }
            },
            {
              title: 'Change PIN',
              subtitle: 'Change the PIN used for securing your wallets by MultiCash',
              leftIcon: { name: 'lock-closed' },
              navigate: () => {
                this.navigation.navigate('pin', {
                  authenticated: () => {
                    this.navigation.navigate('changePin')
                  }
                })
              }
            },
            {
              title: 'Biometric Authentication',
              subtitle: 'Manage how MultiCash works with biometric authentication',
              leftIcon: { name: 'finger-print' },
              navigate: () => {
                this.navigation.navigate('biometricAuthentication')
              }
            }
          ]
        },
        {
          title: 'More',
          data: [
            {
              title: 'Support',
              subtitle: 'Let us help you when you run into trouble with MultiCash',
              leftIcon: { name: 'help-buoy' },
              navigate: () => {
                this.navigation.navigate('support')
              }
            },
            {
              title: 'Rate MultiCash',
              subtitle: 'Let others know how much you like MultiCash',
              leftIcon: { name: 'star' }
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
