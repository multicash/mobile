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
          <icon v-if="character === 'auth' && biometryTypeIcon" :name="biometryTypeIcon" />
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
      switch (this.biometryType) {
        case ReactNativeBiometrics.FaceID:
          return 'happy'
        case ReactNativeBiometrics.Biometrics:
        case ReactNativeBiometrics.TouchID:
          return 'finger-print'
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
    }
  }
}
</script>
