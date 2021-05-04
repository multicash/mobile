<template>
  <view :style="styles.container">
    <view :style="styles.progress"/>
  </view>
</template>

<script>
export default {
  name: 'ProgressView',

  props: {
    progress: {
      type: Number,
      default: 0
    }
  },

  computed: {
    styles () {
      return styleStore(this.isDarkScheme, 1 - this.progress)
    }
  }
}

const styleStore = (isDarkScheme, progress) => {
  return {
    container: {
      position: 'relative',
      marginVertical: 10,
      height: 20,
      width: '100%',
      backgroundColor: isDarkScheme ? '#ffffff' : '#ffffff',
      borderRadius: 100,
      overflow: 'hidden'
    },

    progress: {
      position: 'absolute',
      backgroundColor: isDarkScheme ? '#00AE5A' : '#00AE5A',
      top: 0,
      bottom: 0,
      left: 0,
      right: (progress * 100) + '%'
    }
  }
}
</script>
