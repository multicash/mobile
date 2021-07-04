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
    :style="styles.feature"
    :key="title"
  >
    <image :style="styles.featureIcon" :source="image"/>
    <view :style="styles.featureContent">
      <text :style="styles.featureTitle">{{ title }}</text>
      <text :style="styles.featureDescription">{{ description }}</text>
    </view>
  </view>
</template>

<script>
import { sectionFooter, sectionTitle } from '@/core/support/styles'

export default {
  name: 'Feature',

  computed: {
    styles () {
      return styleStore(this.isDarkScheme)
    }
  },

  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    image: {
      type: Number,
      required: true
    }
  }
}

const styleStore = (isDarkScheme) => {
  return {
    feature: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10
    },

    featureIcon: {
      width: 50,
      height: 50,
      resizeMode: 'contain',
      marginRight: 10
    },

    featureContent: {
      flex: 1
    },

    featureTitle: {
      ...sectionTitle(isDarkScheme),
      paddingBottom: 2.5
    },

    featureDescription: {
      ...sectionFooter(isDarkScheme)
    }
  }
}
</script>
