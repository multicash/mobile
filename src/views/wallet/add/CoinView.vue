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
      has-back-button
      title="Currency"
      @on-dismiss="navigation.goBack()"
    />
    <table-view :sections="coinList" :header="header"/>
  </view-background>
</template>

<script>
import constants from '@/core/support/constants'
import { resolveIcon } from '@/core/assets/coinIcons'
import Coins from '@/core/assets/coins'
import TableHeaderView from '@/react/components/TableHeaderView'

export default {
  name: 'CoinView',

  data () {
    return {
      coin: constants.defaultCoin
    }
  },

  computed: {
    styles () {
      return styleStore(this.isDarkScheme)
    },

    coinList () {
      const coinItem = (coin) => {
        return {
          title: coin.name,
          subtitle: coin.ticker,
          leftAvatar: { source: resolveIcon(coin.ticker) },
          onPress: () => {
            this.coin = coin.ticker.toLowerCase()
            this.proceed()
          }
        }
      }

      return [
        {
          title: 'Recommended currencies',
          footer: 'MultiCash enables you to send your funds super fast, enables you to use @tags to send each other funds and if enabled will return you annual percentage yield.',
          data: Coins.filter(coin => coin.ticker === 'MCX').map(coinItem)
        },
        {
          title: 'Other currencies',
          data: Coins.filter(coin => coin.ticker !== 'MCX').map(coinItem)
        }
      ]
    }
  },

  methods: {
    proceed () {
      let view = this.route.params.restore ? 'preferences' : 'tag'

      if (this.coin.toUpperCase() !== 'MCX') {
        view = 'preferences'
      }

      const params = {
        ...this.route.params,
        coin: this.coin
      }

      this.navigation.navigate(view, params)
    },

    header (isDarkScheme) {
      return new TableHeaderView(
        isDarkScheme,
        'Choose a Currency',
        'You can choose any basis as the currency of your account. If you\'re not sure, no problem MCX is the right one for you.',
        require('@/assets/currency-exchange.png')
      )
    }
  }
}

const styleStore = (isDarkScheme) => {
  return {}
}
</script>
