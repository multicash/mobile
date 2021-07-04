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
  <view :style="{ flex: 1 }">
    <modal-navigation
      has-back-button
      title="Account restore key"
      @on-dismiss="navigation.goBack()"
    />
    <view-background scrollable>
      <header-view
        title="Your accounts restore key"
        subtitle="In order to recover your account you need the restore key."
        :image-background="require('@/assets/signing-a-document.png')"
        :image-foreground="require('@/assets/protect.png')"
      />

      <restore-key-grid-view :words="mnemonic" />
    </view-background>
  </view>
</template>

<script>
export default {
  name: 'RestoreKeyView',

  computed: {
    mnemonic () {
      return this.wallet.getCredentials().mnemonic.split(' ')
    }
  }
}
</script>
