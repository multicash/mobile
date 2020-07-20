<template>
  <view class="view-background">
    <slot/>
  </view>
</template>

<style>
  .view-background {
    height: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
  }
</style>

<script>
  export default {
    name: 'ViewBackground'
  }
</script>
