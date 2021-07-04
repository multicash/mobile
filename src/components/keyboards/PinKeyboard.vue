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
  <view :style="styles.keyboardContainer">

    <view
      v-for="(characters, i) in keyboardLayout"
      :key="i"
      :style="styles.keyboardRow"
    >
      <template
        v-for="character in characters"
      >
        <keyboard-key
          v-if="!(character === 'auth' && !biometryTypeIcon)"
          :key="character"
          :label="character"
          @keydown="keyDown(character)"
        >
          <image
            v-if="character === 'auth' && biometryTypeIcon"
            :source="biometryTypeIcon"
            :style="styles.biometryTypeIcon"
          />
          <icon v-else-if="character === 'del'" name="backspace" />
        </keyboard-key>
        <view
          v-else
          :key="character"
          :style="{ flex: 0.3 }"
        />
      </template>
    </view>

  </view>
</template>

<script>
import ReactNativeBiometrics from 'react-native-biometrics'
import ReactNativeHapticFeedback from 'react-native-haptic-feedback'

const AUTH_CHARACTER = 'auth'
const DEL_CHARACTER = 'del'
const KEYBOARD_LAYOUT = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [AUTH_CHARACTER, 0, DEL_CHARACTER]
]

export default {
  name: 'PinKeyboard',

  props: {
    value: {
      type: Array,
      required: true
    },

    biometricUnlockable: {
      type: Boolean,
      default: false
    },

    biometryType: {
      type: String,
      default: null
    },

    maxLength: {
      type: Number,
      default: 4
    }
  },

  computed: {
    biometryTypeIcon () {
      if (!this.biometricUnlockable) {
        return false
      }

      switch (this.biometryType) {
        case ReactNativeBiometrics.FaceID:
          return require('@/assets/face-id.png')
        case ReactNativeBiometrics.Biometrics:
          return require('@/assets/fingerprint.png')
        case ReactNativeBiometrics.TouchID:
          return require('@/assets/touch-id.png')
        default:
          return false
      }
    },

    styles () {
      return stylesStore(this.isDarkScheme)
    },

    keyboardLayout () {
      return KEYBOARD_LAYOUT
    }
  },

  methods: {
    keyDown (charater) {
      ReactNativeHapticFeedback.trigger('impactLight', {
        enableVibrateFallback: true,
        ignoreAndroidSystemSettings: false
      })

      const index = Object.keys(this.value).length
      const value = this.value

      switch (charater) {
        case DEL_CHARACTER:
          delete value[index - 1]
          break
        case AUTH_CHARACTER:
          this.$emit('auth-requested')
          break
        default:
          if (value.filter(v => v !== undefined).length >= this.maxLength) {
            return
          }

          value[index] = charater
          break
      }

      this.$emit('input', value)
    }
  }
}

const stylesStore = (isDarkScheme) => {
  return {
    keyboardContainer: {
      flex: 1,
      width: '100%',
      maxWidth: 300,
      maxHeight: 350,
      marginHorizontal: 50
    },

    keyboardRow: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },

    biometryTypeIcon: {
      width: 40,
      height: 40,
      resizeMode: 'contain'
    }
  }
}
</script>
