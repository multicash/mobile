<template>
  <view-section :style="styles.flexGrow" title="Wallets">
    <scroll-view
      :style="styles.wallets"
      horizontal
      :showsHorizontalScrollIndicator="false"
    >
      <view
        :style="styles.walletsContainer"
      >
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

    <view :style="styles.actionsContainer">
      <secondary-action-button
        icon="albums-outline"
        title=""
        :style="styles.actionButton"
      />
      <secondary-action-button
        icon="add-outline"
        title="Add"
        :style="styles.actionButton"
      />
    </view>
  </view-section>
</template>

<script>
import ViewSection from './ViewSection'
import WalletCard from './WalletCard'
import SecondaryActionButton from './SecondaryActionButton'

export default {
  name: 'WalletsSection',

  components: { SecondaryActionButton, WalletCard, ViewSection },

  data () {
    return {
      wallets: [
        {
          name: 'Main Account',
          amount: 10505.44,
          icon: 'wallet'
        },
        {
          name: 'Savings Account',
          amount: 1430705.78,
          icon: 'gift'
        }
      ]
    }
  },

  computed: {
    styles () {
      return stylesStore(this.isDarkScheme)
    }
  }
}

const stylesStore = (isDarkScheme) => {
  return {
    flexGrow: {
      flex: 1,
      width: '100%'
    },

    wallets: {
      display: 'flex',
      margin: -30
    },

    walletsContainer: {
      display: 'flex',
      margin: 30,
      flexDirection: 'row'
    },

    actionsContainer: {
      flexDirection: 'row',
      marginTop: 20
    },

    actionButton: {
      marginRight: 10
    }
  }
}
</script>
