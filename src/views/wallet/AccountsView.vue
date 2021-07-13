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
      title="Select account"
      has-back-button
      @on-dismiss="navigation.goBack()"
    />
    <table-view :sections="accounts" type="small"/>
  </view-background>
</template>

<script>
import { resolveIcon } from '@/core/assets/walletIcons'
import { mapGetters } from 'vuex'

export default {
  name: 'AccountsView',

  computed: {
    ...mapGetters(['getDefaultWallet']),

    accounts () {
      return [
        {
          data: this.orderedWallets
            .map(account => {
              return {
                title: account.name,
                subtitle: this.formatAmountFromSatoshis(account.totalAmount, account.coin),
                leftAvatar: { source: resolveIcon(account.icon), size: 40 },
                noChevron: true,
                checked: this.getDefaultWallet === account.identifier,
                onPress: () => this.navigate(account)
              }
            })
        }
      ]
    }
  },

  methods: {
    navigate (account) {
      if (this.route.params.goBack) {
        this.navigation.navigate(this.route.params.returnView, { account })
      }
    }
  }
}
</script>
