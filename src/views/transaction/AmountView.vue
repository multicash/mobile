<template>
  <view :style="{ flex: 1 }">
    <modal-navigation
      title="Amount"
      has-close-button
      @on-dismiss="navigation.goBack()"
    />
    <view-background
      :style="{ alignItems: 'center' }"
    >
      <view
        :style="styles.container"
      >
        <view :style="styles.sourceContainer">
          <selector
            :name="route.params.isReceive ? 'Receiving wallet' : 'From wallet'"
            :value="sourceWallet.name"
            @on-press="selectSourceWallet"
          />
        </view>
        <view :style="styles.inputContainer">
          <text :style="styles.title">How much?</text>
          <view :style="styles.amountContainer">
            <text :style="styles.amountCurrencyText">MCX</text>
            <text-input
              :style="styles.amountTextInput"
              keyboard-type="numeric"
              placeholder="0.00"
              auto-focus
              :placeholder-text-color="isDarkScheme ? '#111111' : '#dadada'"
              v-model="amount"
            />
          </view>
          <view :style="styles.calculatedAmountContainer">
            <money :style="styles.calculatedAmountTextInput" :amount="amountNumber" convert/>
          </view>
        </view>
        <spacer v-if="amountNumber === 0" :style="{height: 50}"/>
        <rounded-button
          v-if="amountNumber > 0"
          title="Recipient"
          :style="styles.recipientButton"
          @on-press="confirm"
        />
      </view>
    </view-background>
  </view>
</template>

<script>
import { Platform, Keyboard } from 'react-native'
import constants from '@/core/support/constants.ts'
import { mapGetters } from 'vuex'
import Transaction from '@/core/transaction/models/Transaction'

export default {
  name: 'AmountView',

  data () {
    return {
      amount: '',
      sourceWallet: null,
      keyboardHeight: 0
    }
  },

  created () {
    const listener = Keyboard.addListener('keyboardDidShow', event => {
      this.keyboardHeight = event.endCoordinates ? event.endCoordinates.height : 0

      Keyboard.removeListener('keyboardDidShow', listener)
    })

    if (this.route.params.walletIdentifier) {
      this.sourceWallet = this.wallet
    } else {
      this.sourceWallet = this.$walletManager.getWallet(this.getDefaultWallet) || this.$walletManager.defaultWallet()
    }
  },

  computed: {
    ...mapGetters(['getDefaultWallet']),

    styles () {
      return stylesStore(this.isDarkScheme, this.keyboardHeight)
    },

    amountNumber () {
      const amount = parseFloat(this.amount.replace(',', '.'))

      return parseFloat(amount * constants.satoshiDivider) || 0
    }
  },

  methods: {
    selectSourceWallet () {
      const unsubscribe = this.navigation.addListener('focus', () => {
        if (this.route.params.sourceWallet) {
          this.sourceWallet = this.route.params.sourceWallet
          this.navigation.removeListener('focus', unsubscribe)
        }
      })

      this.navigation.navigate('wallets', {
        goBack: true,
        returnView: 'amount'
      })
    },

    confirm () {
      const amount = parseFloat(this.amount.replace(',', '.'))
      const transaction = Transaction.byAmount(amount, this.route.params.isReceive)
      transaction.setWallet(this.sourceWallet)

      this.navigation.navigate('recipient', {
        walletIdentifier: this.route.params.walletIdentifier || null,
        transaction: transaction
      })
    }
  }
}

const stylesStore = (isDarkScheme, keyboardHeight) => {
  return {
    container: {
      flex: 1,
      width: '100%',
      marginBottom: Platform.OS === 'ios' ? keyboardHeight : 0
    },

    sourceContainer: {
      marginBottom: 50
    },

    inputContainer: {
      flex: 1,
      alignItems: 'center'
    },

    title: {
      color: isDarkScheme ? '#c0c0c0' : '#717171',
      fontWeight: '600',
      fontSize: 18
    },

    amountContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    },

    amountCurrencyText: {
      paddingTop: 10,
      color: isDarkScheme ? '#6b47e1' : '#4c00ff',
      fontSize: 35,
      fontWeight: 'bold'
    },

    amountTextInput: {
      fontSize: 35,
      fontWeight: 'bold',
      padding: 0,
      paddingTop: 10,
      paddingHorizontal: 10,
      minWidth: 100,
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
    },

    recipientButton: {
      height: 50,
      width: '100%'
    }
  }
}
</script>
