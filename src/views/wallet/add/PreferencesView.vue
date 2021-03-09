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
        <rounded-text-input title="Wallet tag" placeholder="myWalletTag" :value="tag" @input="tag = $event"/>

        <spacer />
      </view>

      <input-description>Make your wallet even more recognizable by choosing a wallet icon.</input-description>
      <selector name="Icon" @on-press="selectIcon">
        <view slot="value" :style="styles.iconContainer">
          <wallet-icon :icon="icon.name" />
          <spacer />
          <text :style="styles.iconText">{{ icon.name }}</text>
        </view>
      </selector>

      <view :style="styles.proceedButtonPlaceholder" />

    </view-background>

    <rounded-button
      v-if="!$v.$invalid"
      :style="styles.proceedButton"
      title="Proceed"
      @on-press="proceed"
    />
  </view>
</template>

<script>
import constants from '@/core/support/constants'
import { required, minLength, maxLength } from 'vuelidate/lib/validators'

export default {
  name: 'PreferencesView',

  data () {
    return {
      name: '',
      tag: '',
      icon: {
        name: 'wallet'
      }
    }
  },

  validations: {
    name: {
      required,
      minLength: minLength(2)
    },
    tag: {
      required,
      minLength: minLength(8),
      maxLength: maxLength(25)
    }
  },

  computed: {
    styles () {
      return stylesStore(this.isDarkScheme)
    }
  },

  created () {
    if (this.route.params.restore) {
      this.tag = '12345678'
    }
  },

  methods: {
    selectIcon () {
      const unsubscribe = this.navigation.addListener('focus', () => {
        if (this.route.params.icon) {
          this.icon.name = this.route.params.icon
          this.navigation.removeListener('focus', unsubscribe)
        }
      })

      this.navigation.navigate('icons', {
        goBack: true,
        returnView: 'preferences'
      })
    },

    proceed () {
      const walletConfig = this.$walletManager.storeTempWallet({
        name: this.name,
        tag: this.tag,
        icon: this.icon.name,
        coin: constants.defaultCoin,
        network: constants.defaultNetwork,
        apiEndpoint: constants.multicoreWalletServiceApi,
        singleAddress: true,
        restoreKey: ''
      })

      this.navigation.navigate(this.route.params.restore ? 'enterRestoreKey' : 'restoreKey', {
        identifier: walletConfig.identifier
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
