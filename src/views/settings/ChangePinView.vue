<template>
  <view :style="{ flex: 1 }">
    <modal-navigation
      has-back-button
      title="Change PIN"
      @on-dismiss="navigation.goBack()"
    />
    <view-background>
      <text>Nice</text>
    </view-background>
  </view>
</template>

<script>
export default {
  name: 'ChangePinView'
}
</script>
