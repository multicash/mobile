<template>
  <styled-view-background :style="styles.container">
    <view :style="styles.navigation">
      <round-button
        :style="{ marginRight: 10 }"
        transparent-shadow
        @on-press="navigation.navigate('contacts')"
      >
        <icon name="people"/>
      </round-button>
      <round-button
        transparent-shadow
        @on-press="navigation.navigate('settings')"
      >
        <icon name="toggle"/>
      </round-button>
    </view>
    <view :style="styles.logoContainer">
      <view-section :style="styles.logoSection">
        <image
          :source="require('@/assets/logo-light.png')"
          :style="styles.logoImage"
        />
      </view-section>
    </view>
    <view :style="styles.content">
      <actions-section
        v-if="wallets.length > 0"
        @pay="navigation.navigate('pay')"
        @receive="navigation.navigate('receive')"
      />
      <wallets-section
        v-if="wallets.length > 0"
        :wallets="wallets"
        @wallet-selected="navigation.navigate('wallet', { screen: 'overview', params: { wallet: arguments[0] } })"
        @order-wallets="navigation.navigate('orderWallets', { wallets })"
        @add-wallet="navigation.navigate('add')"
      />
      <scroll-view
        v-else
        :style="styles.noWalletContainer"
        :showsVerticalScrollIndicator="false"
        :contentInset="{ top: 0, left: 0, bottom: insets.bottom, right: 0 }"
      >
        <card
          :background-color="isDarkScheme ? '#2c2e36' : 'white'"
          :style="styles.noWalletCard"
        >
          <view :style="styles.noWalletContent">
            <view :style="{ flexDirection: 'row' }">
              <image :style="styles.noWalletIcon1" :source="require('@/assets/new-wallet1.png')"/>
              <image :style="styles.noWalletIcon2" :source="require('@/assets/new-wallet2.png')"/>
            </view>
            <text :style="styles.noWalletTitle">Add a MultiCash wallet</text>
            <text :style="styles.noWalletSubtitle">Add a new or an existing wallet to MultiCash and use money like it's supposed to!</text>
          </view>
          <rounded-button
            :style="{ width: '100%' }"
            icon="add"
            title="Add wallet"
            @on-press="navigation.navigate('add')"
          />
        </card>

        <notification
          icon="people"
          title="Contacts"
          label="Add MultiCash contacts to receive and send MultiCash after setting up your wallet"
          @on-press="navigation.navigate('contacts')"
          type="success"
        />

        <notification
          icon="help-buoy"
          title="Support"
          label="Do you need help or have a question? Checkout the support options for MultiCash"
          type="primary"
          @on-press="navigation.navigate('support')"
        />
      </scroll-view>
    </view>
  </styled-view-background>
</template>

<script>
import { AppState } from 'react-native'
import { mapGetters } from 'vuex'

export default {
  name: 'HomeView',

  props: {
    insets: {
      type: Object
    }
  },

  computed: {
    ...mapGetters(['wallets', 'isSetup']),

    styles () {
      return stylesStore(this.isDarkScheme, this.insets)
    }
  },

  created () {
    AppState.addEventListener('change', this.onAppStateChange)

    if (this.wallets.length > 0) {
      this.navigation.navigate('authenticate')
    }
  },

  methods: {
    onAppStateChange (state) {
      if (!this.isSetup) {
        return
      }

      switch (state) {
        case 'background':
          return this.navigation.navigate('authenticate')
        case 'inactive':
        case 'active':
        default:
      }
    }
  }
}

const stylesStore = (isDarkScheme, insets) => {
  return {
    container: {
      flexDirection: 'row'
    },

    navigation: {
      width: '100%',
      flex: 0,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      paddingTop: 10,
      paddingLeft: 30,
      paddingRight: 30,
      marginBottom: -10
    },

    logoContainer: {
      paddingLeft: 30,
      paddingRight: 30,
      paddingBottom: 10,
      paddingTop: 0
    },

    logoSection: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },

    content: {
      paddingLeft: 30,
      paddingRight: 30,
      flex: 1
    },

    logoImage: {
      resizeMode: 'contain',
      width: '100%',
      height: 50,
      marginVertical: 5
    },

    noWalletContainer: {
      flex: 1,
      marginBottom: -insets.bottom
    },

    noWalletCard: {
      flex: 1,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 10
    },

    noWalletContent: {
      flex: 1,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center'
    },

    noWalletIcon1: {
      zIndex: 10,
      width: 80,
      height: 80,
      marginTop: 0,
      marginRight: -40,
      resizeMode: 'contain'
    },

    noWalletIcon2: {
      width: 100,
      height: 100,
      resizeMode: 'contain',
      marginTop: 20,
      marginBottom: 20
    },

    noWalletTitle: {
      color: isDarkScheme ? 'white' : 'black',
      fontSize: 24,
      fontWeight: '600',
      textAlign: 'center',
      marginBottom: 5
    },

    noWalletSubtitle: {
      color: isDarkScheme ? '#c2c2c2' : '#5e5e5e',
      textAlign: 'center',
      marginBottom: 20
    }
  }
}

</script>
