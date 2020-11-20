<template>
  <view :style="{ flex: 1 }">
    <modal-navigation
      has-back-button
      title="Wallet icon"
      @on-dismiss="navigation.goBack()"
    />
    <view-background scrollable>
      <input-description>Make your wallet even more recognizable by choosing a wallet icon.</input-description>
      <selector name="Icon" @on-press="selectIcon">
        <view slot="value" :style="styles.iconContainer">
          <wallet-icon :icon="icon.name" />
          <spacer />
          <text :style="styles.iconText">{{ icon.name }}</text>
        </view>
      </selector>
    </view-background>
  </view>
</template>

<script>
export default {
  name: 'IconView',

  data () {
    return {
      icon: {
        name: null
      }
    }
  },

  created () {
    this.icon.name = this.wallet.icon
  },

  computed: {
    wallet () {
      if (!(this.route.params && this.route.params.wallet)) {
        return null
      }

      return this.route.params.wallet
    },
    styles () {
      return stylesStore(this.isDarkScheme)
    }
  },

  methods: {
    selectIcon () {
      this.navigation.navigate('icons', {
        goBack: true,
        resolve: (value) => {
          this.icon.name = value.item.name
        }
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
