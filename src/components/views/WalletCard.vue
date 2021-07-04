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
  <touchable-opacity
    :active-opacity="touchable ? 0.6 : 1"
    :on-press="() => $emit('wallet-selected', value)"
    :style="styles.walletCard"
  >
    <view :style="styles.walletCardHeader">
      <wallet-icon :icon="value.icon" :size="30"/>

      <view :style="styles.walletCardInfo">
        <text
          :style="styles.walletCardName"
          adjusts-font-size-to-fit
          :minimumFontScale="0.01"
        >
          {{ value.name }}
        </text>

        <text
          :style="styles.walletCardTag"
          adjusts-font-size-to-fit
          :minimumFontScale="0.01"
        >
          {{ value.tag }}
        </text>
      </view>
    </view>

    <view :style="styles.moneyView">
      <money
        crypto
        :currency="value.coin"
        :amount="value.totalAmount"
        :style="styles.walletCardAmount"
      />
    </view>

    <view v-if="richDisplay" :style="styles.moneyView">
      <money
        approximately
        convert
        :amount="value.totalAmount"
        :style="styles.walletCardFiatAmount"
      />
    </view>
  </touchable-opacity>
</template>

<script>
import { cards, text } from '@/core/support/styles'
import WalletIcon from '@/components/icons/WalletIcon'
import Money from '@/components/labels/Money'
import { Platform } from 'react-native'

export default {
  name: 'WalletCard',

  components: { Money, WalletIcon },

  computed: {
    styles () {
      return stylesStore(this.isDarkScheme, this.richDisplay)
    }
  },

  props: {
    value: {
      type: Object,
      required: true
    },

    touchable: {
      type: Boolean,
      default: true
    },

    richDisplay: {
      type: Boolean,
      default: false
    }
  }
}

const stylesStore = (isDarkScheme, richDisplay) => {
  return {
    walletCard: {
      ...cards(isDarkScheme),
      flex: 1,
      height: '100%',
      width: 250
    },
    walletCardHeader: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      marginBottom: 5
    },
    walletCardInfo: {
      marginHorizontal: 10,
      flex: 1
    },
    walletCardName: {
      fontSize: 15,
      fontWeight: 'bold',
      color: text(isDarkScheme).color
    },
    walletCardTag: {
      color: isDarkScheme ? '#B95C8B' : '#931A5A',
      fontWeight: '600',
      fontSize: 12
    },
    moneyView: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
    },
    walletCardAmount: {
      color: text(isDarkScheme).color,
      fontSize: 35,
      fontWeight: Platform.OS === 'ios' ? '900' : 'bold',
      width: '100%',
      marginTop: richDisplay ? undefined : 15
    },
    walletCardFiatAmount: {
      color: isDarkScheme ? '#A7BBC1' : '#7E97A0',
      fontSize: 15,
      fontWeight: '600'
    }
  }
}
</script>
