<template>
  <view :style="{ flex: 1 }">
    <modal-navigation
      has-back-button
      title="Wallet name"
      @on-dismiss="navigation.goBack()"
    />
    <view-background>
      <text>Nice</text>
    </view-background>
  </view>
</template>

<script>
export default {
  name: 'NameView'
}
</script>
