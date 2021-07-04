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
  <view :style="styles.card">
    <slot/>
  </view>
</template>

<script>
import { cards } from '@/core/support/styles'

export default {
  name: 'Card',

  props: {
    backgroundColor: {
      type: String,
      default: null
    }
  },

  computed: {
    styles () {
      return stylesStore(this.isDarkScheme, this.backgroundColor)
    }
  }
}

const stylesStore = (isDarkScheme, backgroundColor) => {
  return {
    card: {
      ...cards(isDarkScheme),
      backgroundColor: backgroundColor || (isDarkScheme ? '#464955' : '#f1f1f1'),
      borderRadius: 10
    }
  }
}
</script>
