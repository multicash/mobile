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
  <modal-view
    has-back-button
    title="Account name"
    @on-dismiss="navigation.goBack()"
  >
    <view>
      <input-description>Choose an account name for this account to recognize it among your other accounts.</input-description>
      <rounded-text-input
        ref="name"
        title="Wallet name"
        placeholder="Main account"
        :value="name"
        @input="name = $event"
        @on-end-editing="updateName"
        auto-focus
      />
    </view>
  </modal-view>
</template>

<script>
export default {
  name: 'NameView',

  data () {
    return {
      name: ''
    }
  },

  created () {
    this.name = this.wallet.name

    this.navigation.addListener('focus', () => {
      this.$refs.name.focus()
    })
  },

  methods: {
    updateName (event) {
      const wallet = this.wallet
      wallet.name = event.nativeEvent.text

      this.$walletManager.updateWallet(wallet.identifier, wallet)
    }
  }
}
</script>
