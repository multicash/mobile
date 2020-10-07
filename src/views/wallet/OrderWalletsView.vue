<template>
  <view-background no-padding>
    <modal-navigation
      title="Order wallets"
      has-close-button
      @on-dismiss="navigation.goBack()"
    />
  </view-background>
</template>

<script>
import ViewBackground from '@/components/ViewBackground'
import ModalNavigation from '@/components/ModalNavigation'

export default {
  name: 'OrderWalletsView',

  components: {
    ModalNavigation,
    ViewBackground
  }
}
</script>
