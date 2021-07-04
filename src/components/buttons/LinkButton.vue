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
  <touchable-opacity
    :on-press="pressed"
    :style="styles.linkButton"
    :active-opacity="0.6"
  >
    <slot>
      <text :style="styles.linkButtonText">{{ title }}</text>
    </slot>
  </touchable-opacity>
</template>

<script>
export default {
  name: 'LinkButton',

  methods: {
    pressed () {
      this.$emit('on-press')
    }
  },

  props: {
    title: {
      type: String,
      default: null
    },

    style: {
      type: Array,
      default: function () {
        return []
      }
    },

    textStyle: {
      type: Object
    }
  },

  computed: {
    styles () {
      const innerStyle = this.style[0] || {}
      const textStyle = this.textStyle || {}

      return stylesStore(this.isDarkScheme, innerStyle, textStyle)
    }
  }
}

const stylesStore = (isDarkScheme, innerStyle, textStyle) => {
  return {
    linkButton: {
      minWidth: 36,
      height: innerStyle.height || 50,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      paddingLeft: 20,
      paddingRight: 20,
      flexDirection: 'row'
    },

    linkButtonText: {
      color: isDarkScheme ? '#6d6de3' : '#1e1e4d',
      fontWeight: 'bold',
      fontSize: 15,
      ...textStyle
    }
  }
}
</script>
