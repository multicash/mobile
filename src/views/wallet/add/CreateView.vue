<template>
  <view-background
    :style="created ? {} : styles.container"
    :scrollable="created"
  >
    <view v-if="created">
      <header-view
        title="Awesome!"
        subtitle="Your account has been successfully created!"
        :image-foreground="require('@/assets/new.png')"
        :image-background="require('@/assets/coin-wallet.png')"
      />

      <text :style="styles.nextTitle">What to do next?</text>

      <action-notification
        title="Export your wallet"
        label="Its extremely smart to export your wallet restore key at this moment."
        type="warning"
      >
        <rounded-button
          title="Export"
          @on-press="navigation.replace('wallet', { screen: 'export', params: { walletIdentifier: newWallet.identifier } })"
        />
      </action-notification>

      <action-notification
        title="Receive MCX"
        label="Start filling your wallet with value by receiving some MCX."
      >
        <rounded-button
          title="Receive"
          @on-press="navigation.replace('receive', { walletIdentifier: newWallet.identifier })"
        />
      </action-notification>

      <action-notification
        title="Or..."
        label="We can also just show you your new wallet where you can do lots more."
      >
        <rounded-button
          title="To wallet"
          @on-press="navigation.replace('wallet', { screen: 'overview', params: { walletIdentifier: newWallet.identifier } })"
        />
      </action-notification>

      <spacer />

      <rounded-button
        title="Done"
        type="primary"
        @on-press="navigation.navigate('home')"
      />
    </view>
    <view v-else>
      <ActivityIndicator size="large" :color="isDarkScheme ? '#6868ff' : '#0000ff'" />
      <header-view
        title="Creating Your Account"
        subtitle="one sec..."
      />
    </view>

  </view-background>
</template>

<script>
import { Alert } from 'react-native'
import { mapActions } from 'vuex'

export default {
  name: 'CreateView',

  data () {
    return {
      created: false,
      newWallet: null
    }
  },

  created () {
    const walletConfig = this.$walletManager.getTempWallet(this.route.params.identifier)

    this.$walletManager.addWallet(walletConfig).then(wallet => {
      this.created = true
      this.newWallet = wallet

      if (this.$walletManager.wallets.length === 1) {
        this.setDefaultWallet(wallet.identifier)
      }
    }).catch(error => {
      console.error(error)

      Alert.alert(
        'Creation failed',
        `An error was raised while creating your MultiCash with the following message: ${error.message}`,
        [
          {
            text: 'Ok',
            onPress: () => {
              this.navigation.goBack()
            }
          }
        ]
      )
    })
  },

  computed: {
    styles () {
      return stylesStore(this.isDarkScheme)
    }
  },

  methods: {
    ...mapActions(['setDefaultWallet'])
  }
}

const stylesStore = (isDarkScheme) => {
  return {
    container: {
      justifyContent: 'center'
    },

    nextTitle: {
      fontSize: 13,
      fontWeight: 'bold',
      marginTop: 20,
      marginBottom: 10,
      marginLeft: 10,
      color: isDarkScheme ? 'white' : 'black'
    }
  }
}
</script>
