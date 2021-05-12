import Vue from 'vue-native-core'

Vue.mixin({
  methods: {
    focusInput () {
      // Scroll text input into view
      if (this.$refs.scrollView) {
        setTimeout(() => {
          // @ts-ignore
          this.$refs.scrollView.scrollTo({ x: 0, y: 2000, animated: true })
        }, 250)
      }
    }
  }
})
