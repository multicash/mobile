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
          v-if="source"
          :title="source.title"
          :amount="source.amount"
          :image="source.image"
          :icon="source.icon"
          :icon-color="source.iconColor"
        />
        <icon
          :name="route.params.isReceive ? 'arrow-back-outline' : 'arrow-forward-outline'"
          :size="50"
        />
        <source-icon
          v-if="target"
          :title="target.title"
          :amount="target.amount"
          :image="target.image"
          :icon="target.icon"
          :icon-color="target.iconColor"
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
    },

    source () {
      return this.route.params.source
    },

    target () {
      return this.route.params.target
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
