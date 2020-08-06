<template>
  <view>
    <status-bar bar-style="light-content" />
    <modal-navigation
      title="Receive"
      has-close-button
      @on-dismiss="$parent.$emit('update:visible', false)"
    />
    <view-background>
      <text>Receive</text>
    </view-background>
  </view>
</template>

<style>

</style>

<script>
import ViewBackground from '../components/ViewBackground'
import ModalNavigation from '../components/ModalNavigation'

export default {
  name: 'ReceiveView',

  components: { ModalNavigation, ViewBackground }
}
</script>
