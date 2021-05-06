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
    },
    type: {
      type: String,
      default: null
    }
  },

  computed: {
    styles () {
      return stylesStore(this.isDarkScheme, this.type)
    }
  }
}

const stylesStore = (isDarkScheme, type) => {
  let typeBackgroundColor = cards(isDarkScheme).backgroundColor
  let typeTextColor = isDarkScheme ? 'white' : 'black'

  switch (type) {
    case 'success':
      typeBackgroundColor = '#00ae5a'
      typeTextColor = 'white'
      break
    case 'warning':
      typeBackgroundColor = '#ffdd57'
      typeTextColor = '#3b3b3b'
      break
    case 'primary':
      typeBackgroundColor = '#00b0ee'
      typeTextColor = 'white'
      break
    case 'secondary':
      typeBackgroundColor = '#f744e4'
      typeTextColor = 'white'
      break
    default:
      break
  }

  return {
    actionButton: {
      ...cards(isDarkScheme),
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 20,
      paddingHorizontal: 35,
      minWidth: 130,
      backgroundColor: typeBackgroundColor
    },

    actionButtonIcon: {
      width: 50,
      height: 50,
      resizeMode: 'contain'
    },

    actionButtonTitle: {
      color: typeTextColor,
      fontSize: 17,
      fontWeight: '600'
    },

    actionButtonGap: {
      height: 20
    }
  }
}
</script>
