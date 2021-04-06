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
      :style="{ alignItems: 'center' }"
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
          :amount="route.params.transaction.amount"
          :style="styles.amount"
        />
        <money
          convert
          :amount="route.params.transaction.amount / 1000000"
          :style="styles.calculatedAmount"
        />
      </view>

      <detail-list :style="styles.detailsContainer">
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
      color: isDarkScheme ? '#f744e4' : '#b00dfa',
      fontWeight: '600'
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

    detailsContainer: {
      backgroundColor: isDarkScheme ? '#191a20' : 'white',
      borderRadius: 15,
      padding: 20
    },

    explorerButtonText: {
      marginTop: 20,
      fontSize: 12
    }
  }
}
</script>
