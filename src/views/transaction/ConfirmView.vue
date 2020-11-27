<template>
  <view :style="{ flex: 1 }">
    <modal-navigation
      :title="route.params.isReceive ? 'New request' : 'New payment'"
      has-back-button
      @on-dismiss="navigation.goBack()"
    />
    <view-background
      :style="{ alignItems: 'center' }"
    >
      <view :style="styles.headerContainer">
        <source-icon
          title="Main Account"
          :amount="50444440000"
          image="wallet"
        />
        <icon
          :name="route.params.isReceive ? 'arrow-back-outline' : 'arrow-forward-outline'"
          :size="50"
        />
        <source-icon
          title="Savings Account"
          image="moneyBox"
        />
      </view>

      <view :style="styles.amountContainer">
        <money
          crypto
          :amount="route.params.amount * 100000000"
          :style="styles.amount"
        />
        <money
          convert
          :amount="(route.params.amount * 100000000) || 0"
          :style="styles.calculatedAmount"
        />
      </view>

      <rounded-button
        :title="route.params.isReceive ? 'Share request' : 'Send payment'"
        :style="styles.sendPaymentButton"
        @on-press="navigation.navigate('paying', route.params)"
      />

      <rounded-text-input title="Description" placeholder="Why this payment?" />
    </view-background>
  </view>
</template>

<script>
export default {
  name: 'ConfirmView',

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
      color: '#a014c1',
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
    }
  }
}
</script>
