<template>
  <view-background no-padding>
    <modal-navigation
      title="Wallets"
      has-back-button
      @on-dismiss="navigation.goBack()"
    />
    <table-view :sections="wallets" type="small"/>
  </view-background>
</template>

<script>
import { resolveIcon } from '@/support/walletIcons'

export default {
  name: 'WalletsView',

  computed: {
    wallets () {
      return [
        {
          data: this.$walletManager.wallets.map(wallet => {
            return {
              title: wallet.name,
              subtitle: this.formatAmountFromSatoshis(wallet.info.balance.totalAmount, 'en'),
              leftAvatar: { source: resolveIcon(wallet.icon), size: 40, rounded: false },
              onPress: () => this.navigate(wallet)
            }
          })
        }
      ]
    }
  },

  methods: {
    navigate (wallet) {
      if (this.route.params.navigate) {
        this.navigation.navigate(
          this.route.params.navigate,
          {
            sourceWallet: wallet.name,
            ...this.route.params
          }
        )
      }

      if (this.route.params.goBack) {
        this.navigation.navigate(this.route.params.returnView, { sourceWallet: wallet.name })
      }
    }
  }
}
</script>
