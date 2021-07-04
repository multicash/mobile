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
    <colors-background v-if="colorsBackground" />
    <view :style="styles.contentContainer">
      <slot />
    </view>
  </view>
</template>

<script>
export default {
  name: 'AppHeaderView',

  props: {
    insets: {
      type: Object
    },

    expand: {
      type: Boolean,
      default: true
    },

    colorsBackground: {
      type: Boolean,
      default: true
    }
  },

  computed: {
    styles () {
      return stylesStore(this.isDarkScheme, this.insets, this.expand, this.colorsBackground)
    }
  }
}

const stylesStore = (isDarkScheme, insets, expand, colorsBackground) => {
  return {
    container: {
      flex: expand ? 1 : undefined,
      backgroundColor: isDarkScheme ? '#2c2e36' : '#ededf3',
      shadowBlur: 10,
      shadowRadius: 10,
      shadowOpacity: 0.1,
      shadowColor: '#000000',
      marginTop: -insets.top,
      minHeight: colorsBackground ? 200 : undefined,
      maxHeight: 400
    },

    contentContainer: {
      position: 'relative',
      paddingTop: insets.top,
      paddingBottom: 10,
      justifyContent: 'center',
      height: expand ? '100%' : undefined
    },

    colorsContainer: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }
  }
}
</script>
