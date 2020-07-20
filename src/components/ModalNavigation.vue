<template>
  <view class="modal-navigation">
    <view>
      <text v-if="title" class="modal-navigation-title">
        {{ title }}
      </text>
    </view>
    <round-button
      v-if="hasCloseButton"
      @on-dismiss="dismiss"
    >
      <text>X</text>
    </round-button>
  </view>
</template>

<style>
  .modal-navigation {
    background-color: #ededf3;
    display: flex;
    padding: 20px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    shadow-color: rgba(30, 30, 74, 1);
    shadow-radius: 10;
    shadow-opacity: 0.3;
  }

  .modal-navigation-title {
    font-weight: 600;
    font-size: 18px;
  }
</style>

<script>
  import RoundButton from './RoundButton'
  export default {
    name: 'ModalNavigation',
    components: {RoundButton},
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
