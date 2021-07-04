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
  <view
    :style="styles.roundButtonOuter"
  >
    <touchable-opacity
      :style="styles.roundButton"
      :on-press="pressed"
      :on-long-press="pressedLong"
      :active-opacity="0.6"
    >
      <view :style="styles.content">
        <slot/>
      </view>
    </touchable-opacity>
  </view>
</template>

<script>
export default {
  name: 'RoundButton',

  props: {
    transparentShadow: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    styles () {
      return stylesStore(this.isDarkScheme, this.transparentShadow)
    }
  },

  methods: {
    pressed () {
      this.$emit('on-press')
    },

    pressedLong () {
      this.$emit('on-long-press')
    }
  }
}

const stylesStore = (isDarkScheme, transparentShadow) => {
  return {
    roundButtonOuter: {
      width: 36,
      height: 36,
      borderRadius: 100
    },

    roundButton: {
      width: '100%',
      height: '100%',
      backgroundColor: isDarkScheme ? 'black' : '#d4d4de',
      borderRadius: 100,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },

    content: {
      width: 36,
      height: 36,
      backgroundColor: 'transparent',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
  }
}
</script>
