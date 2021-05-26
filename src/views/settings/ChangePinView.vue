<template>
  <view :style="{ flex: 1 }">
    <modal-navigation
      has-back-button
      title="Change PIN"
      @on-dismiss="navigation.goBack()"
    />
    <view-background>
      <header-view
        title="Change PIN"
        subtitle="Your app PIN will be used to unlock this app, its settings and to verify yourself by paying with MCX."
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
    </view-background>
  </view>
</template>

<script>
import { Alert } from 'react-native'
import { mapActions } from 'vuex'

export default {
  name: 'ChangePinView',

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
        Alert.alert('PIN successfully changed')
        this.updatePin(this.pin.join(''))
        this.navigation.goBack()

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
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },

    pinContainer: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center'
    },

    title: {
      fontWeight: '600',
      fontSize: 18,
      color: isDarkScheme ? 'white' : 'black'
    }
  }
}
</script>
