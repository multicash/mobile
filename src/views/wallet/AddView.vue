<template>
  <view-background no-padding>
    <modal-navigation
      title="Add wallet"
      has-close-button
      @on-dismiss="navigation.goBack()"
    />

    <table-view :sections="tableItems" :header="renderTableHeader"/>

  </view-background>
</template>

<script>
import TableHeaderView from '@/react/components/TableHeaderView'

export default {
  name: 'AddView',

  data () {
    return {
      tableItems: [
        {
          title: 'Ways to add a wallet',
          data: [
            {
              title: 'Create a new wallet',
              subtitle: 'Never used MultiCash before? This is the one for you!',
              leftIcon: { name: 'star', color: '#ffb900', size: 30 },
              onPress: () => {
                this.navigation.navigate('preferences', { restore: false })
              }
            },
            {
              title: 'Restore an existing wallet',
              subtitle: 'Are you restoring your mobile device or did you reinstall the MultiCash app? Restore your already created wallet here.',
              leftIcon: { name: 'wallet', color: '#05ad25', size: 30 },
              onPress: () => {
                this.navigation.navigate('preferences', { restore: true })
              }
            },
            {
              title: 'Import an existing wallet',
              subtitle: 'Did you previously export your wallet? Import and restore your wallet using this option.',
              leftIcon: { name: 'save', color: '#0bbcda', size: 30 },
              onPress: () => {
                this.navigation.navigate('import')
              }
            }
          ]
        }
      ]
    }
  },

  methods: {
    renderTableHeader (isDarkScheme) {
      return TableHeaderView(
        isDarkScheme,
        'Add wallet',
        "Add a new or an existing wallet to MultiCash\nand use money like it's supposed to!",
        require('@/assets/new-wallet2.png')
      )
    }
  }
}
</script>
