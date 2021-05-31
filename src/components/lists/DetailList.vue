<template>
  <view :style="styles.detailListContainer">
    <slot/>
  </view>
</template>

<script>
export default {
  name: 'DetailList',

  computed: {
    styles () {
      return stylesStore(this.isDarkScheme)
    }
  }
}

const stylesStore = (isDarkScheme) => {
  return {
    detailListContainer: {
      width: '100%',
      backgroundColor: isDarkScheme ? '#191a20' : 'white',
      borderRadius: 15,
      padding: 20
    }
  }
}
</script>
