<template>
  <scroll-view v-if="scrollable" :style="styles.viewBackground">
    <slot/>
  </scroll-view>
  <view v-else :style="styles.viewBackground">
    <slot/>
  </view>
</template>

<script>
export default {
  name: 'ViewBackground',

  props: {
    noPadding: {
      type: Boolean,
      default: false
    },

    scrollable: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    styles () {
      return stylesStore(this.isDarkScheme, this.noPadding)
    }
  }
}

const stylesStore = (isDarkScheme, noPadding) => {
  return {
    viewBackground: {
      flex: 1,
      padding: noPadding ? 0 : 20,
      flexDirection: 'column'
    }
  }
}
</script>
