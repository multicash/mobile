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
    title="Invest MCX"
    has-close-button
    @on-dismiss="navigation.goBack()"
    scrollable
  >
    <header-view
      title="Invest MCX"
      subtitle="With MultiCash you can easily put your MCX in a savings account and you will receive 2.5% interest."
      :image="require('@/assets/duration-finance.png')"
    />

    <selector
      name="Account"
      value="Swen"
    />

    <action-notification
      title="Annualized Interest Rate"
      label="34.94 %"
    >
      <rounded-button title="15 Days" />
    </action-notification>
  </modal-view>
</template>

<script>
export default {
  name: 'OverviewView',

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
