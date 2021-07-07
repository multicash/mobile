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
    title="About MultiCash"
    has-back-button
    @on-dismiss="navigation.goBack()"
  >
    <header-view
      title="About MultiCash"
      subtitle="Bunch of Moon boys!"
      :image-background="require('@/assets/coins/MCX.png')"
    />
    <text>
      Are you sick and tired of all the convoluted solutions that are available on the open market today? We were too.
    </text>
    <text>
      Our goal is to remove all the excess and give you what you need to succeed. By using MultiCash you are removing the middleman while regaining control over your future. MultiCash was created with you, the customer – the user, in mind. We are proud to provide multiple ways for you to send and receive digital currency on any platform of your choice.
    </text>
    <text>
      With MultiCash there is no waiting, there is no “roadmap”, everything you need to get started is available now. While we do have development goals on our minds, we do not want to make false promises we cannot keep.
    </text>
    <text>
      We take pride in delivering digital currency products that work.
    </text>
  </modal-view>
</template>

<script>
export default {
  name: 'AboutView',

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
