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
  <view>
    <template v-if="transactions.length > 0">
      <view
        v-for="transaction in transactions"
        :key="JSON.stringify(transaction)"
      >
        <touchable-opacity
          :style="styles.item"
          :active-opacity="0.6"
          :on-press="() => $emit('on-press', transaction)"
        >
          <view :style="styles.itemAvatar">
            <icon
              v-if="transaction.icon"
              :name="transaction.icon"
              :color="transaction.color"
              :size="40"
            />
            <wallet-icon
              v-if="transaction.avatar"
              :icon="transaction.avatar"
              :size="40"
            />
          </view>
          <view :style="styles.itemTextContainer">
            <text
              :style="styles.itemTitle"
              :numberOfLines="1"
              ellipsizeMode="middle"
            >
              {{ transaction.title }}
            </text>
            <text :style="styles.itemSubtitle">{{ transaction.subtitle }}</text>
          </view>
          <money
            :amount="transaction.amount"
            crypto
            currency=""
            :style="styles.itemAmount"
          />
        </touchable-opacity>
      </view>
      <rounded-button
        title="Show more"
        :style="{ marginBottom: 5 }"
      />
    </template>
    <template v-else>
      <view :style="styles.noTransactionsContainer">
        <view :style="{ flexDirection: 'row' }">
          <image :style="styles.noTransactionsImage" :source="require('@/assets/address-book.png')"/>
        </view>
        <text :style="styles.noTransactionsLabel">No addresses created yet</text>
      </view>
    </template>
  </view>
</template>

<script>
import { subtitle, text } from '@/core/support/styles'

export default {
  name: 'AddressesContainer',

  props: {
    transactions: {
      type: Array,
      default () {
        return []
      }
    }
  },

  computed: {
    styles () {
      return stylesStore(this.isDarkScheme)
    }
  }
}

const stylesStore = (isDarkScheme) => {
  return {
    item: {
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 10,
      marginBottom: 5,
      backgroundColor: isDarkScheme ? '#2c2e36' : '#ffffff',
      padding: 15
    },

    itemAvatar: {
      width: 40,
      height: 40,
      marginRight: 10
    },

    itemTextContainer: {
      flex: 1,
      marginRight: 10
    },

    itemTitle: {
      color: text(isDarkScheme).color,
      fontSize: 16,
      marginBottom: 2
    },

    itemSubtitle: {
      color: subtitle(isDarkScheme).color,
      fontSize: 13
    },

    itemAmount: {
      fontWeight: 'bold',
      color: isDarkScheme ? '#b95c8b' : '#931A5A'
    },

    noTransactionsContainer: {
      alignItems: 'center',
      paddingVertical: 20
    },

    noTransactionsImage: {
      width: 60,
      height: 60,
      marginBottom: 10,
      resizeMode: 'contain'
    },

    noTransactionsLabel: {
      fontWeight: 'bold',
      fontSize: 16,
      color: subtitle(isDarkScheme).color
    }
  }
}
</script>
