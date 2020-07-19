<template>
  <view class="section">
    <text v-if="title !== ''" class="section-title">
      {{ title }}
    </text>
    <slot />
  </view>
</template>

<style>
  .section {
    display: flex;
    margin-vertical: 20px;
  }

  .section-title {
    font-size: 16;
    font-weight: 600;
    margin-bottom: 10px;
  }
</style>

<script>
  export default {
    name: 'Section',

    props: {
      title: {
        type: String,
        default: ''
      }
    }
  }
</script>
