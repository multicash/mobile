<template>
  <view :style="{ flex: 1 }">
    <modal-navigation
      has-back-button
      title="Account icon"
      @on-dismiss="navigation.goBack()"
    />
    <view-background scrollable>
      <input-description>Make your account even more recognizable by choosing an account icon.</input-description>
      <selector name="Icon" @on-press="selectIcon">
        <view slot="value" :style="styles.iconContainer">
          <wallet-icon :icon="wallet.icon" />
          <spacer />
          <text :style="styles.iconText">{{ wallet.icon }}</text>
        </view>
      </selector>
    </view-background>
  </view>
</template>

<script>
export default {
  name: 'IconView',

  computed: {
    styles () {
      return stylesStore(this.isDarkScheme)
    }
  },

  methods: {
    selectIcon () {
      const unsubscribe = this.navigation.addListener('focus', () => {
        if (this.route.params.icon) {
          const wallet = this.wallet
          wallet.icon = this.route.params.icon

          this.$walletManager.updateWallet(wallet.identifier, wallet)
          this.navigation.removeListener('focus', unsubscribe)
        }
      })

      this.navigation.navigate('icons', {
        goBack: true,
        returnView: 'icon'
      })
    }
  }
}

const stylesStore = (isDarkScheme) => {
  return {
    iconContainer: {
      padding: 10,
      flexDirection: 'row',
      alignItems: 'center'
    },

    iconText: {
      color: isDarkScheme ? 'white' : 'black'
    }
  }
}
</script>
