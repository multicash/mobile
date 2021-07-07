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
  <touchable-opacity
    :style="styles.keyboardKey"
    :on-press="() => $emit('keydown')"
  >
    <slot>
      <text :style="styles.keyboardCharater">{{ label }}</text>
    </slot>
  </touchable-opacity>
</template>

<script>
export default {
  name: 'KeyboardKey',

  props: ['label'],

  computed: {
    styles () {
      return stylesStore(this.isDarkScheme)
    }
  }
}

const stylesStore = (isDarkScheme) => {
  return {
    keyboardKey: {
      flex: 0.3,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: isDarkScheme ? '#3b3f46' : '#ffffff',
      height: '80%',
      borderRadius: 100
    },

    keyboardCharater: {
      fontWeight: '600',
      fontSize: 24,
      color: isDarkScheme ? 'white' : 'black'
    }
  }
}
</script>
