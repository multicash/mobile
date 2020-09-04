<template>
  <view :style="{ flex: 1 }">
    <status-bar bar-style="light-content" />
    <modal-navigation
      has-back-button
      @on-dismiss="navigation.goBack()"
    >
    </modal-navigation>
    <view-background>
      <text>Settings</text>
    </view-background>
  </view>
</template>

<script>
import ModalNavigation from '@/components/ModalNavigation'
import ViewBackground from '@/components/ViewBackground'

export default {
  name: 'SettingsScreen',

  components: { ViewBackground, ModalNavigation },

  props: {
    navigation: {
      type: Object
    }
  }
}
</script>
