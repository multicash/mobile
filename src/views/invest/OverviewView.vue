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
  <modal-view
    title="Invest MCX"
    has-close-button
    @on-dismiss="navigation.goBack()"
    :scrollable="!hasMcxWallet"
    :no-padding="hasMcxWallet"
  >
    <table-view
      v-if="hasMcxWallet"
      :sections="investments"
      :header="tableHeader"
    />
  </modal-view>
</template>

<script>
import TableHeaderView from '@/react/components/TableHeaderView'

export default {
  name: 'OverviewView',

  data () {
    return {
      investments: [
        {
          title: 'Manage',
          data: [
            {
              title: 'Create Investment',
              leftAvatar: { source: require('@/assets/new.png') },
              onPress: () => {
                this.navigation.navigate('add')
              }
            }
            // ,
            // {
            //   title: 'Statistics',
            //   leftAvatar: { source: require('@/assets/stocks-growth.png') },
            //   onPress: () => {
            //     this.navigation.navigate('statistics')
            //   }
            // }
          ]
        },
        {
          title: 'Running Investments',
          data: [
            {
              title: '2.000,00 MCX',
              leftAvatar: { source: require('@/assets/duration-finance.png') },
              onPress: () => {
                this.navigation.navigate('investment')
              }
            },
            {
              title: '10.000,00 MCX',
              leftAvatar: { source: require('@/assets/duration-finance.png') },
              onPress: () => {
                this.navigation.navigate('investment')
              }
            }
          ]
        }
      ]
    }
  },

  computed: {
    styles () {
      return styleStore(this.isDarkScheme)
    },

    hasMcxWallet () {
      return this.$walletManager.getWallets().filter(wallet => wallet.coin !== 'MCX').length > 0
    }
  },

  methods: {
    tableHeader () {
      return new TableHeaderView(
        this.isDarkScheme,
        'Invest MCX',
        'With MultiCash you can easily put your MCX in a savings account and you will receive 2.5% interest.',
        require('@/assets/duration-finance.png')
      )
    }
  }
}

const styleStore = (isDarkScheme) => {
  return {}
}
</script>
