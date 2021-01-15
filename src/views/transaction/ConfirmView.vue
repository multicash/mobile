<template>
  <view :style="{ flex: 1 }">
    <modal-navigation
      :title="isReceive ? 'New request' : 'New payment'"
      :has-back-button="!payLink"
      :has-close-button="payLink"
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
          @on-press="selectSourceWallet"
        />
        <icon
          :name="isReceive ? 'arrow-back-outline' : 'arrow-forward-outline'"
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
          :amount="amount * 100000000"
          :style="styles.amount"
        />
        <money
          convert
          :amount="(amount * 100000000) || 0"
          :style="styles.calculatedAmount"
        />
        <text
          v-if="notEnoughBalance"
          :style="styles.notEnoughBalanceText">
          Not enough balance
        </text>
      </view>

      <rounded-button
        :disabled="notEnoughBalance"
        :title="isReceive && !target.walletIdentifier ? 'Share request' : 'Send payment'"
        :style="styles.sendPaymentButton"
        @on-press="proceed"
      />

      <rounded-text-input
        title="Description"
        placeholder="Why this payment?"
        :value="label"
        @input="label = $event"
      />
    </view-background>
  </view>
</template>

<script>
import Constants from '@/support/constants'
import Locale from '@/support/locale'
import { Share } from 'react-native'

export default {
  name: 'ConfirmView',

  data () {
    return {
      payLink: false,
      isReceive: false,
      walletIdentifier: null,
      amount: 0,
      label: '',
      source: {},
      target: {}
    }
  },

  computed: {
    styles () {
      return stylesStore(this.isDarkScheme, this.notEnoughBalance)
    },

    notEnoughBalance () {
      return this.source.amount < (this.amount * Constants.satoshiDivider)
    }
  },

  created () {
    this.payLink = this.route.params.payLink || false
    this.isReceive = this.route.params.isReceive || false
    this.walletIdentifier = this.route.params.walletIdentifier || null
    this.amount = this.route.params.amount
    this.label = this.route.params.label || ''
    this.source = this.route.params.source
    this.target = this.route.params.target
  },

  methods: {
    selectSourceWallet () {
      const unsubscribe = this.navigation.addListener('focus', () => {
        if (this.route.params.sourceWallet) {
          this.source.walletIdentifier = this.route.params.sourceWallet.identifier
          this.source.title = this.route.params.sourceWallet.name
          this.source.amount = this.route.params.sourceWallet.info.balance.totalAmount
          this.source.image = this.route.params.sourceWallet.icon

          this.navigation.removeListener('focus', unsubscribe)
        }
      })

      this.navigation.navigate('wallets', {
        goBack: true,
        returnView: 'confirm'
      })
    },

    proceed () {
      if (this.isReceive) {
        if (this.target.walletIdentifier) {
          return this.navigation.navigate('paying', {
            payLink: this.payLink,
            isReceive: this.isReceive,
            walletIdentifier: this.walletIdentifier,
            amount: this.amount,
            source: this.source,
            target: this.target
          })
        }

        const wallet = this.$walletManager.getWallet(this.source.walletIdentifier)
        const amount = this.getFormattedCrypto(this.amount, Locale.getCurrentLocale(), 'MCX')
        let url = `https://multicash.io/pay/${wallet.address}?tag=${wallet.tag}&amount=${this.amount}`

        if (this.label !== '') {
          url += '&label=' + this.label
        }

        Share.share({
          message: `Would you like to pay me ${amount}: ${url}`
        }).then(() => {
          this.navigation.navigate(this.walletIdentifier ? 'wallet' : 'home')
        })
      } else {
        this.navigation.navigate('paying', {
          payLink: this.payLink,
          isReceive: this.isReceive,
          walletIdentifier: this.walletIdentifier,
          amount: this.amount,
          source: this.source,
          target: this.target
        })
      }
    }
  }
}

const stylesStore = (isDarkScheme, notEnoughBalance) => {
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
      color: notEnoughBalance ? (isDarkScheme ? '#585858' : '#868686') : '#a014c1',
      fontWeight: '600'
    },

    calculatedAmount: {
      color: isDarkScheme
        ? (notEnoughBalance ? '#3d3d3d' : '#8374b2')
        : (notEnoughBalance ? '#868686' : '#4d3f70'),
      fontSize: 20,
      fontWeight: 'bold'
    },

    notEnoughBalanceText: {
      color: '#c90c0c'
    },

    sendPaymentButton: {
      width: '100%',
      marginBottom: 10
    }
  }
}
</script>
