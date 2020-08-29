<template>
  <view-background no-padding>
    <view v-if="!done" :style="styles.container">
      <image
        :style="styles.image"
        :source="require('@/assets/paying.png')"
      />
      <text :style="styles.title">Payment in progress</text>
      <text :style="styles.subtitle">one sec...</text>
    </view>
    <view v-if="done" :style="styles.container">
      <image
        :style="styles.image"
        :source="require('@/assets/payed.png')"
      />
      <text :style="styles.title">Paid!</text>
    </view>
  </view-background>
</template>

<script>
import ViewBackground from '@/components/ViewBackground'

export default {
  name: 'PayingScreen',

  components: { ViewBackground },

  data () {
    return {
      done: false
    }
  },

  created () {
    setTimeout(() => {
      this.done = true

      setTimeout(() => {
        this.$parent.$parent.$emit('update:visible', false)
      }, 2000)
    }, 2000)
  },

  computed: {
    styles () {
      return stylesStore(this.done)
    }
  }
}

const stylesStore = (done) => {
  return {
    container: {
      flex: 1,
      backgroundColor: done ? '#991bb3' : '#4c00ff',
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
      color: 'white'
    }
  }
}
</script>
