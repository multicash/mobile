<template>
  <view :style="{ flex: 1 }">
    <modal-navigation
      title="Create"
      has-back-button
      @on-dismiss="navigation.goBack()"
    />
    <view-background :style="{ paddingBottom: 50 }">

      <text>HW</text>

    </view-background>
  </view>
</template>

<script>
export default {
  name: 'CreateView',

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
