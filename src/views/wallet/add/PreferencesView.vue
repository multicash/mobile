<template>
  <view :style="{ flex: 1 }">
    <modal-navigation
      title="Preferences"
      has-back-button
      @on-dismiss="navigation.goBack()"
    />
    <view-background scrollable>

      <input-description>Choose a wallet name for this wallet to recognize it among your other wallets.</input-description>
      <rounded-text-input title="Wallet name" placeholder="Main account" :value="name" @input="name = $event"/>

      <spacer />

      <view v-if="!route.params.restore">
        <input-description>Choose a wallet tag which will be shareable and enables other MultiCash users to easily recognize your account.</input-description>
        <rounded-text-input title="Wallet tag" placeholder="@myWalletTag" :value="tag" @input="tag = $event"/>

        <spacer />
      </view>

      <input-description>Make your wallet even more recognizable by choosing a wallet icon.</input-description>
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
