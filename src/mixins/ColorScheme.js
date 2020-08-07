import Vue from 'vue-native-core'
import { Appearance } from 'react-native'

const store = new Vue({
  data () {
    return {
      colorScheme: Appearance.getColorScheme()
    }
  },
  methods: {
    setColorScheme (colorScheme) {
      this.colorScheme = colorScheme
    }
  }
})

Vue.mixin({
  created () {
    Appearance.addChangeListener(this.handleAppearanceChange)
  },

  destroyed () {
    Appearance.removeChangeListener(this.handleAppearanceChange)
  },

  computed: {
    colorScheme () {
      return store.colorScheme
    },

    isDarkScheme () {
      return store.colorScheme === 'dark'
    },

    isLightScheme () {
      return store.colorScheme === 'light'
    }
  },

  methods: {
    handleAppearanceChange (preferences) {
      store.setColorScheme(preferences.colorScheme)
    }
  }
})
