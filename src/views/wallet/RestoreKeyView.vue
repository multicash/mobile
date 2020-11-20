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
        :image-background="require('@/assets/signing-document.png')"
        :image-foreground="require('@/assets/protect.png')"
      />

      <restore-key-grid-view :words="words" />
    </view-background>
  </view>
</template>

<script>
export default {
  name: 'RestoreKeyView',

  data () {
    return {
      words: [
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
        'ten',
        'eleven',
        'twelve'
      ]
    }
  }
}
</script>
