<template>
  <view :style="{ flex: 1 }">
    <modal-navigation
      title="About MultiCash"
      has-back-button
      @on-dismiss="navigation.goBack()"
    />
    <view-background>
      <header-view
        title="About MultiCash"
        subtitle="Bunch of Moon boys!"
        :image-background="require('@/assets/coins/MCX.png')"
      />
    </view-background>
  </view>
</template>

<script>
export default {
  name: 'AboutView',

  computed: {
    styles () {
      return styleStore(this.isDarkScheme)
    }
  }
}

const styleStore = (isDarkScheme) => {
  return {}
}
</script>
