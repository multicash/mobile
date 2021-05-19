<template>
  <safe-area-view :style="styles.safeAreaView">
    <status-bar :bar-style="isDarkScheme ? 'light-content' : 'dark-content'" />
    <view :style="{ flex: 1 }">
      <header-view
        title="MultiCash PIN Setup"
        :image-background="require('@/assets/pin.png')"
      />

      <view :style="styles.container">
        <view :style="styles.pinContainer">
          <text v-if="confirm" :style="styles.title">Confirm new PIN</text>
          <text v-else :style="styles.title">Enter a new PIN</text>

          <dot-input :value.sync="confirm ? confirmPin : pin" />
        </view>

        <pin-keyboard
          v-if="confirm"
          v-model="confirmPin"
          :max-length="pinLength"
          @input="pinUpdated"
        />
        <pin-keyboard
          v-else
          v-model="pin"
          :max-length="pinLength"
          @input="pinUpdated"
        />
      </view>
    </view>
  </safe-area-view>
</template>

<script>
import { SafeAreaView } from 'react-native-safe-area-context'
import { mapActions } from 'vuex'

export default {
  name: 'ChangePinView',

  components: { SafeAreaView },

  data () {
    return {
      confirm: false,
      pinLength: 4,
      pin: [],
      confirmPin: []
    }
  },

  computed: {
    styles () {
      return stylesStore(this.isDarkScheme)
    }
  },

  created () {
    this.pin = Array(this.pinLength)
    this.confirmPin = Array(this.pinLength)
  },

  methods: {
    ...mapActions(['updatePin']),

    pinUpdated () {
      this.$forceUpdate()

      if (this.pinLength === this.confirmPin.filter(v => v !== undefined).length) {
        this.pinConfirmed()
      }

      if (this.pinLength === this.pin.filter(v => v !== undefined).length) {
        setTimeout(() => {
          this.confirm = true
        }, 500)
      }
    },

    pinConfirmed () {
      if (this.confirmPin.join('') === this.pin.join('')) {
        this.updatePin(this.pin.join(''))
        this.navigation.goBack()

        setTimeout(() => {
          this.navigation.navigate('biometricAuthentication')
        }, 10)

        return
      }

      this.confirm = false
      this.pin = Array(this.pinLength)
      this.confirmPin = Array(this.pinLength)
    }
  }
}

const stylesStore = (isDarkScheme) => {
  return {
    safeAreaView: {
      flex: 1,
      backgroundColor: isDarkScheme ? '#222429' : '#ededf3'
    },

    container: {
      padding: 20,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },

    pinContainer: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 50
    },

    description: {
      textAlign: 'center',
      fontSize: 12,
      color: isDarkScheme ? '#cccccc' : '#484848'
    },

    title: {
      fontWeight: '600',
      fontSize: 18,
      color: isDarkScheme ? 'white' : 'black'
    }
  }
}
</script>
