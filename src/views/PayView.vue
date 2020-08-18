<template>
  <view>
    <status-bar bar-style="light-content" />
    <modal-navigation
      title="Pay"
      has-close-button
      @on-dismiss="$parent.$emit('update:visible', false)"
    />
    <view-background>
      <view :style="styles.container">
        <text :style="styles.title">How much?</text>
        <view :style="styles.amountContainer">
          <text :style="styles.amountCurrencyText">MCX</text>
          <text-input
            :style="styles.amountTextInput"
            keyboard-type="decimal-pad"
            auto-focus
            placeholder="0,00"
            :placeholder-text-color="isDarkScheme ? '#111111' : '#dadada'"
            v-model="amount"
          />
        </view>
        <view v-if="amount !== ''" :style="styles.calculatedAmountContainer">
          <money :style="styles.calculatedAmountTextInput" :amount="amountNumber" convert/>
        </view>
      </view>
    </view-background>
  </view>
</template>

<script>
import ViewBackground from '../components/ViewBackground'
import ModalNavigation from '../components/ModalNavigation'
import Money from '../components/Money'

export default {
  name: 'PayView',

  components: { Money, ModalNavigation, ViewBackground },

  data () {
    return {
      amount: ''
    }
  },

  computed: {
    styles () {
      return stylesStore(this.isDarkScheme)
    },

    amountNumber () {
      return parseFloat(this.amount)
    }
  }
}

const stylesStore = (isDarkScheme) => {
  return {
    container: {
      marginTop: 30,
      justifyContent: 'center',
      alignItems: 'center'
    },

    title: {
      color: isDarkScheme ? '#c0c0c0' : '#717171',
      fontWeight: '600',
      fontSize: 15
    },

    amountContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    },

    amountCurrencyText: {
      paddingTop: 10,
      color: isDarkScheme ? '#6b47e1' : '#4c00ff',
      fontSize: 30,
      fontWeight: 'bold'
    },

    amountTextInput: {
      fontSize: 30,
      fontWeight: 'bold',
      padding: 0,
      paddingTop: 10,
      paddingHorizontal: 10,
      color: isDarkScheme ? '#6b47e1' : '#4c00ff'
    },

    calculatedAmountContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    },

    calculatedAmountTextInput: {
      color: isDarkScheme ? '#8374b2' : '#4d3f70',
      fontSize: 20,
      fontWeight: 'bold'
    }
  }
}
</script>
