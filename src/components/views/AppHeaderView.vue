<template>
  <view :style="styles.container">
    <view :style="styles.colorsContainer">
      <view
        v-for="color in colors"
        :key="color"
        :style="{
          flex: 1,
          width: '100%',
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
    }
  },

  data () {
    return {
      colors: [
        '#270D22',
        '#3D1032',
        '#5D1246',
        '#77124D',
        '#8B1760',
        '#B11D76',
        '#CE3B94',
        '#E565B4'
      ]
    }
  },

  computed: {
    styles () {
      return stylesStore(this.isDarkScheme, this.insets)
    }
  }
}

const stylesStore = (isDarkScheme, insets) => {
  return {
    container: {
      backgroundColor: 'transparent',
      marginTop: -insets.top,
      shadowColor: isDarkScheme ? 'black' : '#c0c0ff',
      shadowRadius: 5,
      shadowOpacity: 0.5,
      shadowOffset: { width: 3, height: 3 },
      elevation: 10,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      overflow: 'hidden'
    },

    contentContainer: {
      paddingTop: insets.top
    },

    colorsContainer: {
      position: 'absolute',
      flexDirection: 'column',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }
  }
}
</script>
