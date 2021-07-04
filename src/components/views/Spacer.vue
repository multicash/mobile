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
  <view :style="styles.spacer"/>
</template>

<script>
export default {
  name: 'Spacer',

  props: {
    small: {
      type: Boolean,
      default: false
    },

    stretch: {
      type: Boolean,
      default: false
    },

    large: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    styles () {
      return styleStore(this.isDarkScheme, this.small, this.large, this.stretch)
    }
  }
}

const styleStore = (isDarkScheme, small, large, stretch) => {
  return {
    spacer: {
      width: small ? 10 : (large ? 40 : 20),
      height: small ? 10 : (large ? 40 : 20),
      flex: stretch ? 1 : undefined
    }
  }
}
</script>
