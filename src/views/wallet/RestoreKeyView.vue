<template>
  <view :style="{ flex: 1 }">
    <modal-navigation
      has-back-button
      title="Wallet restore key"
      @on-dismiss="navigation.goBack()"
    />
    <view-background scrollable>
      <header-view
        title="Your wallets restore key"
        subtitle="In order to recover your wallet you need the restore key."
        :image-background="require('@/assets/signing-a-document.png')"
        :image-foreground="require('@/assets/protect.png')"
      />

      <restore-key-grid-view :words="mnemonic" />
    </view-background>
  </view>
</template>

<script>
export default {
  name: 'RestoreKeyView',

  computed: {
    mnemonic () {
      return this.wallet.getCredentials().mnemonic.split(' ')
    }
  }
}
</script>
