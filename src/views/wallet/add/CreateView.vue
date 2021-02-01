<template>
  <view-background :no-padding="!created" :scrollable="created">

    <view v-if="created">

      <view :style="styles.headerContainer">
        <view :style="{ flexDirection: 'row' }">
          <image :style="styles.headerImage1" :source="require('@/assets/new-wallet1.png')"/>
          <image :style="styles.headerImage2" :source="require('@/assets/new-wallet2.png')"/>
        </view>
        <text :style="styles.headerTitle">Awesome, you've done it!</text>
        <text :style="styles.headerSubtitle">
          Your wallet has been successfully created!
        </text>
      </view>

      <text :style="styles.nextTitle">What to do next?</text>

      <action-notification
        title="Export your wallet"
        label="Its extremely smart to export your wallet restore key at this moment."
        type="warning"
      >
        <rounded-button title="Export" @on-press="navigation.navigate('home')"/>
      </action-notification>

      <action-notification
        title="Receive MCX"
        label="Start filling your wallet with value by receiving some MCX."
      >
        <rounded-button title="Receive" @on-press="navigation.navigate('home')"/>
      </action-notification>

      <action-notification
        title="Or..."
        label="We can also just show you your new wallet where you can do lots more."
      >
        <rounded-button title="To wallet" @on-press="navigation.navigate('home')"/>
      </action-notification>

    </view>
    <view v-else :style="styles.creatingContainer">
      <view :style="{ flexDirection: 'row' }">
        <image :style="styles.creatingImage1" :source="require('@/assets/create-wallet1.png')"/>
        <image :style="styles.creatingImage2" :source="require('@/assets/create-wallet2.png')"/>
      </view>
      <text :style="styles.creatingTitle">In progress</text>
      <text :style="styles.creatingSubtitle">Your wallet is being created...</text>
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
      newWallet: null
    }
  },

  created () {
    const walletConfig = this.$walletManager.getTempWallet(this.route.params.identifier)

    this.$walletManager.addWallet(walletConfig).then(wallet => {
      this.created = true
      this.newWallet = wallet
    }).catch(error => {
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
    headerContainer: {
      marginHorizontal: 20,
      marginVertical: 30,
      justifyContent: 'center',
      alignItems: 'center'
    },

    headerTitle: {
      fontSize: 24,
      fontWeight: '600',
      color: isDarkScheme ? 'white' : 'black',
      marginTop: 5
    },

    headerSubtitle: {
      fontSize: 15,
      fontWeight: '600',
      color: '#0a9f67',
      marginVertical: 5,
      textAlign: 'center'
    },

    headerImage1: {
      zIndex: 10,
      width: 80,
      height: 80,
      marginTop: 0,
      marginRight: -40,
      resizeMode: 'contain'
    },

    headerImage2: {
      width: 100,
      height: 100,
      resizeMode: 'contain',
      marginTop: 20,
      marginBottom: 5
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
