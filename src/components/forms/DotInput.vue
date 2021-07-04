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
  <view :style="styles.digitDotsContainer">
    <view
      v-for="(index, i) in value"
      :key="i"
      :style="{ paddingLeft: i === 0 ? 0 : 10 }"
    >
      <view v-if="index !== undefined" :style="styles.digitDotFilled" />
      <view v-else :style="styles.digitDot" />
    </view>
  </view>
</template>

<script>
export default {
  name: 'DotInput',

  props: {
    value: {
      type: Array,
      required: true
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
    digitDotsContainer: {
      flexDirection: 'row',
      margin: 20
    },

    digitDotFilled: {
      backgroundColor: isDarkScheme ? '#6d6de3' : '#1e1e4d',
      width: 20,
      height: 20,
      borderRadius: 10
    },

    digitDot: {
      backgroundColor: isDarkScheme ? '#b95c8b' : '#931A5A',
      width: 20,
      height: 20,
      borderRadius: 10
    }
  }
}
</script>
