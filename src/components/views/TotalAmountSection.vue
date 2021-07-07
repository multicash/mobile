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
  <view :style="styles.container">
    <text :style="styles.totalAmountTitle">Total Value</text>
    <money
      crypto
      :amount="totalAmount"
      :style="styles.totalAmount"
    />
    <money
      approximately
      convert
      :amount="totalAmount"
      :style="styles.totalFiatAmount"
    />
  </view>
</template>

<script>
import { Platform } from 'react-native'

export default {
  name: 'TotalAmountSection',

  computed: {
    styles () {
      return stylesStore(this.isDarkScheme)
    },

    totalAmount () {
      return this.wallets.map(wallet => wallet.totalAmount).reduce((a, b) => a + b, 0)
    }
  }
}

const stylesStore = (isDarkScheme) => {
  return {
    container: {
      flexGrow: 1,
      justifyContent: 'center',
      paddingHorizontal: 30
    },

    totalAmountTitle: {
      color: '#e1e1e1'
    },

    totalAmount: {
      color: '#ffffff',
      width: '100%',
      fontSize: 35,
      fontWeight: Platform.OS === 'ios' ? '900' : 'bold'
    },

    totalFiatAmount: {
      color: '#8de3ff',
      width: '100%',
      fontSize: 15,
      fontWeight: '600'
    }
  }
}
</script>
