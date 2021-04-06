<template>
  <view :style="styles.digitDotsContainer">
    <view
      v-for="(index, i) in value"
      :key="i"
      :style="{ paddingLeft: i === 0 ? 0 : 10 }"
    >
      <view v-if="index !== undefined" :style="styles.digitDotFilled" />
      <view v-else :style="styles.digitDot" />
    </view>
  </view>
</template>

<script>
export default {
  name: 'DotInput',

  props: {
    value: {
      type: Array,
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
    digitDotsContainer: {
      flexDirection: 'row',
      margin: 20
    },

    digitDotFilled: {
      backgroundColor: isDarkScheme ? '#0bbcda' : '#0bbcda',
      width: 20,
      height: 20,
      borderRadius: 10
    },

    digitDot: {
      backgroundColor: isDarkScheme ? '#f744e4' : '#aa0c98',
      width: 20,
      height: 20,
      borderRadius: 10
    }
  }
}
</script>
