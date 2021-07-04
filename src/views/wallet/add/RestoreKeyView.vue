<!--MultiCash Mobile-->
<!--Copyright (C) 2021  Swen van Zanten-->

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
  <modal-view
    title="Restore key"
    has-back-button
    @on-dismiss="navigation.goBack()"
    scrollable
  >
    <header-view
      title="Write down your restore key!"
      :image-background="require('@/assets/safe.png')"
      :image-foreground="require('@/assets/key.png')"
    />

    <spacer />

    <input-description
      :label="'A restore key is the ONLY WAY to restore your account and open it in another app. If you lose it you can never recover it and you\'ll lose access to your MultiCash. So make absolutely sure to keep it very safe!'"
    />

    <restore-key-grid-view :words="words" />

    <switch-notification
      :value.sync="wordsAreBackedUp"
      @input="wordsAreBackedUp = $event"
      label="I hereby declare I've written down the restore key."
      type="warning"
    />

    <spacer />

    <rounded-button
      :disabled="!wordsAreBackedUp"
      title="Proceed"
      @on-press="proceed"
    />
  </modal-view>
</template>

<script>
export default {
  name: 'RestoreKeyView',

  data () {
    return {
      words: [],

      wordsAreBackedUp: false
    }
  },

  computed: {
    styles () {
      return stylesStore(this.isDarkScheme)
    }
  },

  created () {
    this.words = this.$walletManager.generateKey().toObj().mnemonic.split(' ')
  },

  methods: {
    proceed () {
      const walletConfig = this.$walletManager.getTempWallet(this.route.params.identifier)

      walletConfig.restoreKey = this.words.join(' ')

      this.navigation.navigate('confirm', {
        identifier: walletConfig.identifier
      })
    }
  }
}

const stylesStore = (isDarkScheme) => {
  return {}
}
</script>
