<template>
  <view-background no-padding>
    <linear-gradient
      v-if="!done"
      :style="styles.container"
      :colors="['#4c00ff', '#3900be']"
      :start="{ x: 0, y: 0 }"
      :end="{ x: 1, y: 1 }"
    >
      <animated:view
        :style="{
          transform: [{rotate: spin}],
          width: 200,
          height: 200,
          marginBottom: 10,
        }"
      >
        <image
          :style="styles.image"
          :source="require('@/assets/loading.png')"
        />
      </animated:view>
      <text :style="styles.title">Payment in progress</text>
      <text :style="styles.subtitle">one sec...</text>
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
import { Animated, Easing } from 'react-native'

export default {
  name: 'PayingView',

  components: { LinearGradient },

  data () {
    return {
      done: false,
      spinValue: 0,
      spin: '0deg',
      animatedValueRotate: 0
    }
  },

  created () {
    setTimeout(() => {
      this.done = true

      setTimeout(() => {
        const screenName = this.route.params.walletIdentifier ? 'wallet' : 'home'

        this.navigation.navigate(screenName)
      }, 3000)
    }, 3000)

    this.spinValue = new Animated.Value(0)
    this.animatedValueRotate = new Animated.Value(0)

    this.animationRotate()
  },

  computed: {
    styles () {
      return stylesStore()
    }
  },

  methods: {
    animationRotate () {
      this.spinValue.setValue(0)
      this.animatedValueRotate.setValue(0)

      Animated.timing(this.spinValue, {
        toValue: 1,
        duration: 1250,
        easing: Easing.linear,
        useNativeDriver: true
      })
        .start(() => {
          this.animationRotate()
        })

      this.spin = this.spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
      })
    }
  }
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
