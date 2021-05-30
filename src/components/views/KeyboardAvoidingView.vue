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
