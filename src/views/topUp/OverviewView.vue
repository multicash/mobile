<!--MultiCash Mobile-->
<!--Copyright (C) 2021  Swen van Zanten-->

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
  <modal-view
    title="Top Up"
    has-close-button
    @on-dismiss="navigation.goBack()"
    no-padding
  >
    <table-view :sections="wallets" :header="renderTableHeader"/>
  </modal-view>
</template>

<script>
import TableHeaderView from '@/react/components/TableHeaderView'
import { resolveIcon } from '@/core/assets/walletIcons'
import { mapActions } from 'vuex'

export default {
  name: 'OverviewView',

  computed: {
    styles () {
      return styleStore(this.isDarkScheme)
    },

    wallets () {
      return [
        {
          title: 'Which Account?',
          data: this.orderedWallets
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

  created () {
    this.hasAnnouncement('topUp').then(hasAnnouncement => {
      if (hasAnnouncement) {
        this.navigation.navigate('topUp.explain')
      }
    })
  },

  methods: {
    ...mapActions(['hasAnnouncement', 'announcementSeen']),

    navigate (wallet) {
      this.navigation.navigate('buy', {
        walletIdentifier: wallet.identifier
      })
    },

    renderTableHeader (isDarkScheme) {
      return TableHeaderView(
        isDarkScheme,
        'Account Top Up',
        'Top Up your accounts from within MultiCash provided by our partner ChangeNOW.',
        require('@/assets/add-dollar.png')
      )
    }
  }
}

const styleStore = (isDarkScheme) => {
  return {}
}
</script>
