<template>
  <view>
    <status-bar bar-style="light-content" />
    <modal-navigation
      title="Pay"
      has-close-button
      @on-dismiss="$parent.$emit('update:visible', false)"
    />
    <view-background>
      <text>Pay</text>
    </view-background>
  </view>
</template>

<style>

</style>

<script>
import ViewBackground from '../components/ViewBackground'
import ModalNavigation from '../components/ModalNavigation'

export default {
  name: 'PayView',

  components: { ModalNavigation, ViewBackground }
}
</script>
