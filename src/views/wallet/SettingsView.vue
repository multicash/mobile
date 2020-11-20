<template>
  <view-background no-padding>
    <modal-navigation
      title="Settings"
      has-back-button
      @on-dismiss="navigation.goBack()"
    />
    <table-view :sections="data"/>
  </view-background>
</template>

<script>
export default {
  name: 'SettingsView',

  data () {
    return {
      data: [
        {
          title: 'Preferences',
          data: [
            {
              title: 'Name',
              subtitle: 'The wallets name is needed because you can have multiple wallets inside this awesome application!',
              leftIcon: { name: 'wallet' },
              navigate: () => {
                this.navigation.navigate('name', { wallet: this.route.params.wallet })
              }
            },
            {
              title: 'Icon',
              subtitle: 'Choose an icon that fits the purpose of this wallet perfectly',
              leftIcon: { name: 'color-palette' },
              navigate: () => {
                this.navigation.navigate('icon', { wallet: this.route.params.wallet })
              }
            }
          ]
        },
        {
          title: 'Credentials',
          data: [
            {
              title: 'Restore key',
              subtitle: 'The restore key enables you to restore this wallet. If you lose it you can never recover it and you\'ll loose access to your XVG. So make absolutely sure to keep it very safe.',
              leftIcon: { name: 'key' },
              navigate: () => {
                this.navigation.navigate('pin', {
                  authenticated: () => {
                    this.navigation.navigate('restoreKey', { wallet: this.route.params.wallet })
                  }
                })
              }
            },
            {
              title: 'Export your wallet',
              subtitle: 'Creating an extra backup of your wallet credentials can be a smart thing to do. Either store it safely on a removable drive or another secure place.',
              leftIcon: { name: 'download' },
              navigate: () => {
                this.navigation.navigate('pin', {
                  authenticated: () => {
                    this.navigation.navigate('export', { wallet: this.route.params.wallet })
                  }
                })
              }
            }
          ]
        },
        {
          title: 'Danger Zone',
          data: [
            {
              title: 'Delete',
              subtitle: 'This will delete your wallet from this application. Your wallet can still be restored by using your restore key and pass phrase. Please make absolutely sure you\'ve written down your restore key and know your pass phrase. Remember that your restore key + pass phrase is the only way to restore your current wallet.',
              leftIcon: { name: 'trash' }
            }
          ]
        }
      ]
    }
  }
}
</script>
