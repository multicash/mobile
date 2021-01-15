<template>
  <view :style="styles.container">
    <colors-background random-heights/>
    <view :style="styles.contentContainer">
      <slot />
    </view>
  </view>
</template>

<script>
export default {
  name: 'AppHeaderView',

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
