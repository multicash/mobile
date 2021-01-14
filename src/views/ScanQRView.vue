<template>
  <view
    :style="{
      backgroundColor: 'black',
      flex: 1
    }"
  >
    <qr-code-scanner
      :onRead="onRead"
      :flashMode="flashMode"
    />
  </view>
</template>

<script>
import QrCodeScanner from 'react-native-qrcode-scanner'
import { RNCamera } from 'react-native-camera'

export default {
  name: 'ScanQRView',

  components: {
    QrCodeScanner
  },

  data () {
    return {
      flashMode: RNCamera.Constants.FlashMode.torch
    }
  },

  methods: {
    onRead (qrCode) {
      console.log(qrCode)
    }
  }
}
</script>
