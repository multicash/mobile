<!--MultiCash Mobile-->
<!--Copyright (C) 2021  MultiCash Developers-->

<!--This program is free software: you can redistribute it and/or modify-->
<!--it under the terms of the GNU General Public License as published by-->
<!--the Free Software Foundation, either version 3 of the License, or-->
<!--any later version.-->

<!--This program is distributed in the hope that it will be useful,-->
<!--but WITHOUT ANY WARRANTY; without even the implied warranty of-->
<!--MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the-->
<!--GNU General Public License for more details.-->

<!--You should have received a copy of the GNU General Public License-->
<!--along with this program.  If not, see <https://www.gnu.org/licenses/>.-->

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
              subtitle: 'The accounts name is needed because you can have multiple accounts inside this awesome application!',
              leftAvatar: { source: require('@/assets/dog-tag.png'), size: 40 },
              onPress: () => {
                this.navigation.navigate('name', { walletIdentifier: this.wallet.identifier })
              }
            },
            {
              title: 'Icon',
              subtitle: 'Choose an icon that fits the purpose of this account perfectly',
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
              subtitle: 'The restore key enables you to restore this account. If you lose it you can never recover it and you\'ll loose access to your MCX. So make absolutely sure to keep it very safe.',
              leftAvatar: { source: require('@/assets/signing-document.png'), size: 40 },
              onPress: () => {
                this.$authManager.authenticate('view', { unlock: 'restoreKey' }).then(authenticated => {
                  if (authenticated) {
                    this.navigation.navigate('restoreKey', { walletIdentifier: this.wallet.identifier })
                  }
                })
              }
            },
            {
              title: 'Export your account',
              subtitle: 'Creating an extra backup of your account credentials can be a smart thing to do. Either store it safely on a removable drive or another secure place.',
              leftAvatar: { source: require('@/assets/export.png'), size: 40 },
              onPress: () => {
                this.$authManager.authenticate('view', { unlock: 'export' }).then(authenticated => {
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
              subtitle: 'This will delete your account from this application. Your account can still be restored by using your restore key and pass phrase. Please make absolutely sure you\'ve written down your restore key and know your pass phrase. Remember that your restore key + pass phrase is the only way to restore your current account.',
              leftAvatar: { source: require('@/assets/delete-bin.png'), size: 40 },
              noChevron: true,
              onPress: () => {
                Alert.alert(
                  'Delete account',
                  `Are you sure you want to delete your account ${this.wallet.name}?`,
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
