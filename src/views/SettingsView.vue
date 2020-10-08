<template>
  <view-background no-padding>
    <modal-navigation title="Settings" has-close-button @on-dismiss="navigation.goBack()"/>
    <table-view :sections="data" :header="renderTableHeader"/>
  </view-background>
</template>

<script>
import ModalNavigation from '@/components/navigations/ModalNavigation'
import TableView from '@/components/tables/TableView'
import TableHeaderView from '@/react/components/TableHeaderView'
import ViewBackground from '@/components/views/ViewBackground'

export default {
  name: 'SettingsView',

  components: { ViewBackground, TableView, ModalNavigation },

  data () {
    return {
      data: [
        {
          title: 'Manage MultiCash',
          data: [
            {
              title: 'Currency',
              subtitle: 'All fiat amounts will be displayed in this currency',
              leftIcon: { name: 'cash-outline' },
              navigate: () => {
                this.navigation.navigate('contacts', { world: 'hello' })
              }
            },
            {
              title: 'Change PIN',
              subtitle: 'Change the PIN used for securing your wallets by MultiCash',
              leftIcon: { name: 'lock-closed-outline' }
            },
            {
              title: 'Biometric Authentication',
              subtitle: 'Manage how MultiCash works with biometric authentication',
              leftIcon: { name: 'finger-print' }
            }
          ]
        },
        {
          title: 'More',
          data: [
            {
              title: 'Support',
              subtitle: 'Let us help you when you run into trouble with MultiCash',
              leftIcon: { name: 'help-buoy-outline' }
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
