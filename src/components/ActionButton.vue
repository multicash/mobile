<template>
  <touchable-opacity
    class="action-button"
    :active-opacity="0.6"
    :style="{ shadowOffset: { width: 3, height: 3 }}"
    :on-press="() => $emit('on-press')"
  >
    <image
      v-if="icon"
      class="action-button-icon"
      :source="icon"
    />
    <view v-if="icon && title" class="action-button-gap"/>
    <text v-if="title" class="action-button-title">
      {{ title }}
    </text>
  </touchable-opacity>
</template>

<style>
  .action-button {
    display: flex;
    flex: 1;
    height: 150px;
    background-color: white;
    border-radius: 20px;
    shadow-color: #c0c0ff;
    shadow-radius: 5px;
    shadow-opacity: 0.5;
    elevation: 10;
    justify-content: center;
    align-items: center;
    padding: 30px;
  }

  .action-button-icon {
    width: 55px;
    height: 55px;
    resize-mode: contain;
  }

  .action-button-title {
    font-size: 17px;
    font-weight: 600;
  }

  .action-button-gap {
    height: 20px;
  }
</style>

<script>
  export default {
    name: 'ActionButton',

    props: {
      title: {
        type: String,
        default: null
      },
      icon: {
        default: null
      }
    }
  }
</script>
