<template>
  <touchable-opacity
    :on-press="pressed"
    :style="styles.linkButton"
    :active-opacity="0.6"
  >
    <slot>
      <text :style="styles.linkButtonText">{{ title }}</text>
    </slot>
  </touchable-opacity>
</template>

<script>
export default {
  name: 'LinkButton',

  methods: {
    pressed () {
      this.$emit('on-press')
    }
  },

  props: {
    title: {
      type: String,
      default: null
    },

    style: {
      type: Array,
      default: function () {
        return []
      }
    },

    textStyle: {
      type: Object
    }
  },

  computed: {
    styles () {
      const innerStyle = this.style[0] || {}
      const textStyle = this.textStyle || {}

      return stylesStore(this.isDarkScheme, innerStyle, textStyle)
    }
  }
}

const stylesStore = (isDarkScheme, innerStyle, textStyle) => {
  return {
    linkButton: {
      minWidth: 36,
      height: innerStyle.height || 50,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      paddingLeft: 20,
      paddingRight: 20,
      flexDirection: 'row'
    },

    linkButtonText: {
      color: isDarkScheme ? '#6d6de3' : '#1e1e4d',
      fontWeight: 'bold',
      fontSize: 15,
      ...textStyle
    }
  }
}
</script>
