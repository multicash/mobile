<template>
  <modal
    animation-type="slide"
    presentation-style="formSheet"
    :visible="visible"
    :on-request-close="() => $emit('update:visible', false)"
    :on-dismiss="() => $emit('update:visible', false)"
  >
    <slot/>
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
    }
  }
</script>
