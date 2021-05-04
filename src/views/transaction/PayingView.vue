<template>
  <view-background no-padding>
    <linear-gradient
      v-if="!done"
      :style="styles.container"
      :colors="['#4c00ff', '#3900be']"
      :start="{ x: 0, y: 0 }"
      :end="{ x: 1, y: 1 }"
    >
      <text :style="styles.title">Payment in progress</text>
      <text :style="styles.subtitle">one sec...</text>
      <progress-view :progress="paymentSteps"/>
    </linear-gradient>
    <linear-gradient
      v-if="done"
      :style="styles.container"
      :colors="['#00e26d', '#1e9a5a']"
      :start="{ x: 0, y: 0 }"
      :end="{ x: 1, y: 1 }"
    >
      <image
        :style="styles.image"
        :source="require('@/assets/payed.png')"
      />
      <text :style="styles.title">You've Paid!</text>
    </linear-gradient>
  </view-background>
</template>

<script>
import LinearGradient from 'react-native-linear-gradient'
import ProgressView from '@/components/views/ProgressView'

export default {
  name: 'PayingView',

  components: { ProgressView, LinearGradient },

  data () {
    return {
      done: false,
      paymentSteps: 0.2
    }
  },

  created () {
    const interval = setInterval(() => {
      this.paymentSteps += 0.2
    }, 500)

    setTimeout(() => {
      this.done = true

      setTimeout(() => {
        const screenName = this.route.params.walletIdentifier ? 'wallet' : 'home'

        this.navigation.navigate(screenName)
        clearInterval(interval)
      }, 3000)
    }, 3000)
  },

  computed: {
    styles () {
      return stylesStore()
    }
  },

  methods: {}
}

const stylesStore = () => {
  return {
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 30
    },

    image: {
      width: 200,
      height: 200,
      resizeMode: 'contain'
    },

    title: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 35,
      textAlign: 'center',
      marginBottom: 10
    },

    subtitle: {
      color: 'white',
      fontWeight: '600'
    }
  }
}
</script>
