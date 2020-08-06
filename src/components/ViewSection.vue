<template>
  <view class="section">
    <text
      v-if="title !== ''"
      class="section-title"
      :style="{ color: titleColor }"
    >
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
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 10px;
  }
</style>

<script>
export default {
  name: 'ViewSection',

  props: {
    title: {
      type: String,
      default: ''
    },

    titleColor: {
      type: String,
      default: 'black'
    }
  }
}
</script>
