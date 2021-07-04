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
    title="Done"
    has-close-button
    @on-dismiss="navigation.navigate('home')"
  >
    <header-view
      title="Awesome!"
      subtitle="Your account has been successfully topped up!"
      :image-foreground="require('@/assets/new.png')"
      :image-background="require('@/assets/money.png')"
    />

    <notification
      title="Details"
      label="Your transaction ID: 120923093949"
      icon="card-outline"
    />

    <notification
      title="Estimated Arrival"
      label="It can take up to 20 minutes for your funds to arrive. So sit back and relax and wait for the funds to safely arrive in your account."
      type="primary"
      icon="time-outline"
    />

    <spacer />

    <rounded-button
      title="Done"
      type="primary"
      @on-press="navigation.navigate('home')"
    />
  </modal-view>
</template>

<script>
export default {
  name: 'PayedView',

  computed: {
    styles () {
      return styleStore(this.isDarkScheme)
    }
  }
}

const styleStore = (isDarkScheme) => {
  return {}
}
</script>
