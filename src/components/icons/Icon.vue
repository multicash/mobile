<template>
  <icon
    :name="name"
    :color="defaultColor"
    :size="size"
  />
</template>

<script>
import Icon from 'react-native-vector-icons/Ionicons'

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

    size: {
      type: Number,
      default: 24
    }
  },

  computed: {
    defaultColor () {
      return this.color ? this.color : (this.isDarkScheme ? 'white' : 'black')
    }
  }
}
</script>
