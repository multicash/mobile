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
    <image :style="styles.image" :source="require('@/assets/tags.png')" />
    <view>
      <text :style="styles.title">Account Tags</text>
      <text :style="styles.subtitle">Pay each other by using your created account tags.</text>
    </view>

    <view :style="styles.exampleContainer">

      <view :style="styles.fromMessage">
        <text :style="styles.messageText">Hé send me your MCX tag, so I can pay you back for the coffee ☕️</text>
      </view>

      <view :style="{ alignItems: 'flex-end' }">
        <view :style="styles.toMessage">
          <text :style="styles.messageText">Ah sweet! My accounts tag is <text :style="{ fontWeight: 'bold' }">@MyAccount</text></text>
        </view>
      </view>

      <view :style="styles.fromMessage">
        <text :style="styles.messageText">Alrighty then it's done 👍</text>
      </view>

      <view :style="{ alignItems: 'flex-end' }">
        <view :style="styles.toMessage">
          <text :style="styles.messageText">Wow that was fast 🤩</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import { pageSubtitle, pageTitle } from '@/core/support/styles'

export default {
  name: 'WalletTags',

  props: {
    active: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    styles () {
      return styleStore(this.isDarkScheme, this.active)
    }
  }
}

const styleStore = (isDarkScheme, active) => {
  return {

    container: {
      alignItems: 'center',
      opacity: active ? 1 : 0.5
    },

    image: {
      width: 60,
      height: 60,
      resizeMode: 'contain'
    },

    title: {
      ...pageTitle(isDarkScheme)
    },

    subtitle: {
      ...pageSubtitle(isDarkScheme),
      marginBottom: 40
    },

    exampleContainer: {
      width: '100%',
      flex: 1,
      justifyContent: 'center'
    },

    fromMessage: {
      backgroundColor: '#04c140',
      borderRadius: 20,
      borderTopLeftRadius: 5,
      marginBottom: 20,
      padding: 15,
      maxWidth: '75%',
      float: 'left',
      shadowColor: '#00ff4f',
      shadowRadius: 40,
      shadowOpacity: isDarkScheme ? 0.25 : 0.5
    },

    toMessage: {
      backgroundColor: '#0f76e3',
      borderRadius: 20,
      borderTopRightRadius: 5,
      marginBottom: 20,
      padding: 15,
      maxWidth: '75%',
      shadowColor: '#007aff',
      shadowRadius: 40,
      shadowOpacity: isDarkScheme ? 0.25 : 0.5
    },

    messageText: {
      color: 'white',
      fontSize: 16
    }

  }
}
</script>
