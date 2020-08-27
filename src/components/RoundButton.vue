<template>
  <view
    :style="styles.roundButtonOuter"
  >
    <touchable-opacity
      :style="styles.roundButton"
      :on-press="pressed"
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
    }
  }
}

const stylesStore = (isDarkScheme, transparentShadow) => {
  return {
    roundButtonOuter: {
      borderRadius: 18,
      shadowColor: isDarkScheme ? '#494971' : 'white',
      shadowRadius: 3,
      elevation: 10,
      shadowOffset: { width: -3, height: -3 },
      shadowOpacity: transparentShadow ? 0.4 : 1
    },

    roundButton: {
      backgroundColor: isDarkScheme ? 'black' : '#e4e4ec',
      width: 36,
      height: 36,
      borderRadius: 18,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: isDarkScheme ? 'black' : '#c0c0ff',
      shadowRadius: 3,
      shadowOffset: { width: 3, height: 3 },
      shadowOpacity: transparentShadow ? 0.4 : 1
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
