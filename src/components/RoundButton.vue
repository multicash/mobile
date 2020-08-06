<template>
  <view
    class="round-button-outer"
    :style="{ shadowOffset: { width: -3, height: -3 }}"
  >
    <touchable-opacity
      class="round-button"
      :on-press="pressed"
      :style="{ shadowOffset: { width: 3, height: 3 }}"
    >
      <slot/>
    </touchable-opacity>
  </view>
</template>

<style>
  .round-button-outer {
    border-radius: 18px;
    shadow-color: white;
    shadow-radius: 3px;
    shadow-opacity: 1;
    elevation: 10;
  }

  .round-button {
    background-color: #e4e4ec;
    width: 36px;
    height: 36px;
    border-radius: 18px;
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
    pressed () {
      this.$emit('on-press')
    }
  }
}
</script>
