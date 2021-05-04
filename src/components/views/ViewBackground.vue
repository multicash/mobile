<template>
  <scroll-view ref="scrollView" v-if="scrollable" :style="styles.viewBackground">
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
  },

  methods: {
    scrollTo (options) {
      if (this.$refs.scrollView) {
        this.$refs.scrollView.scrollTo(options)
      }
    }
  }
}

const stylesStore = (isDarkScheme, noPadding) => {
  return {
    viewBackground: {
      flex: 1,
      padding: noPadding ? 0 : 20,
      flexDirection: 'column',
      backgroundColor: isDarkScheme ? '#222429' : '#ededf3'
    }
  }
}
</script>
