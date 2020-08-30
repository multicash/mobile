<template>
  <view :style="{ flex: 1 }">
    <status-bar bar-style="light-content" />
    <modal-navigation
      has-close-button
      @on-dismiss="$parent.$emit('update:visible', false)"
    />
    <view-background>
      <view :style="styles.nameContainer">
        <wallet-icon :icon="wallet.icon" :size="60"/>
        <text :style="styles.name">{{ wallet.name }}</text>
      </view>

      <view :style="styles.amountContainer">
        <money
          crypto
          :amount="wallet.amount * 1000000"
          :style="styles.amount"
        />
        <money
          convert
          :amount="wallet.amount"
          :style="styles.fiatAmount"
        />
      </view>

      <view :style="styles.actionsContainer">
        <rounded-button title="Pay" :style="{ flex: 1 }"/>
        <rounded-button title="Receive" :style="{ marginLeft: 10, flex: 1 }"/>
      </view>

      <text :style="styles.transactionsTitle">Transactions</text>
      <view :style="styles.transactionsContainer">
        <table-view :sections="transactions" :grouped="false"/>
      </view>
    </view-background>
  </view>
</template>

<script>
import ModalNavigation from '@/components/ModalNavigation'
import RoundedButton from '@/components/RoundedButton'
import ViewBackground from '@/components/ViewBackground'
import WalletIcon from '@/components/WalletIcon'
import Money from '@/components/Money'
import TableView from '@/components/TableView'

export default {
  name: 'WalletView',

  components: { TableView, Money, WalletIcon, ViewBackground, RoundedButton, ModalNavigation },

  data () {
    return {
      transactions: [
        {
          title: '2020-01-02 12:00:00',
          data: [
            {
              title: 'Transaction 3'
            }
          ]
        },
        {
          title: '2020-01-01 12:00:00',
          data: [
            {
              title: 'Transaction 2'
            },
            {
              title: 'Transaction 1'
            }
          ]
        }
      ]
    }
  },

  props: {
    wallet: {
      type: Object,
      required: true
    }
  },

  computed: {
    styles () {
      return stylesStore(this.isDarkScheme)
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
      fontSize: 25,
      marginLeft: 10
    },

    amountContainer: {
      backgroundColor: isDarkScheme ? '#2c2e36' : 'white',
      borderRadius: 10,
      padding: 20,
      marginBottom: 20
    },

    amount: {
      color: isDarkScheme ? '#ffffff' : 'black',
      fontSize: 35,
      fontWeight: 'bold'
    },

    fiatAmount: {
      color: isDarkScheme ? '#b95c8b' : '#931A5A',
      fontSize: 15,
      fontWeight: '600'
    },

    actionsContainer: {
      flexDirection: 'row',
      marginBottom: 20
    },

    transactionsTitle: {
      color: isDarkScheme ? 'white' : 'black',
      fontWeight: 'bold',
      marginBottom: 10
    },

    transactionsContainer: {
      flex: 1,
      backgroundColor: 'white',
      borderRadius: 10,
      overflow: 'hidden',
      marginBottom: 20
    }
  }
}
</script>
