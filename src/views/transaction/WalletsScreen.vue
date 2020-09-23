<template>
  <view-background no-padding>
    <modal-navigation
      title="Wallets"
      has-back-button
      @on-dismiss="navigation.goBack()"
    />
    <table-view :sections="data" type="small"/>
  </view-background>
</template>

<script>
import ModalNavigation from '@/components/ModalNavigation'
import TableView from '@/components/TableView'
import ViewBackground from '@/components/ViewBackground'

export default {
  name: 'WalletsScreen',

  components: { ViewBackground, TableView, ModalNavigation },

  data () {
    return {
      data: [
        {
          data: [
            {
              title: 'Main Account',
              subtitle: this.getFormattedCrypto(10505.44, 'en', 'MCX'),
              leftAvatar: { source: require('@/assets/walletIcons/wallet.png'), size: 40, rounded: false },
              navigate: () => this.navigate({ name: 'Main Account', amount: 10 })
            },
            {
              title: 'Savings Account',
              subtitle: this.getFormattedCrypto(1430705.78, 'en', 'MCX'),
              leftAvatar: { source: require('@/assets/walletIcons/money_box.png'), size: 40, rounded: false },
              navigate: () => this.navigate({ name: 'Savings Account', amount: 12 })
            }
          ]
        }
      ]
    }
  },

  props: {
    navigation: {
      type: Object
    }
  },

  methods: {
    navigate (wallet) {
      if (this.navigation.state.params.navigate) {
        this.navigation.navigate(
          this.navigation.state.params.navigate,
          wallet
        )
      }

      if (this.navigation.state.params.goBack) {
        this.navigation.state.params.resolve(wallet)
        this.navigation.goBack()
      }
    }
  }
}
</script>
