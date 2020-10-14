<template>
  <styled-view-background :style="styles.container">
    <view :style="styles.navigation">
      <round-button
        :style="{ marginRight: 10 }"
        transparent-shadow
        @on-press="navigation.navigate('contacts')"
        @on-long-press="updateIsAuthenticated(false)"
      >
        <icon name="people"/>
      </round-button>
      <round-button
        transparent-shadow
        @on-press="navigation.navigate('settings')"
        @on-long-press="updateIsAuthenticated(false) && updateIsSetup(false)"
      >
        <icon name="toggle"/>
      </round-button>
    </view>
    <view :style="styles.content">
      <view-section :style="styles.logoSection">
        <image
          :source="require('../assets/logo-light.png')"
          :style="styles.logoImage"
        />
      </view-section>
      <actions-section
        @pay="navigation.navigate('pay')"
        @receive="navigation.navigate('receive')"
      />
      <wallets-section
        :wallets="wallets"
        @wallet-selected="navigation.navigate('wallet', { screen: 'overview', params: { wallet: arguments[0] } })"
        @order-wallets="navigation.navigate('orderWallets', { wallets })"
        @add-wallet="navigation.navigate('add')"
      />
    </view>
  </styled-view-background>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'HomeView',

  data () {
    return {
      wallets: [
        {
          name: 'Main Account',
          amount: 10505.44,
          icon: 'wallet',
          tag: '@SwenVanZanten',
          address: 'M6NYsdntCHYDv6X6uGzgEChnoQruHBR1De'
        },
        {
          name: 'Savings Account',
          amount: 1430705.78,
          icon: 'gift',
          tag: '@SwenSaving',
          address: 'M6NYsdntCHYDv6X6uGzgEChnoQruHBR1De'
        }
      ]
    }
  },

  computed: {
    styles () {
      return stylesStore(this.isDarkScheme)
    }
  },

  methods: {
    ...mapActions(['updateIsAuthenticated', 'updateIsSetup'])
  }
}

const stylesStore = (isDarkScheme) => {
  return {
    container: {
      flexDirection: 'row'
    },

    navigation: {
      flex: 0,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      paddingTop: 10,
      paddingLeft: 30,
      paddingRight: 30,
      marginBottom: -10
    },

    content: {
      display: 'flex',
      backgroundColor: 'transparent',
      paddingLeft: 30,
      paddingRight: 30,
      paddingBottom: 10,
      paddingTop: 0,
      flex: 1
    },

    logoSection: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },

    logoImage: {
      resizeMode: 'contain',
      height: 50,
      marginVertical: 5,
      width: '100%'
    }
  }
}

</script>
