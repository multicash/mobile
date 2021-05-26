<template>
  <view :style="styles.container">
    <colors-background v-if="colorsBackground" />
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
    },

    colorsBackground: {
      type: Boolean,
      default: true
    }
  },

  computed: {
    styles () {
      return stylesStore(this.isDarkScheme, this.insets, this.expand)
    }
  }
}

const stylesStore = (isDarkScheme, insets, expand) => {
  return {
    container: {
      flex: expand ? 1 : undefined,
      backgroundColor: isDarkScheme ? '#2c2e36' : '#ededf3',
      shadowBlur: 10,
      shadowRadius: 10,
      shadowOpacity: 0.1,
      shadowColor: '#000000',
      marginTop: -insets.top
    },

    contentContainer: {
      position: 'relative',
      paddingTop: insets.top,
      paddingBottom: 10,
      justifyContent: 'center',
      height: expand ? '100%' : undefined
    },

    colorsContainer: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }
  }
}
</script>
