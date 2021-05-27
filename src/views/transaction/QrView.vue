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
          name="Receiving account"
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
        type="primary"
        :style="styles.shareButton"
        @on-press="showShareSheet"
      />

    </view-background>
  </view>
</template>

<script>
import { Share } from 'react-native'
import Constants from '@/core/support/constants'
import UUID from '@/core/support/UUID'
import { encode } from 'html-entities'

export default {
  name: 'QrView',

  data () {
    return {
      id: '',
      targetWallet: null,
      label: ''
    }
  },

  computed: {
    styles () {
      return stylesStore(this.isDarkScheme)
    },

    qrValue () {
      let value = `${Constants.payLink}/?id=${this.id}&address=${this.targetWallet.address}&tag=${this.targetWallet.tag}&amount=${this.route.params.transaction.amount}`

      if (this.label !== '') {
        value += '&label=' + encode(this.label)
      }

      return encodeURI(value)
    }
  },

  created () {
    this.id = UUID.create()
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
      const amount = this.getFormattedCrypto(this.route.params.transaction.amount, 'MCX')

      Share.share({
        message: `${this.qrValue}\n\nWould you like to pay me ${amount}`
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
      color: isDarkScheme ? '#B95C8B' : '#931A5A',
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
