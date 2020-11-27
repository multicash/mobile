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
          v-for="(wallet, i) in $walletManager.wallets"
          :key="wallet.name"
          :value="wallet"
          :style="{
            marginRight: (i === $walletManager.wallets.length - 1) ? 0 : 20,
          }"
          containerContentStyle="space-between"
          @wallet-selected="$emit('wallet-selected', arguments[0])"
        />
      </view>
    </scroll-view>

    <view :style="styles.actionsContainer">
      <secondary-action-button
        icon="albums-outline"
        title=""
        :style="styles.actionButton"
        @on-press="$emit('order-wallets')"
      />
      <secondary-action-button
        icon="add-outline"
        title="Add"
        :style="styles.actionButton"
        @on-press="$emit('add-wallet')"
      />
    </view>
  </view-section>
</template>

<script>
export default {
  name: 'WalletsSection',

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
