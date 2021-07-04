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
  <view :style="styles.detailListTitleContainer">
    <slot>
      <text :style="styles.title">{{ title }}</text>
    </slot>
  </view>
</template>

<script>
export default {
  name: 'DetailListTitle',

  props: {
    title: {
      type: String,
      default: ''
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
    detailListTitleContainer: {
      paddingTop: 20,
      paddingBottom: 10
    },

    title: {
      color: isDarkScheme ? 'white' : 'black',
      fontWeight: '600',
      fontSize: 13
    }
  }
}
</script>
