<template>
  <view :style="styles.card">
    <slot/>
  </view>
</template>

<script>
import { cards } from '.@/styles'

export default {
  name: 'Card',

  computed: {
    styles () {
      return stylesStore(this.isDarkScheme)
    }
  }
}

const stylesStore = (isDarkScheme) => {
  return {
    card: {
      ...cards(isDarkScheme),
      backgroundColor: isDarkScheme ? '#464955' : '#f1f1f1',
      shadowOpacity: 0.1,
      elevation: 1,
      borderRadius: 10
    }
  }
}
</script>
