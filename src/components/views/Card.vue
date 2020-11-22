<template>
  <view :style="styles.card">
    <slot/>
  </view>
</template>

<script>
import { cards } from '@/styles'

export default {
  name: 'Card',

  props: {
    backgroundColor: {
      type: String,
      default: null
    }
  },

  computed: {
    styles () {
      return stylesStore(this.isDarkScheme, this.backgroundColor)
    }
  }
}

const stylesStore = (isDarkScheme, backgroundColor) => {
  return {
    card: {
      ...cards(isDarkScheme),
      backgroundColor: backgroundColor || (isDarkScheme ? '#464955' : '#f1f1f1'),
      shadowOpacity: 0.1,
      elevation: 1,
      borderRadius: 10
    }
  }
}
</script>
