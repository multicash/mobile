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
  <safe-area-view :style="styles.safeArea">
    <status-bar :bar-style="isDarkScheme ? 'light-content' : 'dark-content'" />

    <view :style="styles.container">
      <view :style="styles.contentContainer">
        <view :style="styles.imagesContainer">
          <image :style="styles.image1" :source="require('@/assets/protect.png')" />
          <image :style="styles.image2" :source="require('@/assets/touch-id.png')" />
          <image :style="styles.image3" :source="require('@/assets/phonelink-lock.png')" />
        </view>
        <view>
          <text :style="styles.title">Setup a PIN</text>
          <text :style="styles.subtitle">It's time to setup your MultiCash app PIN.</text>
          <text :style="styles.subtitle2">Your app PIN will be used to unlock this app, its settings and to verify yourself by paying with MCX. When you forget the PIN, you'll need to restore your accounts to access them again.</text>
        </view>
      </view>

      <rounded-button
        :style="{ maxWidth: 350, width: '100%' }"
        title="Setup PIN"
        type="primary"
        @on-press="navigation.navigate('setupPin')"
      />
    </view>
  </safe-area-view>
</template>

<script>
import { SafeAreaView } from 'react-native-safe-area-context'
import { pageSubtitle, pageTitle, subtitle } from '@/core/support/styles'

export default {
  name: 'PinExplanationView',

  components: {
    SafeAreaView
  },

  computed: {
    styles () {
      return stylesStore(this.isDarkScheme)
    }
  }
}

const stylesStore = (isDarkScheme) => {
  return {
    safeArea: {
      height: '100%',
      backgroundColor: isDarkScheme ? '#0f0f11' : '#e8e8f3',
      flex: 1
    },

    container: {
      flex: 1,
      padding: 20,
      justifyContent: 'center',
      alignItems: 'center'
    },

    contentContainer: {
      flex: 1,
      alignItems: 'center',
      maxWidth: 450
    },

    imagesContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },

    image1: {
      width: 120,
      height: 120,
      resizeMode: 'contain',
      transform: [
        { translateX: -60 },
        { rotate: '5deg' }
      ],
      shadowColor: '#00ff4f',
      shadowRadius: 20,
      shadowOpacity: isDarkScheme ? 0.5 : 1,
      overflow: 'visible'
    },

    image2: {
      width: 60,
      height: 60,
      resizeMode: 'contain',
      transform: [
        { translateX: 60 },
        { translateY: -20 },
        { scaleX: 1.5 },
        { scaleY: 1.5 },
        { rotate: '-8deg' }
      ],
      shadowColor: '#ff0059',
      shadowRadius: 20,
      shadowOpacity: isDarkScheme ? 0.75 : 1,
      overflow: 'visible'
    },

    image3: {
      width: 120,
      height: 120,
      resizeMode: 'contain',
      transform: [
        { rotate: '-3deg' }
      ],
      shadowColor: '#ffb300',
      shadowRadius: 20,
      shadowOpacity: isDarkScheme ? 0.5 : 1,
      overflow: 'visible'
    },

    title: {
      ...pageTitle(isDarkScheme),
      color: isDarkScheme ? '#b95c8b' : '#931A5A'
    },

    subtitle: {
      ...pageSubtitle(isDarkScheme),
      marginBottom: 20
    },

    subtitle2: {
      fontSize: 18,
      fontWeight: '600',
      textAlign: 'center',
      marginBottom: 40,
      color: subtitle(isDarkScheme).color
    }
  }
}
</script>
