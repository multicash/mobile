<template>
  <view :style="styles.spacer"/>
</template>

<script>
export default {
  name: 'Spacer',

  props: {
    small: {
      type: Boolean,
      default: false
    },

    stretch: {
      type: Boolean,
      default: false
    },

    large: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    styles () {
      return styleStore(this.isDarkScheme, this.small, this.large, this.stretch)
    }
  }
}

const styleStore = (isDarkScheme, small, large, stretch) => {
  return {
    spacer: {
      width: small ? 10 : (large ? 40 : 20),
      height: small ? 10 : (large ? 40 : 20),
      flex: stretch ? 1 : undefined
    }
  }
}
</script>
