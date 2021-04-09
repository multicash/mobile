<template>
  <view :style="styles.container">
    <qr-code-scanner
      :onRead="onRead"
      :flashMode="flashMode"
      :cameraStyle="{ height: '100%', width: '100%' }"
    />
    <linear-gradient
      :colors="[ '#000', '#00000000' ]"
      :style="styles.safeArea"
      :start="{ x: 0, y: 0 }"
      :end="{ x: 0, y: 0.25 }"
    />
    <linear-gradient
      :colors="[ '#00000000', 'rgba(0, 0, 0, 0.75)', '#000' ]"
      :style="styles.safeArea"
      :start="{ x: 0, y: 0.75 }"
      :end="{ x: 0, y: 1 }"
    />
    <safe-area-view :style="styles.safeArea">
      <view :style="styles.actionsContainer">
        <secondary-round-button
          icon="flash"
          @on-press="toggleFlash"
        />
        <touchable-opacity
          :on-press="() => navigation.goBack()"
          :style="styles.closeButton"
          :active-opacity="0.6"
        >
          <text :style="styles.closeButtonText">Close</text>
        </touchable-opacity>
      </view>
      <view :style="styles.contentContainer">
        <text :style="styles.scanLabel">Scan a MultiCash Pay Link</text>
        <view :style="styles.qrBorders">
          <view :style="styles.qrBordersRow">
            <view :style="{ borderLeftWidth: 4, borderLeftColor: 'white', borderTopWidth: 4, borderTopColor: 'white', height: 50, width: 50, borderTopLeftRadius: 10 }"/>
            <view :style="{ borderRightWidth: 4, borderRightColor: 'white', borderTopWidth: 4, borderTopColor: 'white', height: 50, width: 50, borderTopRightRadius: 10 }"/>
          </view>
          <view :style="styles.qrBordersRow">
            <view :style="{ borderLeftWidth: 4, borderLeftColor: 'white', borderBottomWidth: 4, borderBottomColor: 'white', height: 50, width: 50, borderBottomLeftRadius: 10 }"/>
            <view :style="{ borderRightWidth: 4, borderRightColor: 'white', borderBottomWidth: 4, borderBottomColor: 'white', height: 50, width: 50, borderBottomRightRadius: 10 }"/>
          </view>
        </view>
      </view>
    </safe-area-view>
  </view>
</template>

<script>
import LinearGradient from 'react-native-linear-gradient'
import { SafeAreaView } from 'react-native-safe-area-context'
import { RNCamera } from 'react-native-camera'
import QrCodeScanner from 'react-native-qrcode-scanner'
import PayLinkParser from '@/core/transaction/PayLinkParser'
import { mapGetters } from 'vuex'

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
    ...mapGetters(['getDefaultWallet']),

    styles () {
      return stylesStore()
    }
  },

  methods: {
    onRead (qrCode) {
      try {
        const qrData = new PayLinkParser(qrCode.data)
        const sourceWallet = this.$walletManager.getWallet(this.getDefaultWallet) || this.$walletManager.defaultWallet()

        this.navigation.replace('pay', {
          screen: 'confirm',
          params: qrData.getPayParamsWithSource(sourceWallet, 'qr-code', '#3edd8a')
        })
      } catch (e) {
        console.log(e)
      }
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

    contentContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },

    scanLabel: {
      color: 'white',
      marginTop: -30,
      paddingBottom: 20,
      fontSize: 15,
      fontWeight: '600'
    },

    qrBorders: {
      flex: 1,
      justifyContent: 'space-between',
      maxHeight: 200,
      maxWidth: 200
    },

    qrBordersRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%'
    },

    actionsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },

    closeButton: {
      padding: 20
    },

    closeButtonText: {
      color: '#b400ff',
      fontSize: 16
    }
  }
}
</script>
