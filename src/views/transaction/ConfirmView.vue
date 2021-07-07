<!--MultiCash Mobile-->
<!--Copyright (C) 2021  MultiCash Developers-->

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
  <modal-view
    :title="transaction.isReceive ? 'New request' : 'New payment'"
    :has-back-button="!payLink"
    :has-close-button="payLink"
    @on-dismiss="navigation.goBack()"
    scrollable
  >
    <keyboard-avoiding-view>
      <view :style="styles.headerContainer">
        <source-icon
          v-if="transaction.from"
          :transaction-icon="transaction.fromIcon"
          @on-press="selectFromWallet(transaction.from)"
        />
        <icon
          name="arrow-forward-outline"
          :size="50"
        />
        <source-icon
          v-if="transaction.to"
          :transaction-icon="transaction.toIcon"
          @on-press="selectToWallet(transaction.to)"
        />
      </view>

      <view :style="styles.amountContainer">
        <money
          crypto
          :currency="transaction.isReceive ? transaction.to.coin : transaction.from.coin"
          :amount="transaction.amount * 100000000"
          :style="styles.amount"
        />
        <money
          convert
          approximately
          :amount="(transaction.amount * 100000000) || 0"
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
        :title="transaction.isReceive && !transaction.to.walletIdentifier ? 'Share request' : 'Send payment'"
        :style="styles.sendPaymentButton"
        @on-press="proceed"
      />

      <rounded-text-input
        title="Description"
        placeholder="Why this payment?"
        :value="transaction.label"
        @input="transaction.label = $event"
      />
    </keyboard-avoiding-view>
  </modal-view>
</template>

<script>
import Constants from '@/core/support/constants'
import { Platform, Share } from 'react-native'
import Wallet from '@/core/wallet/Wallet'
import Contact from '@/core/contacts/models/Contact'
import UUID from '@/core/support/UUID'
import { encode } from 'html-entities'

export default {
  name: 'ConfirmView',

  data () {
    return {
      id: '',
      transaction: null,
      payLink: false,
      walletIdentifier: null
    }
  },

  computed: {
    styles () {
      return stylesStore(this.isDarkScheme, this.notEnoughBalance)
    },

    notEnoughBalance () {
      const fromWalletIdentifier = this.transaction.from.identifier || null

      if (!fromWalletIdentifier) {
        return false
      }

      const fromWallet = this.$walletManager.getWallet(fromWalletIdentifier)

      if (!fromWallet) {
        return false
      }

      return fromWallet.totalAmount < (this.transaction.amount * Constants.satoshiDivider)
    }
  },

  created () {
    this.id = UUID.create()
    this.transaction = this.route.params.transaction
    this.payLink = this.route.params.payLink || false
    this.walletIdentifier = this.route.params.walletIdentifier || null
  },

  methods: {
    selectFromWallet (from: Wallet|Contact) {
      this.selectWallet(from).then(wallet => {
        this.transaction.from = wallet
      })
    },

    selectToWallet (to: Wallet|Contact) {
      this.selectWallet(to).then(wallet => {
        this.transaction.to = wallet
      })
    },

    async selectWallet (source: Wallet|Contact): Promise<Wallet|Contact> {
      return new Promise((resolve, reject) => {
        if (!(source instanceof Wallet)) {
          resolve(source)

          return
        }

        const unsubscribe = this.navigation.addListener('focus', () => {
          if (this.route.params.sourceWallet) {
            this.navigation.removeListener('focus', unsubscribe)

            resolve(this.route.params.sourceWallet)
          } else {
            reject(new Error('No wallet selected'))
          }
        })

        this.navigation.navigate('wallets', {
          goBack: true,
          returnView: 'confirm'
        })
      })
    },

    proceed () {
      if (this.transaction.isReceive) {
        if (this.transaction.from instanceof Wallet) {
          return this.navigation.navigate('paying', {
            payLink: this.payLink,
            transaction: this.transaction,
            walletIdentifier: this.walletIdentifier
          })
        }

        const wallet = this.$walletManager.getWallet(this.transaction.to.identifier)
        const amount = this.getFormattedCrypto(this.transaction.amount, 'MCX')
        let url = `${Constants.payLink}/?id=${this.id}&address=${wallet.address}&tag=${wallet.tag}&amount=${this.transaction.amount}`

        if (this.transaction.label !== '' && this.transaction.label !== null) {
          url += '&label=' + encode(this.transaction.label)
        }

        Share.share({
          message: `${encodeURI(url)}\n\nWould you like to pay me ${amount}`
        }).then(() => {
          this.navigation.navigate(this.walletIdentifier ? 'wallet' : 'home')
        })
      } else {
        this.navigation.navigate('paying', {
          payLink: this.payLink,
          walletIdentifier: this.walletIdentifier,
          transaction: this.transaction
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
      color: notEnoughBalance ? (isDarkScheme ? '#585858' : '#868686') : (isDarkScheme ? '#B95C8B' : '#931A5A'),
      fontWeight: Platform.OS === 'ios' ? '900' : 'bold'
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
