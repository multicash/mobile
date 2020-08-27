<template>
  <view :style="styles.viewBackground">
    <slot/>
  </view>
</template>

<script>
export default {
  name: 'ViewBackground',

  computed: {
    styles () {
      return stylesStore()
    }
  }
}

const stylesStore = () => {
  return {
    viewBackground: {
      flex: 1,
      padding: 20,
      flexDirection: 'column'
    }
  }
}
</script>
