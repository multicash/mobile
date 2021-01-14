<template>
  <view :style="styles.container">
    <text :style="styles.totalAmountTitle">Total Value</text>
    <money
      crypto
      :amount="1398345454400000"
      :style="styles.totalAmount"
    />
    <money
      convert
      :amount="1398345454400000"
      :style="styles.totalFiatAmount"
    />
  </view>
</template>

<script>
export default {
  name: 'TotalAmountSection',

  computed: {
    styles () {
      return stylesStore(this.isDarkScheme)
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
      fontWeight: 'bold'
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
