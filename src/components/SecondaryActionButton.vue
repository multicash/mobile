<template>
  <touchable-opacity
    :style="styles.actionButton"
    :active-opacity="0.6"
    :on-press="() => $emit('on-press')"
  >
    <slot>
      <view :style="styles.actionButtonContainer">
        <icon v-if="icon" :name="icon" :style="{ marginRight: title ? 5 : 0 }"/>
        <text :style="styles.title">{{ title }}</text>
      </view>
    </slot>
  </touchable-opacity>
</template>

<script>
import { cards, text } from './../styles'

export default {
  name: 'SecondaryActionButton',

  props: {
    title: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: null
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
    actionButton: {
      ...cards(isDarkScheme),
      backgroundColor: 'transparent',
      padding: 0
    },

    actionButtonContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row'
    },

    title: {
      color: text(isDarkScheme).color
    }
  }
}
</script>
