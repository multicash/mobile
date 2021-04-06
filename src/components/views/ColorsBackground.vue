<template>
  <view :style="style.container">
    <view
      v-for="color in colors"
      :key="color"
      :style="{
        flex: 1,
        backgroundColor: color,
        height: randomHeights ? Math.floor((Math.random() * (maxHeightPercentage - minHeightPercentage + 1)) + minHeightPercentage) + '%' : undefined
      }"
    />
  </view>
</template>

<script>
export default {
  name: 'ColorsBackground',

  data () {
    return {
      colors: [
        '#f744e4',
        '#e033eb',
        '#cb22f2',
        '#bf19f4',
        '#b00dfa',
        '#05ad25',
        '#0bbcda',
        '#00ade7'
      ]
    }
  },

  computed: {
    style () {
      return styleStore(this.fullScreen)
    }
  },

  props: {
    fullScreen: {
      type: Boolean,
      default: true
    },

    randomHeights: {
      type: Boolean,
      default: false
    },

    minHeightPercentage: {
      type: Number,
      default: 95
    },

    maxHeightPercentage: {
      type: Number,
      default: 100
    }
  }
}

const styleStore = (fullScreen) => {
  return {
    container: fullScreen ? {
      flexDirection: 'row',
      flex: 1,
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    } : {
      position: 'absolute',
      flexDirection: 'row',
      top: 0,
      left: 0,
      right: 0
    }
  }
}
</script>
