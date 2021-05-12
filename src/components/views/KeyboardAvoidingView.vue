<template>
  <keyboard-avoiding-view
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

  computed: {
    styles () {
      return styleStore(this.isDarkScheme)
    },

    behavior () {
      return Platform.OS === 'ios' ? 'position' : null
    }
  },

  props: {
    keyboardVerticalOffset: {
      type: Number,
      default: -50
    }
  }
}

const styleStore = (isDarkScheme) => {
  return {
    container: {
      flex: 1
    },

    contentContainer: {
      flex: 1
    }
  }
}
</script>
