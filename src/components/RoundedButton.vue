<template>
  <view
    class="rounded-button-outer"
    :style="{ shadowOffset: { width: -3, height: -3 }}"
  >
    <touchable-opacity
      class="rounded-button"
      :on-press="dismiss"
      :style="{ shadowOffset: { width: 3, height: 3 }, flexDirection: 'row'}"
    >
      <slot>
        <text>{{ title }}</text>
      </slot>
    </touchable-opacity>
  </view>
</template>

<style>
  .rounded-button-outer {
    border-radius: 10px;
    shadow-color: #ecf3d2;
    shadow-radius: 3px;
    shadow-opacity: 1;
    elevation: 10;
  }

  .rounded-button {
    background-color: #f8f8f8;
    min-width: 36px;
    height: 36px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
    shadow-color: #c0c0ff;
    shadow-radius: 3px;
    shadow-opacity: 0.5;
  }

  .rounded-button text {
    color: #1e1e4d;
    font-weight: bold;
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
