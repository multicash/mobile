<template>
  <view :style="styles.container">
    <qr-code-scanner
      :onRead="onRead"
      :flashMode="flashMode"
    />
    <linear-gradient
      :colors="[ '#000', '#00000000' ]"
      :style="styles.safeArea"
      :start="{ x: 0, y: 0 }"
      :end="{ x: 0, y: 0.25 }"
    />
    <safe-area-view :style="styles.safeArea">
      <view :style="styles.actionsContainer">
        <secondary-round-button
          icon="flash"
          @on-press="toggleFlash"
        />
        <rounded-button
          title="Close"
          @on-press="navigation.goBack()"
        />
      </view>
    </safe-area-view>
  </view>
</template>

<script>
import LinearGradient from 'react-native-linear-gradient'
import { SafeAreaView } from 'react-native-safe-area-context'
import { RNCamera } from 'react-native-camera'
import QrCodeScanner from 'react-native-qrcode-scanner'
import PayLinkParser from '@/support/PayLinkParser'

export default {
  name: 'ScanQRView',

  components: {
    SafeAreaView,
    QrCodeScanner,
    LinearGradient
  },

  data () {
    return {
      flashMode: RNCamera.Constants.FlashMode.off
    }
  },

  computed: {
    styles () {
      return stylesStore()
    }
  },

  methods: {
    onRead (qrCode) {
      const qrData = new PayLinkParser(qrCode.data)
      const sourceWallet = this.$walletManager.getWallet('main-account')

      this.navigation.replace('pay', {
        screen: 'confirm',
        params: {
          isReceive: false,
          amount: qrData.get('amount'),
          source: {
            walletIdentifier: 'main-account',
            title: sourceWallet.name,
            amount: sourceWallet.info.balance.availableAmount,
            image: sourceWallet.icon
          },
          target: {
            title: qrData.get('tag'),
            icon: 'qr-code',
            iconColor: '#3edd8a'
          }
        }
      })
    },

    toggleFlash () {
      this.flashMode = this.flashMode === RNCamera.Constants.FlashMode.off
        ? RNCamera.Constants.FlashMode.torch
        : RNCamera.Constants.FlashMode.off
    }
  }
}

const stylesStore = () => {
  return {
    container: {
      backgroundColor: 'black',
      flex: 1
    },

    safeArea: {
      position: 'absolute',
      flexDirection: 'column-reverse',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      padding: 30
    },

    actionsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }
}
</script>
