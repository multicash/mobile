<template>
  <view-background no-padding>
    <modal-navigation
      title="Add wallet"
      has-close-button
      @on-dismiss="navigation.goBack()"
    />
  </view-background>
</template>

<script>
import ViewBackground from '@/components/ViewBackground'
import ModalNavigation from '@/components/ModalNavigation'

export default {
  name: 'AddView',

  components: {
    ModalNavigation,
    ViewBackground
  }
}
</script>
