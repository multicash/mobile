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
  <view :style="styles.modalNavigation">
    <colors-background v-if="colorsBackground"></colors-background>
    <round-button
      v-if="hasCloseButton || hasBackButton"
      @on-press="$emit('on-dismiss')"
    >
      <icon v-if="hasCloseButton" name="close" />
      <icon v-if="hasBackButton" name="chevron-back" />
    </round-button>
    <view>
      <text v-if="title" :style="styles.modalNavigationTitle">
        {{ title }}
      </text>
    </view>
    <slot name="right"/>
  </view>
</template>

<script>
import { text } from '@/core/support/styles'

export default {
  name: 'ModalNavigation',

  props: {
    title: {
      type: String,
      default: null
    },
    hasCloseButton: {
      type: Boolean,
      default: false
    },
    hasBackButton: {
      type: Boolean,
      default: false
    },
    colorsBackground: {
      type: Boolean,
      default: false
    },
    smallTitle: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    styles () {
      return stylesStore(this.isDarkScheme, this.colorsBackground, this.smallTitle)
    }
  }
}

const stylesStore = (isDarkScheme, colorsBackground, smallTitle) => {
  return {
    modalNavigation: {
      backgroundColor: isDarkScheme ? '#2c2e36' : '#ededf3',
      display: 'flex',
      padding: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      shadowBlur: 10,
      shadowRadius: 10,
      shadowOpacity: 0.1,
      shadowColor: '#000000',
      zIndex: 1
    },

    modalNavigationTitle: {
      color: text(isDarkScheme).color,
      fontWeight: 'bold',
      fontSize: smallTitle ? 15 : 20
    }
  }
}
</script>
