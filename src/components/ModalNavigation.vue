<template>
  <view class="modal-navigation">
    <view>
      <text v-if="title" class="modal-navigation-title">
        {{ title }}
      </text>
    </view>
    <touchable-opacity
      v-if="hasCloseButton"
      class="modal-navigation-close-button"
      :on-press="dismiss"
    >
<!--      <svg-uri :width="25" :height="25" :source="require('./../assets/close.svg')"/>-->
    </touchable-opacity>
  </view>
</template>

<style>
  .modal-navigation {
    background-color: white;
    display: flex;
    padding: 20px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    shadow-color: black;
    shadow-radius: 15px;
    shadow-opacity: 0.05;
  }

  .modal-navigation-title {
    font-weight: 600;
    font-size: 15px;
  }

  .modal-navigation-close-button {
    background-color: lightgrey;
    width: 30px;
    height: 30px;
    border-radius: 15px;
  }
</style>

<script>
  export default {
    name: 'ModalNavigation',

    props: {
      title: {
        type: String,
        default: null
      },
      hasCloseButton: {
        type: Boolean,
        default: true
      }
    },

    methods: {
      dismiss () {
        this.$emit('on-dismiss')
      }
    }
  }
</script>
