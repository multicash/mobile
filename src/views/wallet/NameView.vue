<template>
  <modal-view
    has-back-button
    title="Account name"
    @on-dismiss="navigation.goBack()"
  >
    <view>
      <input-description>Choose an account name for this account to recognize it among your other accounts.</input-description>
      <rounded-text-input
        ref="name"
        title="Wallet name"
        placeholder="Main account"
        :value="name"
        @input="name = $event"
        @on-end-editing="updateName"
        auto-focus
      />
    </view>
  </modal-view>
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

    this.navigation.addListener('focus', () => {
      this.$refs.name.focus()
    })
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
