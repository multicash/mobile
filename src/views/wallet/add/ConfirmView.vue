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
    title="Confirm"
    has-back-button
    @on-dismiss="navigation.goBack()"
    scrollable
  >
    <header-view
      title="Almost Done!"
      subtitle="Please read and agree with the below statements carefully before proceeding."
      :image-foreground="require('@/assets/todo-list.png')"
      :image-background="require('@/assets/check-all.png')"
    />

    <switch-notification
      :value.sync="term1"
      @input="term1 = $event"
      label="I understand that the only way to restore this account is by providing the restore key. If the restore key is lost or differs from this setup there is no way to recover it. I'm solely responsible for the restore key."
      type="primary"
    />

    <switch-notification
      :value.sync="term2"
      @input="term2 = $event"
      label="I understand that this accounts restore key is stored securely on this device. And that this restore key isn't covered by automatic backup."
      type="primary"
    />

    <switch-notification
      :value.sync="term3"
      @input="term3 = $event"
      label="I have read, understood, and agree to the Terms of Use."
    />

    <link-button title="Terms of Use" :style="{ marginTop: -10 }"/>

    <spacer />

    <rounded-button
      :disabled="!(term1 && term2 && term3)"
      :style="styles.proceedButton"
      title="Proceed"
      @on-press="navigation.navigate('create', route.params)"
    />
  </modal-view>
</template>

<script>
export default {
  name: 'ConfirmView',

  data () {
    return {
      term1: false,
      term2: false,
      term3: false
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
