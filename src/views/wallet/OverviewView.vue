<template>
  <view v-if="wallet" :style="{ flex: 1 }">
    <status-bar bar-style="light-content" />
    <modal-navigation
      :title="wallet.name"
      small-title
      has-close-button
      @on-dismiss="navigation.goBack()"
    >
      <round-button slot="right" @on-press="navigation.navigate('settings', { walletIdentifier: wallet.identifier })">
        <icon name="ellipsis-horizontal"/>
      </round-button>
    </modal-navigation>
    <scroll-view :style="{ backgroundColor: isDarkScheme ? '#222429' : '#ededf3' }">
      <view-background>
        <view :style="styles.amountContainer">
          <view :style="styles.nameContainer">
            <wallet-icon :icon="wallet.icon" :size="40"/>
            <view :style="{ marginLeft: 10 }">
              <text
                :style="styles.tag"
                :minimumFontScale="0.01"
                :adjustsFontSizeToFit="true"
                :numberOfLines="1"
              >{{ wallet.tag }}</text>
            </view>
          </view>
          <money
            crypto
            :amount="wallet.totalAmount"
            :style="styles.amount"
          />
          <money
            approximately
            convert
            :amount="wallet.totalAmount"
            :style="styles.fiatAmount"
          />
        </view>

        <view :style="styles.actionsContainer">
          <rounded-button
            title="Pay"
            icon="caret-up-outline"
            :style="{ flex: 1 }"
            @on-press="navigation.navigate('pay', { screen: 'amount', params: { walletIdentifier: wallet.identifier }})"
          />
          <rounded-button
            title="Receive"
            icon="caret-down-outline"
            :style="{ marginLeft: 10, flex: 1 }"
            @on-press="navigation.navigate('receive', { screen: 'amount', params: { walletIdentifier: wallet.identifier }})"
          />
        </view>

        <text :style="styles.sectionTitle">Last transactions</text>
        <transactions-container
          :style="styles.sectionContainer"
          :transactions="transactions"
          @on-press="navigation.navigate('transaction', { transaction: $event })"
        />

        <text :style="styles.sectionTitle">Addresses</text>
        <addresses-container
          :style="styles.sectionContainer"
        />
      </view-background>
    </scroll-view>
  </view>
</template>

<script>
import Transactions from '@/assets/examples/transactions'
import TransactionsContainer from '@/components/views/TransactionsContainer'
import AddressesContainer from '@/components/views/AddressesContainer'
import { mapGetters } from 'vuex'
import { cards } from '@/core/support/styles'

export default {
  name: 'OverviewView',

  components: { AddressesContainer, TransactionsContainer },

  data () {
    return {
      transactions: []
    }
  },

  computed: {
    ...mapGetters(['getDefaultWallet']),

    styles () {
      return stylesStore(this.isDarkScheme)
    }
  },

  created () {
    if (this.getDefaultWallet === this.wallet.identifier) {
      this.transactions = Transactions
    }
  }
}

const stylesStore = (isDarkScheme) => {
  return {
    nameContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 5,
      paddingHorizontal: 0
    },

    tag: {
      color: isDarkScheme ? '#B95C8B' : '#931A5A',
      fontWeight: 'bold',
      fontSize: 25
    },

    amountContainer: {
      ...cards(isDarkScheme),
      backgroundColor: isDarkScheme ? '#2C2E36' : 'white',
      marginBottom: 20,
      overflow: 'hidden'
    },

    amount: {
      color: isDarkScheme ? '#FFFFFF' : 'black',
      fontSize: 25,
      fontWeight: 'bold'
    },

    fiatAmount: {
      color: isDarkScheme ? '#A7BBC1' : '#7e97a0',
      fontSize: 15,
      fontWeight: '600'
    },

    addressTitle: {
      color: isDarkScheme ? '#FFFFFF' : 'black',
      fontSize: 11
    },

    actionsContainer: {
      flexDirection: 'row',
      marginBottom: 20
    },

    sectionTitle: {
      color: isDarkScheme ? 'white' : 'black',
      fontWeight: 'bold',
      marginBottom: 10
    },

    sectionContainer: {
      backgroundColor: isDarkScheme ? '#191A20' : '#DFE1EE',
      borderRadius: 15,
      overflow: 'hidden',
      marginBottom: 20,
      paddingHorizontal: 10,
      paddingTop: 10,
      paddingBottom: 5
    }
  }
}
</script>
