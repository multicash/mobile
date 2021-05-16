<template>
<!--  <safe-area-view :style="styles.safeArea">-->
  <scroll-view
    ref="scrollView"
    v-if="scrollable"
    :style="styles.viewBackground"
    :contentContainerStyle="styles.contentContainer"
    contentInsetAdjustmentBehavior="automatic"
  >
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
      return stylesStore(this.isDarkScheme, this.noPadding, this.scrollable)
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

const stylesStore = (isDarkScheme, noPadding, scrollable) => {
  return {
    safeArea: {
      flex: 1,
      backgroundColor: isDarkScheme ? '#222429' : '#ededf3'
    },

    viewBackground: {
      flex: 1,
      padding: scrollable ? undefined : (noPadding ? 0 : 20),
      flexDirection: 'column',
      backgroundColor: isDarkScheme ? '#222429' : '#ededf3'
    },

    contentContainer: {
      padding: noPadding ? 0 : 20
    }
  }
}
</script>
