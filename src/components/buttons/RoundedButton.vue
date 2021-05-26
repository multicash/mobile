<template>
  <view :style="styles.roundedButtonOuter">
    <touchable-opacity
      :on-press="pressed"
      :style="styles.roundedButton"
      :active-opacity="disabled ? 1 : 0.6"
    >
      <slot>
        <icon
          v-if="icon"
          :style="styles.roundedButtonIcon"
          :name="icon"
          :color="styles.roundedButtonText.color"
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
      if (this.disabled) {
        return
      }

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
    },

    disabled: {
      type: Boolean,
      default: false
    },

    type: {
      type: String,
      default: null
    }
  },

  computed: {
    styles () {
      const innerStyle = this.style[0] || {}

      return stylesStore(this.isDarkScheme, innerStyle, this.disabled, this.type)
    }
  }
}

const stylesStore = (isDarkScheme, innerStyle, disabled, type) => {
  let backgroundColor = isDarkScheme
    ? (disabled ? '#1b1d1d' : 'black')
    : (disabled ? '#f4f4f4' : '#f8f8f8')
  let color = disabled ? '#868686' : (isDarkScheme ? '#6d6de3' : '#3b3b89')

  switch (type) {
    case 'primary':
      backgroundColor = disabled ? (isDarkScheme ? '#3d3d3d' : '#868686') : (isDarkScheme ? '#6d6de3' : '#3b3b89')
      color = disabled ? (isDarkScheme ? '#9c9c9c' : '#cecece') : 'white'
  }

  return {
    roundedButtonOuter: {
      borderRadius: 10
    },

    roundedButton: {
      backgroundColor: backgroundColor,
      minWidth: 36,
      height: innerStyle.height || 50,
      borderRadius: 10,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      paddingLeft: 20,
      paddingRight: 20,
      flexDirection: 'row'
    },

    roundedButtonIcon: {
      marginRight: 10
    },

    roundedButtonText: {
      color: color,
      fontWeight: 'bold',
      fontSize: 15
    }
  }
}
</script>
