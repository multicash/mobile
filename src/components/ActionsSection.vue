<template>
  <section title="Actions">
    <view class="actions">
      <action-button title="Pay" :icon="require('./../assets/send.png')"/>
      <spacer/>
      <action-button title="Receive" :icon="require('./../assets/receive.png')"/>
    </view>
  </section>
</template>

<style>
  .actions {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
</style>

<script>
  import Spacer from './Spacer'
  import Section from './Section'
  import ActionButton from './ActionButton'

  export default {
    name: 'ActionsSection',
    components: {ActionButton, Section, Spacer}
  }
</script>
