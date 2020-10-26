<template>
  <view :style="{ flex: 1 }">
    <modal-navigation
      title="Import a wallet"
      has-back-button
      @on-dismiss="navigation.goBack()"
    />
    <view-background>

      <text>Nice</text>

    </view-background>
  </view>
</template>

<script>
export default {
  name: 'ImportView',

  data () {
    return {}
  },

  computed: {
    styles () {
      return stylesStore(this.isDarkScheme)
    }
  }
}

const stylesStore = (isDarkScheme) => {
  return {}
}
</script>
