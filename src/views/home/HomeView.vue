<template>
  <view :style="styles.container">
    <status-bar :bar-style="hasWallets ? 'light-content' : (isDarkScheme ? 'light-content' : 'dark-content')" />
    <safe-area-view :style="styles.safeArea">
      <app-header-view
        :insets="insets"
        :expand="hasWallets"
        :colors-background="hasWallets"
      >
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
          @topUp="navigation.navigate('topUp')"
          @invest="navigation.navigate('invest')"
          @change="notImplemented"
          @scanQR="navigation.navigate('scanQR')"
          @scanNFC="scanNFC"
        />
        <scroll-view
          v-else
          :style="styles.noWalletContainer"
          :contentContainerStyle="styles.noWalletContentContainer"
          :showsVerticalScrollIndicator="false"
          :contentInset="{ top: 0, left: 0, bottom: insets.bottom || 0, right: 0 }"
        >
          <header-view
            title="Welcome To MultiCash"
            subtitle="Below you'll find a few options to start with the MultiCash application!"
            :image-background="require('@/assets/coins/MCX.png')"
          />
          <card
            :background-color="isDarkScheme ? '#2c2e36' : 'white'"
            :style="styles.noWalletCard"
          >
            <header-view
              :image-foreground="require('@/assets/new.png')"
              :image-background="require('@/assets/coin-wallet.png')"
              title="Add a MultiCash account"
              subtitle="Add a new or an existing account to MultiCash and use money like it's supposed to!"
            />
            <notification
              type="warning"
              title="Limited Offer!"
              label="Get 10 MCX for free when creating a new MCX account right now!"
            />
            <rounded-button
              :style="{ width: '100%' }"
              icon="add"
              title="Add account"
              type="primary"
              @on-press="navigation.navigate('add')"
            />
          </card>

          <notification
            :image="require('@/assets/contact-book.png')"
            title="Contacts"
            label="Add MultiCash contacts to receive and send MultiCash after setting up your account"
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
    <view
      v-if="showLoadingHideContainer"
      :style="styles.loadingHideContainer"
    >
      <colors-background />
      <image
        :style="styles.logo"
        :source="require('@/assets/logo-light.png')"
      />
    </view>
  </view>
</template>

<script>
import { SafeAreaView } from 'react-native-safe-area-context'
import { Alert, AppState, Linking } from 'react-native'
import RNBootSplash from 'react-native-bootsplash'
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
        this.$authManager.authenticate('app').then(() => {
          this.showLoadingHideContainer = false
        })

        Linking.getInitialURL().then(url => {
          Log.info(`Received pay link: ${url}`)

          this.receivedDeepLink = url
        })

        RNBootSplash.hide({ fade: true })
      }, 250)

      this.$eventBus.$on('authenticated', () => {
        if (this.receivedDeepLink) {
          this.openPayment(this.receivedDeepLink, 'qr-code', '#3edd8a')

          this.receivedDeepLink = null
        } else {
          // Check for announcements
          this.hasAnnouncement('home').then(hasAnnouncement => {
            if (hasAnnouncement) {
              this.navigation.navigate('whatsNew')
            }
          })
        }
      })

      Linking.addEventListener('url', ({ url }) => {
        Log.info(`Received pay link: ${url}`)

        this.receivedDeepLink = url
      })
    } else {
      RNBootSplash.hide({ fade: true })
    }

    AppState.addEventListener('change', this.onAppStateChange)

    this.$walletManager.boot(new ManagerConfig(this.wallets)).then(() => {
      this.$forceUpdate()
    })
  },

  methods: {
    ...mapActions(['startNfcTagReader', 'hasAnnouncement']),

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
        this.openPayment(tag, 'pricetags', '#F14668')
      })
    },

    openPayment (url, icon, color) {
      const payLink = new PayLinkParser(url)
      const sourceWallet = this.$walletManager.getWallet(this.getDefaultWallet) || this.$walletManager.defaultWallet()

      this.navigation.navigate('pay', {
        screen: 'confirm',
        params: payLink.getPayParamsWithSource(sourceWallet, icon, color)
      })
    },

    notImplemented () {
      Alert.alert(
        'Not Implemented',
        'Yet... if ever... :)'
      )
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

    noWalletContentContainer: {
      paddingTop: 10
    },

    noWalletCard: {
      flex: 1,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 10,
      marginTop: 20
    },

    logo: {
      width: '100%',
      resizeMode: 'contain'
    },

    loadingHideContainer: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 60
    }
  }
}

</script>
