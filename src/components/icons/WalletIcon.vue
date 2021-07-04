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
  <image :source="resolvedIcon" :style="styles.icon"/>
</template>

<script>
import { resolveIcon } from '@/core/assets/walletIcons'

export default {
  name: 'WalletIcon',

  props: {
    icon: {
      type: String,
      default: 'wallet'
    },

    size: {
      type: Number,
      default: 50
    }
  },

  computed: {
    resolvedIcon () {
      return resolveIcon(this.icon)
    },

    styles () {
      return stylesStore(this.size)
    }
  }
}

const stylesStore = (size) => {
  return {
    icon: {
      width: size,
      height: size,
      resizeMode: 'contain'
    }
  }
}
</script>
