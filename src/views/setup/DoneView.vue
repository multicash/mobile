<template>
  <safe-area-view :style="styles.safeArea">
    <status-bar bar-style="light-content" />
    <colors-background
      :full-screen="false"
      :style="{ height: '25%' }"
    />
    <view :style="styles.container">
      <image :style="styles.image1" :source="require('@/assets/checked.png')" />
      <text :style="styles.title">MultiCash is ready</text>
      <text :style="styles.subtitle">Keep your MultiCash always within reach in a secure and safe bank-like app with the benefits of the future.</text>
    </view>
    <rounded-button
      :style="{ maxWidth: 350, width: '100%' }"
      title="Finish setup"
      @on-press="done"
    />
  </safe-area-view>
</template>

<script>
import { SafeAreaView } from 'react-native-safe-area-context'
import { mapActions } from 'vuex'
import { sectionTitle, subtitle } from '@/core/support/styles'

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
    ...mapActions(['updateIsSetup']),

    done () {
      this.updateIsSetup(true)
    }
  }
}

const stylesStore = (isDarkScheme) => {
  return {
    safeArea: {
      height: '100%',
      backgroundColor: isDarkScheme ? '#0f0f11' : '#e8e8f3',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20
    },

    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      maxWidth: 450
    },

    image1: {
      width: 100,
      height: 100,
      borderRadius: 1000,
      marginBottom: 10,
      resizeMode: 'contain',
      shadowColor: '#3ae900',
      shadowRadius: 60,
      shadowOpacity: isDarkScheme ? 0.35 : 0.7
    },

    title: {
      color: sectionTitle(isDarkScheme).color,
      fontSize: 28,
      fontWeight: '900',
      paddingBottom: 10,
      textAlign: 'center'
    },

    subtitle: {
      color: subtitle(isDarkScheme).color,
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center'
    }
  }
}
</script>
