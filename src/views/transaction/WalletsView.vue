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
      title="Accounts"
      has-back-button
      @on-dismiss="navigation.goBack()"
    />
    <table-view :sections="wallets" type="small"/>
  </view-background>
</template>

<script>
import { resolveIcon } from '@/core/assets/walletIcons'

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
                subtitle: this.formatAmountFromSatoshis(wallet.totalAmount, wallet.coin),
                leftAvatar: { source: resolveIcon(wallet.icon), size: 40 },
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
        const transaction = this.route.params.transaction
        if (transaction.isReceive) {
          transaction.from = wallet
        } else {
          transaction.to = wallet
        }

        this.navigation.navigate(
          this.route.params.navigate,
          {
            recipientType: 'self',
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
