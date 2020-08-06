<template>
  <view
    class="round-button-outer"
    :style="{ shadowOffset: { width: -3, height: -3 }, shadowOpacity: transparentShadow ? 0.4 : 1 }"
  >
    <touchable-opacity
      class="round-button"
      :class="{'round-button-transparent': transparentShadow}"
      :on-press="pressed"
      :style="{
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: transparentShadow ? 0.4 : 1,
        paddingTop: extraPadding,
        paddingLeft: extraPadding
      }"
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
  }
</style>

<script>
import { Platform } from 'react-native'

export default {
  name: 'RoundButton',

  props: {
    transparentShadow: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    extraPadding () {
      return Platform.OS === 'ios' ? 1 : 0
    }
  },

  methods: {
    pressed () {
      this.$emit('on-press')
    }
  }
}
</script>
