<!--MultiCash Mobile-->
<!--Copyright (C) 2021  MultiCash Developers-->

<!--This program is free software: you can redistribute it and/or modify-->
<!--it under the terms of the GNU General Public License as published by-->
<!--the Free Software Foundation, either version 3 of the License, or-->
<!--any later version.-->

<!--This program is distributed in the hope that it will be useful,-->
<!--but WITHOUT ANY WARRANTY; without even the implied warranty of-->
<!--MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the-->
<!--GNU General Public License for more details.-->

<!--You should have received a copy of the GNU General Public License-->
<!--along with this program.  If not, see <https://www.gnu.org/licenses/>.-->

<template>
  <view :style="{ flex: 1 }">
    <modal-navigation
      title="Preferences"
      has-back-button
      @on-dismiss="navigation.goBack()"
    />
    <view-background scrollable>

      <input-description>Choose an account name for this account to recognize it among your other accounts.</input-description>
      <rounded-text-input
        title="Account name"
        placeholder="Main account"
        :value="name"
        @input="name = $event"
        auto-focus
      />

      <spacer />

      <input-description>Make your account even more recognizable by choosing an account icon.</input-description>
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
      coin: '',
      icon: {
        name: 'wallet'
      }
    }
  },

  validations: {
    name: {
      required,
      minLength: minLength(2),
      maxLength: maxLength(15)
    }
  },

  computed: {
    styles () {
      return stylesStore(this.isDarkScheme)
    }
  },

  created () {
    this.coin = this.route.params.coin
    this.tag = this.route.params.tag

    if (this.route.params.restore) {
      this.tag = ''
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
        coin: this.coin,
        network: constants.defaultNetwork,
        apiEndpoint: constants.liteApi,
        singleAddress: false,
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
