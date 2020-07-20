<template>
  <view>
    <status-bar bar-style="light-content" />
    <modal-navigation
      :title="wallet.name"
      has-close-button
      @on-dismiss="dismiss"
    />
    <view-background>
      <text class="wallet-amount">
        {{ wallet.amount }}
      </text>

      <rounded-button>
        <text>Hello World</text>
      </rounded-button>
    </view-background>
  </view>
</template>

<style>
  .wallet-amount {
    font-size: 30px;
    font-weight: bold;
  }
</style>

<script>
  import ModalNavigation from '../components/ModalNavigation'
  import RoundedButton from '../components/RoundedButton'
  import ViewBackground from '../components/ViewBackground'

  export default {
    name: 'WalletView',
    components: {ViewBackground, RoundedButton, ModalNavigation},
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
