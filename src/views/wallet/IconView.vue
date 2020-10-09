<template>
  <view :style="{ flex: 1 }">
    <modal-navigation
      has-back-button
      title="Wallet icon"
      @on-dismiss="navigation.goBack()"
    />
    <view-background>
      <text>Nice</text>
    </view-background>
  </view>
</template>

<script>
export default {
  name: 'IconView'
}
</script>
