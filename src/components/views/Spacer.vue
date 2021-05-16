<template>
  <view :style="styles.spacer"/>
</template>

<script>
export default {
  name: 'Spacer',

  props: {
    stretch: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    styles () {
      return styleStore(this.isDarkScheme, this.stretch)
    }
  }
}

const styleStore = (isDarkScheme, stretch) => {
  return {
    spacer: {
      width: 20,
      height: 20,
      flex: stretch ? 1 : undefined
    }
  }
}
</script>
