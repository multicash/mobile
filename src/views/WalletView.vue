<template>
  <view>
    <status-bar bar-style="light-content" />
    <modal-navigation
      :title="wallet.name"
      has-close-button
      @on-dismiss="dismiss"
    />
    <view class="wallet-container">
      <text class="wallet-amount">
        {{ wallet.amount }}
      </text>
    </view>
  </view>
</template>

<style>
  .wallet-container {
    padding: 20px;
  }

  .wallet-amount {
    font-size: 30px;
    font-weight: bold;
  }
</style>

<script>
  import ModalNavigation from '../components/ModalNavigation'

  export default {
    name: 'WalletView',
    components: {ModalNavigation},
    props: {
      wallet: {
        type: Object,
        required: true
      },
      onDismiss: {
        type: Function,
        required: true
      }
    },
    methods: {
      dismiss () {
        this.onDismiss()
      }
    }
  }
</script>
