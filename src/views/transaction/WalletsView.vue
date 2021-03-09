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
import { resolveIcon } from '@/core/support/walletIcons'

export default {
  name: 'WalletsView',

  computed: {
    wallets () {
      return [
        {
          data: this.orderedWallets
            .filter(wallet => {
              if (!this.route.params.source) {
                return true
              }

              return wallet.identifier !== this.route.params.source.walletIdentifier
            })
            .map(wallet => {
              return {
                title: wallet.name,
                subtitle: this.formatAmountFromSatoshis(wallet.totalAmount, 'en'),
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
            recipientType: 'self',
            target: {
              walletIdentifier: wallet.identifier,
              title: wallet.name,
              amount: wallet.totalAmount,
              image: wallet.icon
            },
            ...this.route.params
          }
        )
      }

      if (this.route.params.goBack) {
        this.navigation.navigate(this.route.params.returnView, { sourceWallet: wallet })
      }
    }
  }
}
</script>
