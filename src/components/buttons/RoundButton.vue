<template>
  <view
    :style="styles.roundButtonOuter"
  >
    <touchable-opacity
      :style="styles.roundButton"
      :on-press="pressed"
      :on-long-press="pressedLong"
      :active-opacity="0.6"
    >
      <view :style="styles.content">
        <slot/>
      </view>
    </touchable-opacity>
  </view>
</template>

<script>
export default {
  name: 'RoundButton',

  props: {
    transparentShadow: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    styles () {
      return stylesStore(this.isDarkScheme, this.transparentShadow)
    }
  },

  methods: {
    pressed () {
      this.$emit('on-press')
    },

    pressedLong () {
      this.$emit('on-long-press')
    }
  }
}

const stylesStore = (isDarkScheme, transparentShadow) => {
  return {
    roundButtonOuter: {
      borderRadius: 18,
      shadowColor: isDarkScheme ? '#494971' : 'white',
      shadowRadius: 2,
      elevation: 10,
      shadowOffset: { width: -2, height: -2 },
      shadowOpacity: transparentShadow ? 0.4 : 0
    },

    roundButton: {
      backgroundColor: isDarkScheme ? 'black' : '#d4d4de',
      width: 36,
      height: 36,
      borderRadius: 18,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: isDarkScheme ? 'black' : '#c0c0ff',
      shadowRadius: 2,
      shadowOffset: { width: 2, height: 2 },
      shadowOpacity: transparentShadow ? 0.4 : 0
    },

    content: {
      width: 36,
      height: 36,
      backgroundColor: 'transparent',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
  }
}
</script>
