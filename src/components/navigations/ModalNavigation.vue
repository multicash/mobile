<template>
  <view :style="styles.modalNavigation">
    <round-button
      v-if="hasCloseButton || hasBackButton"
      @on-press="$emit('on-dismiss')"
    >
      <icon v-if="hasCloseButton" name="close" />
      <icon v-if="hasBackButton" name="chevron-back" />
    </round-button>
    <view>
      <text v-if="title" :style="styles.modalNavigationTitle">
        {{ title }}
      </text>
    </view>
    <slot name="right"/>
  </view>
</template>

<script>
import { text } from '@/styles'

export default {
  name: 'ModalNavigation',

  props: {
    title: {
      type: String,
      default: null
    },
    hasCloseButton: {
      type: Boolean,
      default: false
    },
    hasBackButton: {
      type: Boolean,
      default: false
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
    modalNavigation: {
      backgroundColor: isDarkScheme ? '#2c2e36' : '#ededf3',
      display: 'flex',
      padding: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      shadowBlur: 10,
      shadowRadius: 10,
      shadowOpacity: 0.2,
      shadowColor: '#000000',
      zIndex: 1
    },

    modalNavigationTitle: {
      color: text(isDarkScheme).color,
      fontWeight: 'bold',
      fontSize: 25
    }
  }
}
</script>
