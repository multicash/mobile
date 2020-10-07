<template>
  <view :style="{ flex: 1 }">
    <status-bar bar-style="light-content" />
    <modal-navigation
      has-close-button
      @on-dismiss="navigation.goBack()"
    >
      <round-button slot="right" @on-press="navigation.navigate('settings', { wallet })">
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
            <text :style="styles.address">{{ wallet.address }}</text>
          </view>
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
          <rounded-button
            title="Pay"
            icon="caret-up-outline"
            :style="{ flex: 1 }"
            @on-press="navigation.navigate('pay', { screen: 'amount', params: { wallet: wallet }})"
          />
          <rounded-button
            title="Receive"
            icon="caret-down-outline"
            :style="{ marginLeft: 10, flex: 1 }"
            @on-press="navigation.navigate('receive', { screen: 'amount', params: { wallet: wallet }})"
          />
        </view>

        <text :style="styles.transactionsTitle">Last transactions</text>
        <view :style="styles.transactionsContainer">
          <view
            v-for="transaction in transactions"
            :key="JSON.stringify(transaction)"
          >
            <touchable-opacity
              :style="styles.item"
              :active-opacity="0.6"
              :on-press="() => navigation.navigate('transaction', { transaction })"
            >
              <view :style="styles.itemAvatar">
                <icon
                  v-if="transaction.icon"
                  :name="transaction.icon"
                  :color="transaction.color"
                  :size="40"
                />
                <wallet-icon
                  v-if="transaction.avatar"
                  :icon="transaction.avatar"
                  :size="40"
                />
              </view>
              <view :style="styles.itemTextContainer">
                <text
                  :style="styles.itemTitle"
                  :numberOfLines="1"
                  ellipsizeMode="middle"
                >
                  {{ transaction.title }}
                </text>
                <text :style="styles.itemSubtitle">{{ transaction.subtitle }}</text>
              </view>
              <money
                :amount="transaction.amount"
                crypto
                currency=""
                :style="styles.itemAmount"
              />
            </touchable-opacity>
          </view>
        </view>
      </view-background>
    </scroll-view>
  </view>
</template>

<script>
import { subtitle, text } from '@/styles'
import ModalNavigation from '@/components/ModalNavigation'
import RoundedButton from '@/components/RoundedButton'
import ViewBackground from '@/components/ViewBackground'
import WalletIcon from '@/components/WalletIcon'
import Money from '@/components/Money'
import RoundButton from '@/components/RoundButton'

export default {
  name: 'OverviewView',

  components: {
    RoundButton,
    Money,
    WalletIcon,
    ViewBackground,
    RoundedButton,
    ModalNavigation
  },

  data () {
    return {
      transactions: [
        {
          title: '@sunerok',
          subtitle: 'Yesterday 9:40',
          amount: -33550000,
          icon: 'person-circle',
          color: '#00ffb2'
        },
        {
          title: 'Savings Account',
          subtitle: 'Received payment',
          amount: 2050450000,
          avatar: 'gift'
        },
        {
          title: '@swenvanzanten',
          subtitle: 'June 4th, 2020 10:23',
          amount: -94000000,
          icon: 'person-circle',
          color: '#c807a9'
        },
        {
          title: 'DNc3MivQfEqhxY9bRm8jw89Koa2jQ7dqTG',
          subtitle: 'May 28th, 2020 23:49',
          amount: -203440000,
          icon: 'help-circle',
          color: '#887d87'
        },
        {
          title: 'Savings Account',
          subtitle: 'Received payment',
          amount: 1299000000,
          avatar: 'gift'
        }
      ]
    }
  },

  computed: {
    styles () {
      return stylesStore(this.isDarkScheme)
    },

    wallet () {
      if (!(this.route.params && this.route.params.wallet)) {
        return null
      }

      return this.route.params.wallet
    }
  },

  methods: {
    onPress (transaction) {
      alert(transaction.title)
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
      color: isDarkScheme ? '#b95c8b' : '#931A5A',
      fontSize: 15,
      fontWeight: '600'
    },

    addressTitle: {
      color: isDarkScheme ? '#ffffff' : 'black',
      fontSize: 11
    },

    tag: {
      color: isDarkScheme ? '#ffffff' : 'black'
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

    transactionsTitle: {
      color: isDarkScheme ? 'white' : 'black',
      fontWeight: 'bold',
      marginBottom: 10
    },

    transactionsContainer: {
      backgroundColor: isDarkScheme ? '#191a20' : '#dfe1ee', // #dfe1ee
      borderRadius: 15,
      overflow: 'hidden',
      marginBottom: 20,
      paddingHorizontal: 10,
      paddingTop: 10,
      paddingBottom: 5
    },

    item: {
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 10,
      marginBottom: 5,
      backgroundColor: isDarkScheme ? '#2c2e36' : '#ffffff',
      padding: 15
    },

    itemAvatar: {
      width: 40,
      height: 40,
      marginRight: 10
    },

    itemTextContainer: {
      flex: 1,
      marginRight: 10
    },

    itemTitle: {
      color: text(isDarkScheme).color,
      fontSize: 16,
      marginBottom: 2
    },

    itemSubtitle: {
      color: subtitle(isDarkScheme).color,
      fontSize: 13
    },

    itemAmount: {
      fontWeight: 'bold',
      color: isDarkScheme ? '#b95c8b' : '#931A5A'
    }
  }
}
</script>
