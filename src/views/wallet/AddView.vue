<template>
  <view-background no-padding>
    <modal-navigation
      title="Add account"
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
          title: 'Ways to add an account',
          data: [
            {
              title: 'Create a new account',
              subtitle: 'Never used MultiCash before? This is the one for you!',
              leftAvatar: { source: require('@/assets/new.png'), size: 40 },
              onPress: () => {
                this.navigation.navigate('coin', { restore: false })
              }
            },
            {
              title: 'Restore an existing account',
              subtitle: 'Are you restoring your mobile device or did you reinstall the MultiCash app? Restore your already created account here.',
              leftAvatar: { source: require('@/assets/restore.png'), size: 40 },
              onPress: () => {
                this.navigation.navigate('coin', { restore: true })
              }
            },
            {
              title: 'Import an existing account',
              subtitle: 'Did you previously export your account? Import and restore your account using this option.',
              leftAvatar: { source: require('@/assets/import.png'), size: 40 },
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
        'Add Account',
        "Add a new or an existing account to MultiCash and use money like it's supposed to!",
        require('@/assets/coin-wallet.png')
      )
    }
  }
}
</script>
