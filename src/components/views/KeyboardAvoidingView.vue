<template>
  <keyboard-avoiding-view
    ref="view"
    :style="styles.contentContainer"
    :behavior="behavior"
    :contentContainerStyle="styles.contentContainer"
    :keyboardVerticalOffset="keyboardVerticalOffset"
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
      return Platform.OS === 'ios' ? 'position' : null
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
