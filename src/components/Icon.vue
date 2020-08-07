<template>
  <icon :name="name" :color="defaultColor" :style="styles.icon" />
</template>

<style>

</style>

<script>
import Icon from 'react-native-ionicons'
import { Platform } from 'react-native'

export default {
  name: 'Icon',
  components: { Icon },

  props: {
    name: {
      type: String,
      default: undefined
    },

    color: {
      type: String,
      default: undefined
    },

    android: {
      type: String,
      default: undefined
    },

    ios: {
      type: String,
      default: undefined
    },

    size: {
      type: Number,
      default: undefined
    }
  },

  computed: {
    defaultColor () {
      return this.color || this.isDarkScheme ? 'white' : 'black'
    },

    styles () {
      return stylesStore(Platform.OS)
    }
  }
}

const stylesStore = (os) => {
  return {
    icon: {
      paddingTop: os === 'ios' ? 1 : 0,
      paddingLeft: os === 'ios' ? 1 : 0
    }
  }
}
</script>
