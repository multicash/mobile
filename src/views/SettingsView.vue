<template>
  <view
    :style="styles.container"
  >
    <modal-navigation title="Settings" has-close-button @on-dismiss="$parent.$emit('update:visible', false)"/>
    <table-view :sections="data" :header="renderTableHeader"/>
  </view>
</template>

<script>
import ModalNavigation from '@/components/ModalNavigation'
import TableView from '@/components/TableView'
import TableHeaderView from '@/react/components/TableHeaderView'

export default {
  name: 'SettingsView',

  components: { TableView, ModalNavigation },

  data () {
    return {
      data: [
        {
          title: 'Manage MultiCash',
          data: [
            {
              title: 'Currency',
              subtitle: 'All fiat amounts will be displayed in this currency',
              leftIcon: { name: 'cash-outline' }
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
    container: {
      height: '100%'
    },

    actionButtonIcon: {
      width: 55,
      height: 55,
      resizeMode: 'contain'
    }
  }
}
</script>
