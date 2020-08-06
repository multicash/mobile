<template>
  <view-section title="Actions" title-color="white">
    <view class="actions">
      <action-button
        title="Pay"
        :icon="require('./../assets/send.png')"
        @on-press="payModalVisible = true"
      />

      <view-modal :visible.sync="payModalVisible">
        <pay-view/>
      </view-modal>

      <spacer/>

      <action-button
        title="Receive"
        :icon="require('./../assets/receive.png')"
        @on-press="receiveModalVisible = true"
      />
    </view>

    <view-modal :visible.sync="receiveModalVisible">
      <receive-view />
    </view-modal>
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
import Spacer from './Spacer'
import ViewSection from './ViewSection'
import ActionButton from './ActionButton'
import PayView from '../views/PayView'
import ReceiveView from '../views/ReceiveView'
import ViewModal from './ViewModal'

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
