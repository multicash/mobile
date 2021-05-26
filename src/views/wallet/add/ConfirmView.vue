<template>
  <view :style="{ flex: 1 }">
    <modal-navigation
      title="Confirm"
      has-back-button
      @on-dismiss="navigation.goBack()"
    />
    <view-background :style="{ paddingBottom: 50 }" scrollable>

      <header-view
        title="Almost Done!"
        subtitle="Please read and agree with the below statements carefully before proceeding."
        :image-foreground="require('@/assets/todo-list.png')"
        :image-background="require('@/assets/check-all.png')"
      />

      <switch-notification
        :value.sync="term1"
        @input="term1 = $event"
        label="I understand that the only way to restore this account is by providing the restore key. If the restore key is lost or differs from this setup there is no way to recover it. I'm solely responsible for the restore key."
        type="primary"
      />

      <switch-notification
        :value.sync="term2"
        @input="term2 = $event"
        label="I understand that this accounts restore key is stored securely on this device. And that this restore key isn't covered by automatic backup."
        type="primary"
      />

      <switch-notification
        :value.sync="term3"
        @input="term3 = $event"
        label="I have read, understood, and agree to the Terms of Use."
      />

      <link-button title="Terms of Use" :style="{ marginTop: -10 }"/>

      <spacer stretch />

      <view :style="styles.proceedButtonPlaceholder" />

    </view-background>

    <rounded-button
      v-if="term1 && term2 && term3"
      :style="styles.proceedButton"
      title="Proceed"
      @on-press="navigation.navigate('create', route.params)"
    />
  </view>
</template>

<script>
export default {
  name: 'ConfirmView',

  data () {
    return {
      term1: false,
      term2: false,
      term3: false
    }
  },

  computed: {
    styles () {
      return stylesStore(this.isDarkScheme)
    }
  }
}

const stylesStore = (isDarkScheme) => {
  return {
    proceedButtonPlaceholder: {
      height: 120
    },

    proceedButton: {
      position: 'absolute',
      bottom: 30,
      left: 20,
      right: 20
    }
  }
}
</script>
