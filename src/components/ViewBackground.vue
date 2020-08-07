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
      height: '100%',
      padding: 20,
      display: 'flex',
      flexDirection: 'column'
    }
  }
}
</script>
