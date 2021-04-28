<template>
  <view :style="styles.container">
    <image :style="styles.image" :source="require('@/assets/coin-wallet.png')" />
    <view>
      <text :style="styles.title">Multiple Accounts</text>
      <text :style="styles.subtitle">You can create as many accounts as you want to keep your funds in the right yars.</text>
    </view>

    <view :style="styles.exampleContainer">

      <view :style="{ height: 130, marginBottom: 40 }">
        <wallet-card
          :touchable="false"
          :style="styles.wallet1"
          :value="{
            name: 'Happy\'s Account',
            tag: '@HappyPayments',
            totalAmount: 123445494344,
            icon: 'moneyBag'
          }"
        />
      </view>

      <view :style="{ height: 130, alignItems: 'flex-end' }">
        <wallet-card
          :touchable="false"
          :style="styles.wallet2"
          :value="{
            name: 'Savings Account',
            tag: '@happySavings',
            totalAmount: 3420550054344,
            icon: 'safe'
          }"
        />
      </view>

    </view>
  </view>
</template>

<script>
import { subtitle } from '@/core/support/styles'

export default {
  name: 'MultipleWallets',

  computed: {
    styles () {
      return styleStore(this.isDarkScheme)
    }
  }
}

const styleStore = (isDarkScheme) => {
  return {

    container: { alignItems: 'center' },

    image: { width: 60, height: 60, cover: 'contain' },

    title: {
      fontSize: 30,
      fontWeight: '900',
      textAlign: 'center',
      color: '#e96100'
    },

    subtitle: {
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 40,
      color: subtitle(isDarkScheme).color
    },

    exampleContainer: {
      width: '100%',
      flex: 1,
      justifyContent: 'center'
    },

    wallet1: {
      shadowColor: '#e96100',
      shadowRadius: 60,
      shadowOpacity: isDarkScheme ? 0.25 : 0.5
    },

    wallet2: {
      shadowColor: '#e9009b',
      shadowRadius: 80,
      shadowOpacity: isDarkScheme ? 0.25 : 0.5
    }

  }
}
</script>
