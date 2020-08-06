<template>
  <image-background
    class="background"
    :source="require('./../assets/background.png')"
    resizeMode="stretch"
  >
    <image-background
      :imageStyle="{
        resizeMode: 'stretch',
        width: '100%',
        height: 250
    }"
     :source="require('./../assets/background-header.png')"
    >
      <status-bar bar-style="light-content" />
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
