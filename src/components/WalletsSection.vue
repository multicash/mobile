<template>
  <section class="flex-grow" title="Wallets">
    <scroll-view
      class="wallets"
      horizontal
      :showsHorizontalScrollIndicator="false"
    >
      <view class="wallets-container">
        <wallet-card
          v-for="(wallet, i) in wallets"
          :key="wallet.name"
          :wallet="wallet"
          :style="{
            marginRight: (i === wallets.length - 1) ? 0 : 20,
          }"
          containerContentStyle="space-between"
        />
      </view>
    </scroll-view>
  </section>
</template>

<style>
  .flex-grow {
    flex: 1;
    width: 100%;
  }

  .wallets {
    display: flex;
    margin: -30px;
  }

  .wallets-container {
    display: flex;
    margin: 30px;
    flex-direction: row;
  }
</style>

<script>
  import Section from './Section'
  import Spacer from './Spacer'
  import WalletCard from './WalletCard'

  export default {
    name: 'WalletsSection',
    components: {WalletCard, Spacer, Section},

    data () {
      return {
        wallets: [
          {
            name: 'Main Account',
            amount: 10505.44
          },
          {
            name: 'Savings Account',
            amount: 1430705.78
          }
        ]
      }
    }
  }
</script>
