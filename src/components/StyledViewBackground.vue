<template>
  <image-background
    :style="styles.background"
    :source="isDarkScheme ? null : require('./../assets/background-light.png')"
  >
    <image-background
      :imageStyle="styles.headerStyle"
     :source="require('./../assets/background-header.png')"
    >
      <status-bar bar-style="light-content" />
      <safe-area-view :style="styles.safeArea">
        <slot />
      </safe-area-view>
    </image-background>
  </image-background>
</template>

<script>
export default {
  name: 'StyledViewBackground',

  computed: {
    styles () {
      return stylesStore(this.isDarkScheme)
    }
  }
}

const stylesStore = (isDarkScheme) => {
  return {
    background: {
      backgroundColor: isDarkScheme ? '#0c0c0c' : 'white',
      resizeMode: 'stretch'
    },
    headerStyle: {
      resizeMode: 'stretch',
      width: '100%',
      height: 250
    },
    safeArea: {
      backgroundColor: 'transparent',
      height: '100%'
    }
  }
}
</script>
