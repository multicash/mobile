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
  <view :style="{ flex: 1 }">
    <status-bar bar-style="light-content" />
    <modal-navigation
      has-back-button
      title="Payment"
      @on-dismiss="navigation.goBack()"
    >
    </modal-navigation>
    <view-background
      scrollable
    >
      <view :style="styles.headerContainer">
        <source-icon
          :transaction-icon="{
            title: 'Main Account',
            amount: 50444440000,
            image: 'wallet'
          }"
        />
        <icon name="arrow-forward-outline" :size="50"/>
        <source-icon
          :transaction-icon="{
            title: 'Savings Account',
            image: 'moneyBox'
          }"
        />
      </view>

      <view :style="styles.amountContainer">
        <money
          crypto
          :amount="route.params.transaction.amount /* 100000000*/"
          :style="styles.amount"
        />
        <money
          convert
          approximately
          :amount="(route.params.transaction.amount /* 100000000*/) || 0"
          :style="styles.calculatedAmount"
        />
      </view>

      <detail-list>
        <detail-list-item title="Payed on" value="17 sep. 2020 14:00" icon="calendar-outline"/>
        <detail-list-item title="Description" value="McDonald's Bruh" icon="chatbubble-ellipses"/>
        <detail-list-title title="Extra details"/>
        <detail-list-item title="Confirmations" value="4434" icon="checkmark"/>
        <detail-list-item title="TXID" value="2b58f7b37...6dd6ba244" icon="link-outline"/>
      </detail-list>

      <link-button :text-style="styles.explorerButtonText" title="Check on explorer"/>

    </view-background>
  </view>
</template>

<script>
import { Platform } from 'react-native'

export default {
  name: 'TransactionView',

  computed: {
    styles () {
      return stylesStore(this.isDarkScheme)
    }
  }
}

const stylesStore = (isDarkScheme) => {
  return {
    headerContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      paddingHorizontal: 20
    },

    amountContainer: {
      padding: 30,
      alignItems: 'center'
    },

    amount: {
      fontSize: 40,
      color: isDarkScheme ? '#B95C8B' : '#931A5A',
      fontWeight: Platform.OS === 'ios' ? '900' : 'bold'
    },

    calculatedAmount: {
      color: isDarkScheme ? '#8374b2' : '#4d3f70',
      fontSize: 20,
      fontWeight: 'bold'
    },

    sendPaymentButton: {
      width: '100%',
      marginBottom: 10
    },

    explorerButtonText: {
      marginTop: 20,
      fontSize: 12
    }
  }
}
</script>
