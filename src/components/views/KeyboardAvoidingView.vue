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
  <keyboard-avoiding-view
    ref="view"
    :style="styles.contentContainer"
    :behavior="behavior"
    :contentContainerStyle="styles.contentContainer"
    :keyboardVerticalOffset="keyboardVerticalOffset"
    :enabled="true"
  >
    <slot />
  </keyboard-avoiding-view>
</template>

<script>
import { Platform, KeyboardAvoidingView } from 'react-native'

export default {
  name: 'KeyboardAvoidingView',

  components: { KeyboardAvoidingView },

  props: {
    keyboardVerticalOffset: {
      type: Number,
      default () {
        switch (Platform.OS) {
          case 'android':
          case 'ios':
            return 200
          default:
            return 0
        }
      }
    }
  },

  computed: {
    styles () {
      return styleStore(this.isDarkScheme)
    },

    behavior () {
      return 'position'
    }
  }
}

const styleStore = (isDarkScheme) => {
  return {
    contentContainer: {
      flex: 1
    }
  }
}
</script>
