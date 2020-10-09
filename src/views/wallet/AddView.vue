<template>
  <view-background no-padding>
    <modal-navigation
      title="Add wallet"
      has-close-button
      @on-dismiss="navigation.goBack()"
    />
  </view-background>
</template>

<script>
export default {
  name: 'AddView'
}
</script>
