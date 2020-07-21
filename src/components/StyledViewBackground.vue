<template>
  <image-background
    class="background"
    :source="require('./../assets/background.png')"
    resizeMode="stretch"
  >
    <!-- :source="require('./../assets/background-colors.png')" -->
    <image-background
      resizeMode="stretch"
    >
      <status-bar bar-style="dark-content" />
      <safe-area-view class="safe-area">
        <slot />
      </safe-area-view>
    </image-background>
  </image-background>
</template>

<style>
  .background {
    background-color: white;
  }

  .safe-area {
    background-color: transparent;
    height: 100%;
  }
</style>

<script>
  export default {
    name: 'StyledViewBackground'
  }
</script>
