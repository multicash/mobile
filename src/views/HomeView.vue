<template>
  <view :style="styles.container">
    <status-bar bar-style="light-content" />
    <safe-area-view :style="styles.safeArea">
      <app-header-view :insets="insets" :expand="hasWallets">
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
            <icon name="cog-outline"/>
          </round-button>
        </view>
        <total-amount-section v-if="hasWallets" />
      </app-header-view>
      <view :style="styles.content">
        <wallets-section
          v-if="hasWallets"
          @wallet-selected="navigation.navigate('wallet', { screen: 'overview', params: { walletIdentifier: arguments[0].identifier } })"
          @order-wallets="navigation.navigate('orderWallets')"
          @add-wallet="navigation.navigate('add')"
        />
        <actions-section
          v-if="hasWallets"
          @pay="navigation.navigate('pay')"
          @receive="navigation.navigate('receive')"
          @scanQR="navigation.navigate('scanQR')"
          @scanNFC="scanNFC"
        />
        <scroll-view
          v-else
          :style="styles.noWalletContainer"
          :showsVerticalScrollIndicator="false"
          :contentInset="{ top: 0, left: 0, bottom: insets.bottom || 0, right: 0 }"
        >
          <card
            :background-color="isDarkScheme ? '#2c2e36' : 'white'"
            :style="styles.noWalletCard"
          >
            <view :style="styles.noWalletContent">
              <view :style="{ flexDirection: 'row' }">
                <image :style="styles.noWalletIcon1" :source="require('@/assets/new.png')"/>
                <image :style="styles.noWalletIcon2" :source="require('@/assets/coin-wallet.png')"/>
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
            :image="require('@/assets/contact-book.png')"
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
    </safe-area-view>
    <view v-if="showLoadingHideContainer" :style="styles.loadingHideContainer" />
  </view>
</template>

<script>
import { SafeAreaView } from 'react-native-safe-area-context'
import { AppState, Linking } from 'react-native'
import { mapActions, mapGetters } from 'vuex'
import ManagerConfig from '@/core/wallet/ManagerConfig.ts'
import AppHeaderView from '@/components/views/AppHeaderView'
import PayLinkParser from '@/core/transaction/PayLinkParser'

const Log = global.Logger.extend('APP')

export default {
  name: 'HomeView',

  components: {
    AppHeaderView,
    SafeAreaView
  },

  data () {
    return {
      showLoadingHideContainer: false,
      receivedDeepLink: null
    }
  },

  props: {
    insets: {
      type: Object
    }
  },

  computed: {
    ...mapGetters(['wallets', 'hasWallets', 'isSetup']),

    styles () {
      return stylesStore(this.isDarkScheme, this.insets, this.hasWallets)
    }
  },

  created () {
    if (this.hasWallets) {
      this.showLoadingHideContainer = true

      setTimeout(() => {
        this.$authManager.setNavigationComponent(this.navigation)
        this.$authManager.authenticate('app')
        this.showLoadingHideContainer = false

        Linking.getInitialURL().then(url => {
          Log.info(`Received pay link: ${url}`)

          this.receivedDeepLink = url
        })
      }, 250)

      this.$eventBus.$on('authenticated', () => {
        if (this.receivedDeepLink) {
          this.openPayment(this.receivedDeepLink, 'qr-code', '#3edd8a')

          this.receivedDeepLink = null
        }
      })

      Linking.addEventListener('url', ({ url }) => {
        Log.info(`Received pay link: ${url}`)

        this.receivedDeepLink = url
      })
    }

    AppState.addEventListener('change', this.onAppStateChange)

    this.$walletManager.boot(new ManagerConfig(this.wallets)).then(() => {
      this.$forceUpdate()
    })
  },

  methods: {
    ...mapActions(['startNfcTagReader']),

    onAppStateChange (state) {
      if (!this.isSetup) {
        return
      }

      Log.info(`State changed: ${state}`)

      switch (state) {
        case 'background':
          return this.$authManager.authenticate('app')
        case 'inactive':
        case 'active':
        default:
      }
    },

    async scanNFC () {
      this.startNfcTagReader().then(tag => {
        this.openPayment(tag, 'pricetags', '#0027da')
      })
    },

    openPayment (url, icon, color) {
      const payLink = new PayLinkParser(url)
      const sourceWallet = this.$walletManager.getWallet(this.getDefaultWallet) || this.$walletManager.defaultWallet()

      this.navigation.navigate('pay', {
        screen: 'confirm',
        params: payLink.getPayParamsWithSource(sourceWallet, icon, color)
      })
    }
  }
}

const stylesStore = (isDarkScheme, insets, expand) => {
  return {
    container: {
      flexDirection: 'row',
      backgroundColor: isDarkScheme ? '#0f0f11' : '#e8e8f3',
      flex: 1
    },

    safeArea: {
      backgroundColor: 'transparent',
      flex: 1
    },

    navigation: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      paddingTop: 10,
      paddingLeft: 30,
      paddingRight: 30
    },

    content: {
      flex: expand ? undefined : 1,
      paddingLeft: 30,
      paddingRight: 30
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
      marginBottom: 10,
      marginTop: 20
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
      fontWeight: '900',
      textAlign: 'center',
      marginBottom: 5
    },

    noWalletSubtitle: {
      color: isDarkScheme ? '#c2c2c2' : '#5e5e5e',
      textAlign: 'center',
      marginBottom: 20
    },

    loadingHideContainer: {
      backgroundColor: isDarkScheme ? '#222429' : '#ededf3',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }
  }
}

</script>
