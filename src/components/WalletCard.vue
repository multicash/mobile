<template>
  <touchable-opacity
    class="wallet-card"
    :active-opacity="0.6"
    :on-press="() => modalVisible = true"
    :style="{shadowOffset: {width: 3, height: 3}}"
  >
    <view class="wallet-card-header">
      <icon :name="wallet.icon" :size="30"/>

      <text
        class="wallet-card-name"
        adjusts-font-size-to-fit
        :minimumFontScale="0.01"
      >
        {{ wallet.name }}
      </text>
    </view>

    <view class="money-view">
      <text
        class="wallet-card-amount"
        adjusts-font-size-to-fit
        :minimumFontScale="0.01"
      >
        {{ wallet.amount }}
      </text>
      <text :style="{ marginLeft: 10 }">MXC</text>
    </view>

    <view class="money-view">
      <text :style="{ marginRight: 5, color: '#931A5A' }">€</text>
      <text
        class="wallet-card-fiat-amount"
        adjusts-font-size-to-fit
        :minimumFontScale="0.01"
      >
        {{ wallet.amount / 200 }}
      </text>
    </view>

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

  .wallet-card-header {
    display: flex;
    align-items: center;
    flex-direction: row;
    margin-bottom: 10px;
  }

  .wallet-card-name {
    margin-left: 10px;
    font-size: 15px;
    font-weight: 600;
    line-height: 30px;
  }

  .money-view {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .wallet-card-amount {
    font-size: 35px;
    font-weight: bold;
  }

  .wallet-card-fiat-amount {
    color: #931A5A;
    font-size: 15px;
    font-weight: 600;
  }
</style>

<script>
import WalletView from '../views/WalletView'
import ViewModal from './ViewModal'

export default {
  name: 'WalletCard',
  components: { ViewModal, WalletView },

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
