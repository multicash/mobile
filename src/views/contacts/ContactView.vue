<template>
  <view-background no-padding>
    <modal-navigation
      title="Contacts"
      has-close-button
      @on-dismiss="navigation.goBack()"
    />
    <text>A nice contact</text>
  </view-background>
</template>

<script>
import ViewBackground from '@/components/ViewBackground'
import ModalNavigation from '@/components/ModalNavigation'

export default {
  name: 'ContactView',

  components: {
    ModalNavigation,
    ViewBackground
  }
}
</script>
