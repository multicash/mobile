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
            v-if="!route.params.isReceive"
            name="From wallet"
            :value="sourceWallet"
            @on-press="selectSourceWallet"
          />
        </view>
        <view :style="styles.inputContainer">
          <text :style="styles.title">How much?</text>
          <view :style="styles.amountContainer">
            <text :style="styles.amountCurrencyText">MCX</text>
            <text-input
              :style="styles.amountTextInput"
              keyboard-type="decimal-pad"
              placeholder="0,00"
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
import ViewBackground from '@/components/views/ViewBackground'
import ModalNavigation from '@/components/navigations/ModalNavigation'
import Money from '@/components/labels/Money'
import RoundedButton from '@/components/buttons/RoundedButton'
import Spacer from '@/components/views/Spacer'
import Selector from '@/components/forms/Selector'
import { Platform, Keyboard } from 'react-native'

export default {
  name: 'AmountView',

  components: { Spacer, Selector, RoundedButton, Money, ModalNavigation, ViewBackground },

  data () {
    return {
      amount: '',
      sourceWallet: 'Main Account',
      keyboardHeight: 0
    }
  },

  created () {
    const listener = Keyboard.addListener('keyboardDidShow', event => {
      this.keyboardHeight = event.endCoordinates ? event.endCoordinates.height : 0

      Keyboard.removeListener('keyboardDidShow', listener)
    })
  },

  computed: {
    styles () {
      return stylesStore(this.isDarkScheme, this.keyboardHeight)
    },

    amountNumber () {
      return parseFloat(this.amount) || 0
    }
  },

  methods: {
    selectSourceWallet () {
      this.navigation.navigate('wallets', {
        goBack: true,
        resolve: (value) => {
          this.sourceWallet = value.name
        }
      })
    },

    confirm () {
      this.navigation.navigate('recipient', { amount: this.amount, ...this.route.params })
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
