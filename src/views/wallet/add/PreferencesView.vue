<template>
  <view :style="{ flex: 1 }">
    <modal-navigation
      title="Preferences"
      has-back-button
      @on-dismiss="navigation.goBack()"
    />
    <view-background scrollable>

      <text :style="styles.description">Choose a wallet name for this wallet to recognize it among your other wallets.</text>
      <rounded-text-input title="Wallet name" placeholder="Main account" :value="name" @input="name = $event"/>

      <spacer />

      <view v-if="!route.params.restore">
        <text :style="styles.description">Choose a wallet tag which will be shareable and enables other MultiCash users to easily recognize your account.</text>
        <rounded-text-input title="Wallet tag" placeholder="@myWalletTag" :value="tag" @input="tag = $event"/>

        <spacer />
      </view>

      <text :style="styles.description">Make your wallet even more recognizable by choosing a wallet icon.</text>
      <selector name="Icon">
        <view slot="value" :style="styles.iconContainer">
          <wallet-icon :icon="icon.name" />
          <spacer />
          <text :style="styles.iconText">{{ icon.name }}</text>
        </view>
      </selector>

      <view :style="styles.proceedButtonPlaceholder" />

    </view-background>

    <rounded-button
      :style="styles.proceedButton"
      title="Proceed"
      @on-press="navigation.navigate(route.params.restore ? 'enterRestoreKey' : 'restoreKey')"
    />
  </view>
</template>

<script>
export default {
  name: 'PreferencesView',

  data () {
    return {
      name: '',
      tag: '',
      icon: {
        name: 'moneyBox'
      }
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
    description: {
      color: isDarkScheme ? '#c0c0c0' : '#343434',
      marginBottom: 10,
      marginHorizontal: 5,
      fontSize: 12
    },

    iconContainer: {
      padding: 10,
      flexDirection: 'row',
      alignItems: 'center'
    },

    iconText: {
      color: isDarkScheme ? 'white' : 'black'
    },

    proceedButtonPlaceholder: {
      height: 120
    },

    proceedButton: {
      position: 'absolute',
      bottom: 30,
      left: 20,
      right: 20
    }
  }
}
</script>
