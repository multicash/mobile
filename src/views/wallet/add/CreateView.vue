<template>
  <view-background :no-padding="!created" :scrollable="created">

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

      <spacer stretch/>

      <rounded-button
        title="Done"
        type="primary"
        @on-press="navigation.navigate('home')"
      />
    </view>
    <view v-else :style="styles.creatingContainer">
      <view
        :style="{
          transform: [{rotate: spin}],
          width: 200,
          height: 200,
          marginBottom: 10,
        }"
      >
        <image
          :style="styles.image"
          :source="require('@/assets/loading.png')"
        />
      </view>
      <text :style="styles.creatingTitle">In progress</text>
      <text :style="styles.creatingSubtitle">Your account is being created...</text>
    </view>

  </view-background>
</template>

<script>
import { Alert } from 'react-native'

export default {
  name: 'CreateView',

  data () {
    return {
      created: false,
      newWallet: null,
      spinValue: 0,
      spin: '0deg',
      animatedValueRotate: 0
    }
  },

  created () {
    const walletConfig = this.$walletManager.getTempWallet(this.route.params.identifier)

    this.$walletManager.addWallet(walletConfig).then(wallet => {
      this.created = true
      this.newWallet = wallet
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
  }
}

const stylesStore = (isDarkScheme) => {
  return {
    image: {
      width: 200,
      height: 200,
      resizeMode: 'contain'

    },

    nextTitle: {
      fontSize: 13,
      fontWeight: 'bold',
      marginTop: 20,
      marginBottom: 10,
      marginLeft: 10,
      color: isDarkScheme ? 'white' : 'black'
    },

    creatingContainer: {
      flex: 1,
      backgroundColor: '#4c00ff',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 30
    },

    creatingTitle: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 35,
      textAlign: 'center'
    },

    creatingSubtitle: {
      color: 'white',
      fontWeight: '600'
    },

    creatingImage1: {
      zIndex: 10,
      width: 100,
      height: 100,
      marginTop: 0,
      marginRight: -60,
      resizeMode: 'contain'
    },

    creatingImage2: {
      width: 120,
      height: 120,
      resizeMode: 'contain',
      marginTop: 20,
      marginBottom: 5
    }
  }
}
</script>
