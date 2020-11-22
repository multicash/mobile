<template>
  <safe-area-view :style="styles.safeArea">
    <view :style="styles.container">
      <image :style="styles.image1" :source="require('@/assets/checked.png')" />
      <text :style="styles.title">MultiCash is ready</text>
      <text :style="styles.subtitle">Keep your MultiCash always within reach in a secure and safe bank-like app with the benefits of the future.</text>
    </view>
    <rounded-button
      title="Finish setup"
      @on-press="done"
    />
  </safe-area-view>
</template>

<script>
import { SafeAreaView } from 'react-native-safe-area-context'
import { mapActions } from 'vuex'

export default {
  components: { SafeAreaView },

  data () {
    return {}
  },

  computed: {
    styles () {
      return stylesStore(this.isDarkScheme)
    }
  },

  methods: {
    ...mapActions(['updateIsSetup', 'updateIsAuthenticated']),

    done () {
      this.updateIsAuthenticated(true)
      this.updateIsSetup(true)
    }
  }
}

const stylesStore = (isDarkScheme) => {
  return {
    safeArea: {
      height: '100%',
      backgroundColor: '#0f1c37',
      flex: 1,
      padding: 20
    },

    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },

    image1: {
      width: 100,
      height: 100,
      marginBottom: 10,
      resizeMode: 'contain'
    },

    title: {
      color: isDarkScheme ? 'white' : 'black',
      fontSize: 28,
      fontWeight: '800',
      paddingBottom: 10,
      textAlign: 'center'
    },

    subtitle: {
      color: isDarkScheme ? '#b9b9b9' : '#4d4d4d',
      fontSize: 16,
      fontWeight: '600',
      textAlign: 'center'
    }
  }
}
</script>