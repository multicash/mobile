<template>
  <view
    class="round-button-outer"
    :style="{ shadowOffset: { width: -3, height: -3 }}"
  >
    <touchable-opacity
      class="round-button"
      :on-press="dismiss"
      :style="{ shadowOffset: { width: 3, height: 3 }}"
    >
      <slot/>
    </touchable-opacity>
  </view>
</template>

<style>
  .round-button-outer {
    width: 30px;
    height: 30px;
    border-radius: 15px;
    shadow-color: white;
    shadow-radius: 3px;
    shadow-opacity: 1;
  }

  .round-button {
    background-color: #e4e4ec;
    width: 30px;
    height: 30px;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    shadow-color: #c0c0ff;
    shadow-radius: 3px;
    shadow-opacity: 1;
  }
</style>

<script>
  export default {
    name: 'RoundButton',

    methods: {
      dismiss () {
        this.$emit('on-dismiss')
      }
    }
  }
</script>
