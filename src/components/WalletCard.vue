<template>
  <touchable-opacity
    class="wallet-card"
    :active-opacity="0.6"
    :on-press="() => modalVisible = true"
    :style="{shadowOffset: {width: 3, height: 3}}"
  >
    <text
      class="wallet-card-name"
      adjusts-font-size-to-fit
      :minimumFontScale="0.01"
    >
      {{ wallet.name }}
    </text>
    <text
      class="wallet-card-amount"
      adjusts-font-size-to-fit
      :minimumFontScale="0.01"
    >
      {{ wallet.amount }}
    </text>

    <view-modal :visible.sync="modalVisible">
      <wallet-view :wallet="wallet"/>
    </view-modal>

  </touchable-opacity>
</template>

<style>
  .wallet-card {
    display: flex;
    flex: 1;
    height: 100%;
    min-width: 250px;
    background-color: white;
    border-radius: 20px;
    shadow-color: #c0c0ff;
    shadow-radius: 5px;
    shadow-opacity: 0.5;
    elevation: 10;
    padding: 20px;
  }

  .wallet-card-name {
    font-size: 15px;
    font-weight: 600;
    line-height: 30px;
  }

  .wallet-card-amount {
    font-size: 35px;
    font-weight: bold;
  }
</style>

<script>
  import WalletView from '../views/WalletView'
  import ViewModal from './ViewModal'

  export default {
    name: 'WalletCard',
    components: {ViewModal, WalletView},

    props: {
      wallet: {
        type: Object,
        required: true
      }
    },

    data () {
      return {
        modalVisible: false
      }
    }
  }
</script>
