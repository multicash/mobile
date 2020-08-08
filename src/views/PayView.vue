<template>
  <view>
    <status-bar bar-style="light-content" />
    <modal-navigation
      title="Pay"
      has-close-button
      @on-dismiss="$parent.$emit('update:visible', false)"
    />
    <view-background>
      <card>
        <text>Pay</text>
      </card>
    </view-background>
  </view>
</template>

<style>

</style>

<script>
import ViewBackground from '../components/ViewBackground'
import ModalNavigation from '../components/ModalNavigation'
import Card from '../components/Card'

export default {
  name: 'PayView',

  components: { Card, ModalNavigation, ViewBackground }
}
</script>
