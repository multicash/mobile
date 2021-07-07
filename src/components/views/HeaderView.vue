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
  <view :style="styles.headerContainer">
    <view :style="{ flexDirection: 'row' }">
      <image v-if="imageForeground" :style="styles.headerImage1" :source="imageForeground"/>
      <image v-if="imageBackground" :style="styles.headerImage2" :source="imageBackground"/>
      <image v-else-if="image" :style="styles.image" :source="image"/>
    </view>
    <text :style="styles.headerTitle">{{ title }}</text>
    <text v-if="subtitle" :style="styles.headerSubtitle">{{ subtitle }}</text>
  </view>
</template>

<script>
import { pageSubtitle, pageTitle } from '@/core/support/styles'

export default {
  name: 'HeaderView',

  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String
    },
    imageBackground: {
      default: null
    },
    imageForeground: {
      default: null
    },
    image: {
      default: null
    }
  },

  computed: {
    styles () {
      return stylesStore(this.isDarkScheme, !!this.imageForeground)
    }
  }
}

const stylesStore = (isDarkScheme, hasImageForeground) => {
  return {
    headerContainer: {
      marginHorizontal: 20,
      marginTop: 20,
      justifyContent: 'center',
      alignItems: 'center'
    },

    headerTitle: {
      ...pageTitle(isDarkScheme)
    },

    headerSubtitle: {
      ...pageSubtitle(isDarkScheme)
    },

    image: {
      width: 60,
      height: 60,
      resizeMode: 'contain'
    },

    headerImage1: {
      zIndex: 10,
      width: 40,
      height: 40,
      marginTop: 0,
      marginRight: hasImageForeground ? -25 : 0,
      resizeMode: 'contain'
    },

    headerImage2: {
      width: 60,
      height: 60,
      resizeMode: 'contain',
      marginTop: 10,
      marginBottom: 2.5
    }
  }
}
</script>
