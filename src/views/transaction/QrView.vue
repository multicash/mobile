<template>
  <view :style="{ flex: 1 }">
    <status-bar bar-style="light-content" />
    <modal-navigation
      title="Share QR"
      has-back-button
      @on-dismiss="navigation.goBack()"
    />
    <view-background>

      <view v-if="targetWallet" :style="styles.sourceContainer">
        <selector
          name="Receiving wallet"
          :value="targetWallet.name"
          @on-press="selectSourceWallet"
        />
      </view>

      <view :style="styles.variablesContainer">
        <rounded-text-input
          title="Description"
          placeholder="Why this payment?"
          :value="label"
          @input="label = $event"
        />
      </view>

      <view :style="styles.qrCodeContainer">
        <view :style="styles.qrCodeBox">
          <view :style="styles.qrCode">
            <qr-code
              :value="qrValue"
              color="#522cdb"
              :size="200"
            />
          </view>
        </view>
      </view>

      <view :style="styles.amountContainer">
        <money
          crypto
          :amount="route.params.transaction.amount * 100000000"
          :style="styles.amount"
        />
        <money
          convert
          :amount="parseFloat(route.params.transaction.amount) * 100000000 || 0"
          :style="styles.calculatedAmount"
        />
      </view>

      <rounded-button
        title="Share"
        icon="share-outline"
        :style="styles.shareButton"
        @on-press="showShareSheet"
      />

    </view-background>
  </view>
</template>

<script>
import { Share } from 'react-native'
import Locale from '@/core/support/locale'
import Constants from '@/core/support/constants'

export default {
  name: 'QrView',

  data () {
    return {
      targetWallet: null,
      label: ''
    }
  },

  computed: {
    styles () {
      return stylesStore(this.isDarkScheme)
    },

    qrValue () {
      let value = `${Constants.payLink}/${this.targetWallet.address}?tag=${this.targetWallet.tag}&amount=${this.route.params.transaction.amount}`

      if (this.label !== '') {
        value += '&label=' + this.label
      }

      return value
    }
  },

  created () {
    this.targetWallet = this.$walletManager.getWallet(this.route.params.transaction.to.identifier)
  },

  methods: {
    selectSourceWallet () {
      const unsubscribe = this.navigation.addListener('focus', () => {
        if (this.route.params.sourceWallet) {
          this.targetWallet = this.route.params.sourceWallet
          this.navigation.removeListener('focus', unsubscribe)
        }
      })

      this.navigation.navigate('wallets', {
        goBack: true,
        returnView: 'qr'
      })
    },

    showShareSheet () {
      const amount = this.getFormattedCrypto(this.route.params.transaction.amount, Locale.getCurrentLocale(), 'MCX')

      Share.share({
        message: `Would you like to pay me ${amount}: ${this.qrValue}`
      })
    }
  }
}

const stylesStore = (isDarkScheme) => {
  return {

    sourceContainer: {
      marginBottom: 10
    },

    qrCodeContainer: {
      alignItems: 'center'
    },

    qrCodeBox: {
      backgroundColor: isDarkScheme ? 'black' : 'white',
      padding: 10,
      borderRadius: 20,
      shadowColor: isDarkScheme ? 'black' : '#c0c0ff',
      shadowRadius: 3,
      shadowOpacity: 0.5,
      shadowOffset: { width: 3, height: 3 },
      elevation: 10
    },

    qrCode: {
      borderRadius: 10,
      overflow: 'hidden',
      width: 200
    },

    amountContainer: {
      marginVertical: 30,
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

    variablesContainer: {
      marginBottom: 30
    },

    shareButton: {
      height: 50,
      width: '100%'
    }
  }
}
</script>
