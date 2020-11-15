<template>
  <view :style="{ flex: 1 }">
    <modal-navigation
      has-back-button
      title="Change PIN"
      @on-dismiss="navigation.goBack()"
    />
    <view-background>
      <view :style="styles.container">
        <text :style="styles.description">Your wallet PIN will be used to open this app, and to send MCX with. When you'll forget it, you'll need to restore your wallets to access them again.</text>

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
    pinUpdated () {
      this.$forceUpdate()

      if (this.pinLength === this.confirmPin.filter(v => v !== undefined).length) {
        this.pinConfirmed()
      }

      if (this.pinLength === this.pin.filter(v => v !== undefined).length) {
        this.confirm = true
      }
    },

    pinConfirmed () {
      if (this.confirmPin.join('') === this.pin.join('')) {
        alert('Pin successfully changed')

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
      padding: 20,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },

    pinContainer: {
      flex: 1,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center'
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
