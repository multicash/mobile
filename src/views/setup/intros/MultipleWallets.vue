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
  <view :style="styles.container">
    <image :style="styles.image" :source="require('@/assets/coin-wallet.png')" />
    <view>
      <text :style="styles.title">Multiple Accounts</text>
      <text :style="styles.subtitle">You can create as many accounts as you want to keep your funds in the right yars.</text>
    </view>

    <view :style="styles.exampleContainer">

      <view :style="{ height: 130, marginBottom: 40 }">
        <wallet-card
          :touchable="false"
          :style="styles.wallet1"
          :value="{
            name: 'Happy\'s Account',
            tag: '@HappyPayments',
            totalAmount: 123445494344,
            icon: 'moneyBag'
          }"
        />
      </view>

      <view :style="{ height: 130, alignItems: 'flex-end' }">
        <wallet-card
          :touchable="false"
          :style="styles.wallet2"
          :value="{
            name: 'Savings Account',
            tag: '@happySavings',
            totalAmount: 3420550054344,
            icon: 'safe'
          }"
        />
      </view>

    </view>
  </view>
</template>

<script>
import { pageSubtitle, pageTitle } from '@/core/support/styles'

export default {
  name: 'MultipleWallets',

  props: {
    active: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    styles () {
      return styleStore(this.isDarkScheme, this.active)
    }
  }
}

const styleStore = (isDarkScheme, active) => {
  return {

    container: {
      alignItems: 'center',
      opacity: active ? 1 : 0.5
    },

    image: { width: 60, height: 60, resizeMode: 'contain' },

    title: {
      ...pageTitle(isDarkScheme),
      color: '#e96100'
    },

    subtitle: {
      ...pageSubtitle(isDarkScheme),
      marginBottom: 40
    },

    exampleContainer: {
      width: '100%',
      flex: 1,
      justifyContent: 'center'
    },

    wallet1: {
      shadowColor: '#e96100',
      shadowRadius: 60,
      shadowOpacity: isDarkScheme ? 0.25 : 0.5
    },

    wallet2: {
      shadowColor: '#e9009b',
      shadowRadius: 80,
      shadowOpacity: isDarkScheme ? 0.25 : 0.5
    }

  }
}
</script>
