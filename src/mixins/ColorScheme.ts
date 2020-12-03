import Vue from 'vue-native-core'
import { Appearance } from 'react-native'

const store = new Vue({
  data () {
    return {
      colorScheme: Appearance.getColorScheme()
    }
  },
  methods: {
    setColorScheme (colorScheme: string) {
      // @ts-ignore
      this.colorScheme = colorScheme
    }
  }
})

Vue.mixin({
  created () {
    // @ts-ignore
    Appearance.addChangeListener(this.handleAppearanceChange)
  },

  destroyed () {
    // @ts-ignore
    Appearance.removeChangeListener(this.handleAppearanceChange)
  },

  computed: {
    colorScheme () {
      // @ts-ignore
      return store.colorScheme
    },

    isDarkScheme () {
      // @ts-ignore
      return store.colorScheme === 'dark'
    },

    isLightScheme () {
      // @ts-ignore
      return store.colorScheme === 'light'
    }
  },

  methods: {
    // @ts-ignore
    handleAppearanceChange (preferences) {
      // @ts-ignore
      store.setColorScheme(preferences.colorScheme)
    }
  }
})
