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
    :on-press="() => $emit('on-press')"
    :style="styles.container"
    :active-opacity="0.6"
  >
    <view>
      <text :style="styles.name">{{ name }}</text>
      <slot name="value">
        <text :style="styles.value">{{ value }}</text>
      </slot>
    </view>
    <icon name="chevron-down-outline" />
  </touchable-opacity>
</template>

<script>
import Icon from '@/components/icons/Icon'

export default {
  name: 'Selector',

  components: { Icon },

  props: {
    name: {
      type: String,
      required: true
    },
    value: {
      type: String
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
    container: {
      flexDirection: 'row',
      flexGrow: 1,
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: isDarkScheme ? 'black' : 'white',
      borderRadius: 10,
      paddingVertical: 7.5,
      paddingHorizontal: 15,
      marginBottom: 10
    },

    name: {
      fontWeight: 'bold',
      color: isDarkScheme ? '#B95C8B' : '#931A5A'
    },

    value: {
      fontSize: 23,
      color: isDarkScheme ? '#dadada' : 'black'
    }
  }
}
</script>
