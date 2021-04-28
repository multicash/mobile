<template>
  <view :style="styles.container">
    <view
      v-for="(index, i) in pages"
      :key="i"
      :style="{ paddingLeft: i === 0 ? 0 : 10 }"
    >
      <view v-if="currentPage + 1 === index" :style="styles.dotFilled" />
      <view v-else :style="styles.dot" />
    </view>
  </view>
</template>

<script>
export default {
  name: 'PageIndicator',

  props: {
    currentPage: {
      type: Number,
      required: true
    },

    pages: {
      type: Number,
      required: true
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
    container: {
      flexDirection: 'row',
      margin: 5
    },

    dotFilled: {
      backgroundColor: isDarkScheme ? 'rgba(255,255,255,0.75)' : 'rgba(0,0,0,0.75)',
      width: 10,
      height: 10,
      borderRadius: 10
    },

    dot: {
      backgroundColor: isDarkScheme ? 'rgba(255,255,255,0.25)' : 'rgba(0,0,0,0.25)',
      width: 10,
      height: 10,
      borderRadius: 10
    }
  }
}
</script>
