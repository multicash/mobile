<template>
  <view-background no-padding>
    <modal-navigation
      title="Settings"
      has-back-button
      @on-dismiss="navigation.goBack()"
    >
    </modal-navigation>
    <table-view :sections="data"/>
  </view-background>
</template>

<script>
import ModalNavigation from '@/components/navigations/ModalNavigation'
import TableView from '@/components/tables/TableView'
import ViewBackground from '@/components/views/ViewBackground'

export default {
  name: 'SettingsView',

  components: { TableView, ModalNavigation, ViewBackground },

  data () {
    return {
      data: [
        {
          title: 'Preferences',
          data: [
            {
              title: 'Name',
              subtitle: 'The wallets name is needed because you can have multiple wallets inside this awesome application!',
              leftIcon: { name: 'wallet' }
            },
            {
              title: 'Icon',
              subtitle: 'Choose an icon that fits the purpose of this wallet perfectly',
              leftIcon: { name: 'color-palette' }
            }
          ]
        },
        {
          title: 'Credentials',
          data: [
            {
              title: 'Paper key',
              subtitle: 'The paper key enables you to restore this wallet. If you lose it you can never recover it and you\'ll loose access to your XVG. So make absolutely sure to keep it very safe.',
              leftIcon: { name: 'key' }
            },
            {
              title: 'Export your wallet',
              subtitle: 'Creating an extra backup of your wallet credentials can be a smart thing to do. Either store it safely on a removable drive or another secure place.',
              leftIcon: { name: 'download' }
            }
          ]
        },
        {
          title: 'Danger Zone',
          data: [
            {
              title: 'Delete',
              subtitle: 'This will delete your wallet from this application. Your wallet can still be restored by using your paper key and pass phrase. Please make absolutely sure you\'ve written down your paper key and know your pass phrase. Remember that your paper key + pass phrase is the only way to restore your current wallet.',
              leftIcon: { name: 'trash' }
            }
          ]
        }
      ]
    }
  }
}
</script>
