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
  <icon
    :name="name"
    :color="defaultColor"
    :size="size"
  />
</template>

<script>
import Icon from 'react-native-vector-icons/Ionicons'

export default {
  name: 'Icon',
  components: { Icon },

  props: {
    name: {
      type: String,
      default: undefined
    },

    color: {
      type: String,
      default: undefined
    },

    size: {
      type: Number,
      default: 24
    }
  },

  computed: {
    defaultColor () {
      return this.color ? this.color : (this.isDarkScheme ? 'white' : 'black')
    }
  }
}
</script>
