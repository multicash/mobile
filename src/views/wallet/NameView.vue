<template>
  <view :style="{ flex: 1 }">
    <modal-navigation
      has-back-button
      title="Wallet name"
      @on-dismiss="navigation.goBack()"
    />
    <view-background scrollable>
      <input-description>Choose a wallet name for this wallet to recognize it among your other wallets.</input-description>
      <rounded-text-input title="Wallet name" placeholder="Main account" :value="name" @input="name = $event"/>
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

  computed: {
    wallet () {
      if (!(this.route.params && this.route.params.wallet)) {
        return null
      }

      return this.route.params.wallet
    }
  }
}
</script>
