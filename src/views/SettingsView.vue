<template>
  <view>
    <modal-navigation title="Settings" @on-dismiss="$parent.$emit('update:visible', false)"/>
    <view-background>
      <text>Settings</text>
    </view-background>
  </view>
</template>

<style>

</style>

<script>
  import ViewBackground from '../components/ViewBackground'
  import ModalNavigation from '../components/ModalNavigation'

  export default {
    name: 'SettingsView',

    components: {ModalNavigation, ViewBackground}
  }
</script>
