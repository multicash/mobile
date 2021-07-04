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
  <view :style="styles.inputContainer">
    <text :style="styles.title">How much?</text>
    <view :style="styles.amountContainer">
      <text :style="styles.amountCurrencyText">{{ coin }}</text>
      <text-input
        ref="amount"
        :onChangeText="onChangeText"
        :onEndEditing="onEndEditing"
        :onFocus="onFocus"
        :style="styles.amountTextInput"
        keyboard-type="numeric"
        placeholder="0.00"
        :auto-focus="autoFocus"
        :placeholder-text-color="isDarkScheme ? '#111111' : '#dadada'"
        :value="value"
        @input="$emit('input', $event)"
      />
      <!--            inputAccessoryViewID="inputAccessoryView"-->
      <!--            <input-accessory-view nativeID="inputAccessoryView">-->
      <!--              <view :style="styles.inputAccessoryView">-->
      <!--                <touchable-opacity-->
      <!--                  v-for="calculationButton in calculationButtons"-->
      <!--                  :style="styles.inputAccessoryViewButton"-->
      <!--                  :key="calculationButton"-->
      <!--                  :activeOpacity="0.8"-->
      <!--                >-->
      <!--                  <text :style="styles.inputAccessoryViewButtonText">{{ calculationButton }}</text>-->
      <!--                </touchable-opacity>-->
      <!--              </view>-->
      <!--            </input-accessory-view>-->
    </view>
    <view :style="styles.calculatedAmountContainer">
      <money
        :style="styles.calculatedAmountTextInput"
        :amount="valueNumber"
        convert
        approximately
      />
    </view>
  </view>
</template>

<script>
import { Platform } from 'react-native'
import constants from '@/core/support/constants'

export default {
  name: 'AmountInput',

  data () {
    return {
      calculationButtons: [
        '+',
        '-',
        '×',
        '÷',
        '='
      ]
    }
  },

  props: {
    value: {
      type: String,
      default: ''
    },

    coin: {
      type: String,
      required: true
    },
    autoFocus: {
      type: Boolean,
      default: false
    },
    focus: {
      type: Function,
      default () {
        this.$refs.amount.focus()
      }
    },
    onFocus: {
      type: Function,
      default () {}
    }
  },

  computed: {
    styles () {
      return styleStore(this.isDarkScheme)
    },

    valueNumber () {
      const value = parseFloat(this.value.replace(',', '.'))

      return parseFloat(value * constants.satoshiDivider) || 0
    }
  },

  methods: {
    onChangeText (text) {
      this.$emit('input', text)
    },

    onEndEditing (event) {
      this.$emit('on-end-editing', event)
    }
  }
}

const styleStore = (isDarkScheme) => {
  return {
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
      fontWeight: Platform.OS === 'ios' ? '900' : 'bold'
    },

    amountTextInput: {
      fontSize: 35,
      fontWeight: Platform.OS === 'ios' ? '900' : 'bold',
      padding: 0,
      paddingTop: 10,
      paddingHorizontal: 10,
      minWidth: 100,
      color: isDarkScheme ? '#6b47e1' : '#4c00ff'
    },

    inputAccessoryView: {
      backgroundColor: isDarkScheme ? 'black' : 'grey',
      flexDirection: 'row',
      paddingVertical: 5,
      paddingHorizontal: 2.5
    },

    inputAccessoryViewButton: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      backgroundColor: isDarkScheme ? 'black' : 'white',
      borderRadius: 5,
      padding: 5,
      marginHorizontal: 2.5
    },

    inputAccessoryViewButtonText: {
      fontSize: 20
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
