<template>
  <modal
    animation-type="slide"
    presentation-style="formSheet"
    :visible="visible"
    :on-request-close="() => $emit('update:visible', false)"
    :on-dismiss="() => $emit('update:visible', false)"
  >
    <status-bar bar-style="light-content" />
    <view
      :style="styles.modal"
    >
      <slot/>
    </view>
  </modal>
</template>

<script>
export default {
  name: 'ViewModal',

  props: {
    visible: {
      type: Boolean,
      required: true
    }
  },

  computed: {
    styles () {
      return stylesStore(this.isDarkScheme)
    }
  }
}

const stylesStore = (isDarkScheme) => {
  return {
    modal: {
      flex: 1,
      backgroundColor: isDarkScheme ? '#222429' : '#ededf3'
    }
  }
}
</script>
