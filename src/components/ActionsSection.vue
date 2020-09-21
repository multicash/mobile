<template>
  <view-section title="Actions" title-color="white">
    <view class="actions">
      <action-button
        title="Pay"
        :icon="require('@/assets/send.png')"
        @on-press="payModalVisible = true"
      />

      <view-modal :visible.sync="payModalVisible">
        <pay-view/>
      </view-modal>

      <spacer/>

      <action-button
        title="Receive"
        :icon="require('@/assets/receive.png')"
        @on-press="receiveModalVisible = true"
      />

      <view-modal :visible.sync="receiveModalVisible">
        <receive-view />
      </view-modal>
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
import Spacer from '@/components/Spacer'
import ViewSection from '@/components/ViewSection'
import ActionButton from '@/components/ActionButton'
import PayView from '@/views/pay/PayView'
import ReceiveView from '@/views/receive/ReceiveView'
import ViewModal from '@/components/ViewModal'

export default {
  name: 'ActionsSection',

  components: { ViewModal, ReceiveView, PayView, ActionButton, ViewSection, Spacer },

  data () {
    return {
      payModalVisible: false,
      receiveModalVisible: false
    }
  }
}
</script>
