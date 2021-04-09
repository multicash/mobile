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
import { Alert } from 'react-native'

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
              leftAvatar: { source: require('@/assets/dog-tag.png'), size: 40 },
              onPress: () => {
                this.navigation.navigate('name', { walletIdentifier: this.wallet.identifier })
              }
            },
            {
              title: 'Icon',
              subtitle: 'Choose an icon that fits the purpose of this wallet perfectly',
              leftAvatar: { source: require('@/assets/paint-palette.png'), size: 40 },
              onPress: () => {
                this.navigation.navigate('icon', { walletIdentifier: this.wallet.identifier })
              }
            }
          ]
        },
        {
          title: 'Credentials',
          data: [
            {
              title: 'Restore key',
              subtitle: 'The restore key enables you to restore this wallet. If you lose it you can never recover it and you\'ll loose access to your MCX. So make absolutely sure to keep it very safe.',
              leftAvatar: { source: require('@/assets/signing-document.png'), size: 40 },
              onPress: () => {
                this.$authManager.authenticate().then(authenticated => {
                  if (authenticated) {
                    this.navigation.navigate('restoreKey', { walletIdentifier: this.wallet.identifier })
                  }
                })
              }
            },
            {
              title: 'Export your wallet',
              subtitle: 'Creating an extra backup of your wallet credentials can be a smart thing to do. Either store it safely on a removable drive or another secure place.',
              leftAvatar: { source: require('@/assets/export.png'), size: 40 },
              onPress: () => {
                this.$authManager.authenticate().then(authenticated => {
                  if (authenticated) {
                    this.navigation.navigate('export', { walletIdentifier: this.wallet.identifier })
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
              leftAvatar: { source: require('@/assets/delete-bin.png'), size: 40 },
              noChevron: true,
              onPress: () => {
                Alert.alert(
                  'Delete wallet',
                  `Are you sure you want to delete your wallet ${this.wallet.name}?`,
                  [
                    {
                      text: 'Cancel',
                      style: 'cancel'
                    },
                    {
                      text: 'Delete',
                      onPress: () => {
                        this.$authManager.authenticate().then(authenticated => {
                          if (authenticated) {
                            this.$walletManager.removeWallet(this.wallet)

                            this.navigation.navigate('home')
                          }
                        })
                      },
                      style: 'destructive'
                    }
                  ]
                )
              }
            }
          ]
        }
      ]
    }
  }
}
</script>
