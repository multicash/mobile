<template>
  <view :style="styles.container">
    <view :style="styles.colorsContainer">
      <view
        v-for="color in colors"
        :key="color"
        :style="{
          flex: 1,
          backgroundColor: color
        }"
      />
    </view>
    <view :style="styles.contentContainer">
      <slot />
    </view>
  </view>
</template>

<script>
export default {
  name: 'AppHeaderView',

  props: {
    insets: {
      type: Object
    },

    expand: {
      type: Boolean,
      default: true
    }
  },

  computed: {
    styles () {
      return stylesStore(this.isDarkScheme, this.insets, this.expand)
    },

    colors () {
      return [
        // '#3D1032',
        // '#77124D',
        // '#8B1760',
        // '#B11D76',
        // '#CE3B94',
        // this.isDarkScheme ? '#8f4070' : '#e967b5',
        // this.isDarkScheme ? '#6d3b5a' : '#f195cd',
        // this.isDarkScheme ? '#573753' : '#ffb1e2'
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
  }
}

const stylesStore = (isDarkScheme, insets, expand) => {
  return {
    container: {
      flex: expand ? 1 : undefined,
      backgroundColor: 'transparent',
      marginTop: -insets.top
    },

    contentContainer: {
      position: 'relative',
      display: 'flex',
      paddingTop: insets.top,
      paddingBottom: 30
    },

    colorsContainer: {
      position: 'absolute',
      flexDirection: 'row',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }
  }
}
</script>
