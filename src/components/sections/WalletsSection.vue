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
  <view-section :style="styles.flexGrow" title="Accounts">
    <view slot="options" :style="styles.actionsContainer">
      <secondary-action-button
        v-if="orderedWallets.length > 1"
        icon="albums-outline"
        title=""
        :style="styles.actionButton"
        @on-press="$emit('order-wallets')"
      />
      <secondary-action-button
        icon="add-outline"
        title=""
        :style="styles.actionButton"
        @on-press="$emit('add-wallet')"
      />
    </view>

    <scroll-view
      :style="styles.wallets"
      horizontal
      :showsHorizontalScrollIndicator="false"
    >
      <view
        :style="styles.walletsContainer"
      >
        <wallet-card
          v-for="(wallet, i) in orderedWallets"
          :key="wallet.identifier"
          :value="wallet"
          :style="{
            marginRight: (i === orderedWallets.length - 1) ? 0 : 20,
          }"
          containerContentStyle="space-between"
          @wallet-selected="$emit('wallet-selected', arguments[0])"
        />
      </view>
    </scroll-view>
  </view-section>
</template>

<script>
export default {
  name: 'WalletsSection',

  computed: {
    styles () {
      return stylesStore(this.isDarkScheme)
    }
  }
}

const stylesStore = (isDarkScheme) => {
  return {
    flexGrow: {},

    wallets: {
      margin: -30
    },

    walletsContainer: {
      margin: 30,
      flexDirection: 'row'
    },

    actionsContainer: {
      flexDirection: 'row'
    },

    actionButton: {
      marginLeft: 10
    }
  }
}
</script>
