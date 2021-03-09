<template>
  <touchable-opacity
    :style="styles.actionButton"
    :active-opacity="0.6"
    :on-press="() => $emit('on-press')"
  >
    <image
      v-if="icon"
      :style="styles.actionButtonIcon"
      :source="icon"
    />
    <view v-if="icon && title" :style="styles.actionButtonGap"/>
    <text v-if="title" :style="styles.actionButtonTitle">
      {{ title }}
    </text>
  </touchable-opacity>
</template>

<script>
import { cards } from '@/core/support/styles'

export default {
  name: 'ActionButton',

  props: {
    title: {
      type: String,
      default: null
    },
    icon: {
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
      flex: 1,
      height: 150,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 30
    },

    actionButtonIcon: {
      width: 55,
      height: 55,
      resizeMode: 'contain'
    },

    actionButtonTitle: {
      color: isDarkScheme ? 'white' : 'black',
      fontSize: 17,
      fontWeight: '600'
    },

    actionButtonGap: {
      height: 20
    }
  }
}
</script>
