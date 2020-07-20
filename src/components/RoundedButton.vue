<template>
  <view
    class="rounded-button-outer"
    :style="{ shadowOffset: { width: -3, height: -3 }}"
  >
    <touchable-opacity
      class="rounded-button"
      :on-press="dismiss"
      :style="{ shadowOffset: { width: 3, height: 3 }}"
    >
      <slot/>
    </touchable-opacity>
  </view>
</template>

<style>
  .rounded-button-outer {
    border-radius: 18px;
    shadow-color: #f4ecec;
    shadow-radius: 3px;
    shadow-opacity: 1;
  }

  .rounded-button {
    background-color: white;
    min-width: 36px;
    height: 36px;
    border-radius: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
    shadow-color: #c0c0ff;
    shadow-radius: 3px;
    shadow-opacity: 0.5;
  }
</style>

<script>
  export default {
    name: 'RoundedButton',

    methods: {
      dismiss () {
        this.$emit('on-dismiss')
      }
    }
  }
</script>
