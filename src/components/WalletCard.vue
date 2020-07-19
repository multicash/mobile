<template>
  <touchable-opacity
    class="wallet-card"
    :active-opacity="0.6"
    :on-press="openModal"
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

    <modal
      animation-type="slide"
      presentation-style="formSheet"
      :visible="modalVisible"
      :on-request-close="closedModal"
      :on-dismiss="closedModal"
    >
      <wallet-view
        :wallet="wallet"
        :on-dismiss="closedModal"
      />
    </modal>

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
    shadow-color: black;
    shadow-radius: 15px;
    shadow-opacity: 0.05;
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

  export default {
    name: 'WalletCard',
    components: {WalletView},

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
    },

    methods: {
      openModal () {
        this.modalVisible = true
      },

      closedModal () {
        this.modalVisible = false
      }
    }
  }
</script>
