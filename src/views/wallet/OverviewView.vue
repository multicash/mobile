<template>
  <view :style="{ flex: 1 }">
    <status-bar bar-style="light-content" />
    <modal-navigation
      has-close-button
      @on-dismiss="navigation.goBack()"
    >
      <round-button slot="right" @on-press="navigation.navigate('settings', { walletIdentifier: wallet.identifier })">
        <icon name="ellipsis-horizontal"/>
      </round-button>
    </modal-navigation>
    <scroll-view :style="{ backgroundColor: isDarkScheme ? '#222429' : '#ededf3' }">
      <view-background v-if="wallet">
        <view :style="styles.nameContainer">
          <wallet-icon :icon="wallet.icon" :size="40"/>
          <view :style="{ marginLeft: 10 }">
            <text :style="styles.name">{{ wallet.name }}</text>
            <text :style="styles.tag">{{ wallet.tag }}</text>
          </view>
        </view>

        <view :style="styles.amountContainer">
          <money
            crypto
            :amount="wallet.totalAmount"
            :style="styles.amount"
          />
          <money
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
      marginBottom: 20,
      paddingHorizontal: 20
    },

    name: {
      color: isDarkScheme ? 'white' : 'black',
      fontWeight: 'bold',
      fontSize: 20
    },

    amountContainer: {
      backgroundColor: isDarkScheme ? '#2c2e36' : 'white',
      borderRadius: 10,
      padding: 15,
      marginBottom: 20,
      overflow: 'hidden'
    },

    amount: {
      color: isDarkScheme ? '#ffffff' : 'black',
      fontSize: 35,
      fontWeight: 'bold'
    },

    fiatAmount: {
      color: isDarkScheme ? '#a7bbc1' : '#7e97a0',
      fontSize: 15,
      fontWeight: '600'
    },

    addressTitle: {
      color: isDarkScheme ? '#ffffff' : 'black',
      fontSize: 11
    },

    tag: {
      color: isDarkScheme ? '#b95c8b' : '#931A5A',
      fontSize: 16
    },

    address: {
      fontSize: 11,
      fontWeight: 'bold',
      color: isDarkScheme ? '#6d6de3' : '#1b2483'
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
      backgroundColor: isDarkScheme ? '#191a20' : '#dfe1ee',
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
