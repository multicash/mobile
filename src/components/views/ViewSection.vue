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
  <view :style="styles.section">
    <view>
      <slot />
    </view>
    <view :style="styles.sectionHeader">
      <slot name="title">
        <text
          v-if="title !== ''"
          :style="styles.sectionTitle"
        >
          {{ title }}
        </text>
      </slot>
      <slot name="options" />
    </view>
  </view>
</template>

<script>
export default {
  name: 'ViewSection',

  props: {
    title: {
      type: String,
      default: ''
    },

    titleColor: {
      type: String,
      default: null
    }
  },

  computed: {
    styles () {
      return stylesStore(this.isDarkScheme, this.titleColor)
    }
  }
}

const stylesStore = (isDarkScheme, titleColor) => {
  return {
    section: {
      marginTop: 15,
      marginBottom: 10,
      flexDirection: 'column-reverse'
    },

    sectionHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 10
    },

    sectionTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      color: titleColor || isDarkScheme ? 'white' : 'black'
    }
  }
}
</script>
