<template>
  <view :style="{ flex: 1 }">
    <modal-navigation
      has-back-button
      title="Wallet name"
      @on-dismiss="navigation.goBack()"
    />
    <view-background scrollable>
      <input-description>Choose a wallet name for this wallet to recognize it among your other wallets.</input-description>
      <rounded-text-input
        title="Wallet name"
        placeholder="Main account"
        :value="name"
        @input="name = $event"
        @on-end-editing="updateName"
      />
    </view-background>
  </view>
</template>

<script>
export default {
  name: 'NameView',

  data () {
    return {
      name: ''
    }
  },

  created () {
    this.name = this.wallet.name
  },

  methods: {
    updateName (event) {
      const wallet = this.wallet
      wallet.name = event.nativeEvent.text

      this.$walletManager.updateWallet(wallet.identifier, wallet)
    }
  }
}
</script>
