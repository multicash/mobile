<template>
  <view :style="{ flex: 1 }">
    <modal-navigation
      title="Recipient"
      has-back-button
      @on-dismiss="navigation.goBack()"
    />
    <view-background
      :style="{ alignItems: 'center' }"
    >
      <text>Recipient</text>
      <rounded-button @on-press="navigation.goBack()" title="Back"></rounded-button>
    </view-background>
  </view>
</template>

<script>
import RoundedButton from '@/components/RoundedButton'
import ModalNavigation from '@/components/ModalNavigation'
import ViewBackground from '@/components/ViewBackground'

export default {
  name: 'RecipientScreen',

  components: { ViewBackground, ModalNavigation, RoundedButton },

  props: {
    navigation: {
      type: Object
    }
  }
}
</script>
