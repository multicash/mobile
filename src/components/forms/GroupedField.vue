<template>
  <view :style="styles.groupedField">
    <slot />
  </view>
</template>

<script>
export default {
  name: 'GroupedField',

  computed: {
    styles () {
      return styleStore(this.isDarkScheme)
    }
  }
}

const styleStore = (isDarkScheme) => {
  return {
    groupedField: {
      flexDirection: 'row'
    }
  }
}
</script>
