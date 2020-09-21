<template>
  <view :style="styles.detailListTitleContainer">
    <slot>
      <text :style="styles.title">{{ title }}</text>
    </slot>
  </view>
</template>

<script>
export default {
  name: 'DetailListTitle',

  props: {
    title: {
      type: String,
      default: ''
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
    detailListTitleContainer: {
      paddingTop: 20,
      paddingBottom: 10
    },

    title: {
      color: isDarkScheme ? '#8374b2' : '#4d3f70',
      fontWeight: '600',
      fontSize: 13
    }
  }
}
</script>
