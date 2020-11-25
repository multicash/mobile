import Vue from 'vue-native-core'

Vue.mixin({
  props: {
    navigation: {
      type: Object
    },

    route: {
      type: Object
    }
  }
})
