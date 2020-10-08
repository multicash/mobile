<template>
  <view :style="styles.roundedButtonOuter">
    <touchable-opacity
      :on-press="pressed"
      :style="styles.roundedButton"
      :active-opacity="0.6"
    >
      <slot>
        <icon
          v-if="icon"
          :style="styles.roundedButtonIcon"
          :name="icon"
          :color="isDarkScheme ? '#6d6de3' : '#1e1e4d'"
          :size="20"
        />
        <text :style="styles.roundedButtonText">{{ title }}</text>
      </slot>
    </touchable-opacity>
  </view>
</template>

<script>
export default {
  name: 'RoundedButton',

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

    icon: {
      type: String,
      default: null
    },

    style: {
      type: Array,
      default: function () {
        return []
      }
    }
  },

  computed: {
    styles () {
      const innerStyle = this.style[0] || {}

      return stylesStore(this.isDarkScheme, innerStyle)
    }
  }
}

const stylesStore = (isDarkScheme, innerStyle) => {
  return {
    roundedButtonOuter: {
      borderRadius: 10,
      shadowColor: isDarkScheme ? '#494971' : 'white',
      shadowRadius: 3,
      shadowOpacity: 0.2,
      shadowOffset: { width: -3, height: -3 },
      elevation: 10
    },

    roundedButton: {
      backgroundColor: isDarkScheme ? 'black' : '#f8f8f8',
      minWidth: 36,
      height: innerStyle.height || 50,
      borderRadius: 10,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      paddingLeft: 20,
      paddingRight: 20,
      shadowColor: isDarkScheme ? 'black' : '#c0c0ff',
      shadowRadius: 3,
      shadowOpacity: 0.5,
      shadowOffset: { width: 3, height: 3 },
      flexDirection: 'row'
    },

    roundedButtonIcon: {
      marginRight: 10
    },

    roundedButtonText: {
      color: isDarkScheme ? '#6d6de3' : '#1e1e4d',
      fontWeight: 'bold',
      fontSize: 15
    }
  }
}
</script>
