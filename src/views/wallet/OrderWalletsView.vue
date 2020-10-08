<template>
  <view-background no-padding>
    <modal-navigation
      title="Order wallets"
      has-close-button
      @on-dismiss="navigation.goBack()"
    />
    <table-view :sections="walletsList" type="small"/>
  </view-background>
</template>

<script>
import ViewBackground from '@/components/views/ViewBackground'
import ModalNavigation from '@/components/navigations/ModalNavigation'
import TableView from '@/components/tables/TableView'
import { resolveIcon } from '@/support/walletIcons'

export default {
  name: 'OrderWalletsView',

  components: {
    TableView,
    ModalNavigation,
    ViewBackground
  },

  data () {
    return {
      wallets: []
    }
  },

  computed: {
    walletsList () {
      return [
        {
          data: this.wallets.map(wallet => {
            return {
              title: wallet.name,
              subtitle: this.getFormattedCrypto(wallet.amount, 'en', 'MCX'),
              leftAvatar: { source: resolveIcon(wallet.icon), size: 40, rounded: false }
            }
          })
        }
      ]
    }
  },

  created () {
    this.wallets = this.route.params.wallets
  }
}
</script>
