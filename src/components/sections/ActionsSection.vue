<template>
  <view-section title="Actions">
    <view class="actions">
      <action-button
        title="Pay"
        :icon="require('@/assets/send.png')"
        @on-press="$emit('pay')"
      />

      <spacer/>

      <action-button
        title="Receive"
        :icon="require('@/assets/receive.png')"
        @on-press="$emit('receive')"
      />
    </view>
  </view-section>
</template>

<style>
  .actions {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
</style>

<script>
export default {
  name: 'ActionsSection'
}
</script>
