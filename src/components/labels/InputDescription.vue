<template>
  <text :style="styles.description">
    <slot>{{ label }}</slot>
  </text>
</template>

<script>
export default {
  name: 'InputDescription',

  props: {
    label: {
      type: String
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
    description: {
      color: isDarkScheme ? '#c0c0c0' : '#343434',
      marginBottom: 10,
      marginHorizontal: 5,
      fontSize: 12
    }
  }
}
</script>
