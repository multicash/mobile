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
  <view :style="styles.detailListItemContainer">
    <view :style="styles.detailListItemLeftContainer">
      <slot name="icon">
        <icon v-if="icon" :name="icon" :style="styles.icon" :size="14"/>
      </slot>
      <slot name="title">
        <text :style="styles.title">{{ title }}</text>
      </slot>
    </view>
    <slot name="value">
      <text :style="styles.value">{{ value }}</text>
    </slot>
  </view>
</template>

<script>
export default {
  name: 'DetailListItem',

  props: {
    icon: {
      type: String,
      default: null
    },
    title: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
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
    detailListItemContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 5
    },

    detailListItemLeftContainer: {
      flexDirection: 'row',
      alignItems: 'center'
    },

    icon: {
      width: 14,
      height: 14,
      marginRight: 5,
      color: isDarkScheme ? 'white' : 'black'
    },

    title: {
      fontSize: 11,
      color: isDarkScheme ? 'white' : 'black'
    },

    value: {
      fontSize: 13,
      fontWeight: '600',
      color: isDarkScheme ? '#8374b2' : '#4d3f70'
    }
  }
}
</script>
