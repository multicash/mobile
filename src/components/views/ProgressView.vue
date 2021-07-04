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
  <view :style="styles.container">
    <view :style="styles.progress"/>
  </view>
</template>

<script>
export default {
  name: 'ProgressView',

  props: {
    progress: {
      type: Number,
      default: 0
    }
  },

  computed: {
    styles () {
      return styleStore(this.isDarkScheme, 1 - this.progress)
    }
  }
}

const styleStore = (isDarkScheme, progress) => {
  return {
    container: {
      position: 'relative',
      marginVertical: 10,
      height: 20,
      width: '100%',
      backgroundColor: isDarkScheme ? '#ffffff' : '#ffffff',
      borderRadius: 100,
      overflow: 'hidden'
    },

    progress: {
      position: 'absolute',
      backgroundColor: isDarkScheme ? '#00AE5A' : '#00AE5A',
      top: 0,
      bottom: 0,
      left: 0,
      right: (progress * 100) + '%'
    }
  }
}
</script>
