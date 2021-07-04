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
    <image :style="styles.image" :source="require('@/assets/protect.png')" />
    <view>
      <text :style="styles.title">Save and Secure</text>
      <text :style="styles.subtitle">Keep your MultiCash always within reach in a secure and safe bank-like app with the benefits of the future.</text>
    </view>

    <view :style="styles.exampleContainer">

      <view :style="{ transform: [{ rotate: '-7deg' }, { scaleY: 1.2 }, { scaleX: 1.2 }, { translateX: 50 }] }">
        <view :style="styles.wordContainer2">
          <view :style="styles.wordNumber">
            <text :style="styles.number">1</text>
          </view>
          <text :style="styles.word">recovery</text>
        </view>
      </view>

      <view :style="{ alignItems: 'flex-end', transform: [{ rotate: '2deg' }, { scaleY: 1.5 }, { scaleX: 1.5 }, { translateX: -70 }] }">
        <view :style="styles.wordContainer">
          <view :style="styles.wordNumber">
            <text :style="styles.number">2</text>
          </view>
          <text :style="styles.word">code</text>
        </view>
      </view>

      <view :style="{ transform: [{ rotate: '2deg' }] }">
        <view :style="styles.wordContainer">
          <view :style="styles.wordNumber">
            <text :style="styles.number">3</text>
          </view>
          <text :style="styles.word">known</text>
        </view>
      </view>

      <view :style="{ alignItems: 'center', transform: [{ scaleY: 1.1 }, { scaleX: 1.1 }] }">
        <view :style="styles.wordContainer2">
          <view :style="styles.wordNumber">
            <text :style="styles.number">4</text>
          </view>
          <text :style="styles.word">only</text>
        </view>
      </view>

      <view :style="{ alignItems: 'flex-end', transform: [{ rotate: '-10deg' }] }">
        <view :style="styles.wordContainer">
          <view :style="styles.wordNumber">
            <text :style="styles.number">5</text>
          </view>
          <text :style="styles.word">by</text>
        </view>
      </view>

      <view :style="{ marginLeft: 20, transform: [{ rotate: '10deg' }, { scaleY: 1.3 }, { scaleX: 1.3 }, { translateX: 40 }] }">
        <view :style="styles.wordContainer2">
          <view :style="styles.wordNumber">
            <text :style="styles.number">6</text>
          </view>
          <text :style="styles.word">you</text>
        </view>
      </view>

    </view>
  </view>
</template>

<script>
import { pageSubtitle, pageTitle } from '@/core/support/styles'

export default {
  name: 'SaveAndSecure',

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

    image: { width: 60, height: 60, resizeMode: 'contain' },

    title: {
      ...pageTitle(isDarkScheme),
      color: '#109c5f'
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

    wordContainer: {
      backgroundColor: isDarkScheme ? 'black' : 'white',
      width: '30%',
      borderRadius: 5,
      marginBottom: 10,
      alignItems: 'stretch',
      justifyContent: 'center',
      flexDirection: 'row',
      shadowColor: '#002be9',
      shadowRadius: 60,
      shadowOpacity: isDarkScheme ? 0.25 : 0.5
    },

    wordContainer2: {
      backgroundColor: isDarkScheme ? 'black' : 'white',
      width: '30%',
      borderRadius: 5,
      marginBottom: 10,
      alignItems: 'stretch',
      justifyContent: 'center',
      flexDirection: 'row',
      shadowColor: '#3ae900',
      shadowRadius: 60,
      shadowOpacity: isDarkScheme ? 0.35 : 0.7
    },

    wordNumber: {
      borderTopLeftRadius: 5,
      borderBottomLeftRadius: 5,
      backgroundColor: '#32b680',
      paddingHorizontal: 10,
      alignItems: 'center',
      justifyContent: 'center'
    },

    number: {
      color: 'white',
      fontSize: 12,
      fontWeight: 'bold'
    },

    word: {
      flex: 1,
      textAlign: 'center',
      paddingHorizontal: 5,
      paddingVertical: 10,
      color: isDarkScheme ? 'white' : 'black'
    }

  }
}
</script>
