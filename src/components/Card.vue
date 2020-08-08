<template>
  <view :style="styles.card">
    <slot/>
  </view>
</template>

<style>

</style>

<script>
import { cards } from './../styles'

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
      ...cards(isDarkScheme)
    }
  }
}
</script>
