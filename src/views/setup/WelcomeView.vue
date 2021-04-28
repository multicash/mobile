<template>
  <safe-area-view :style="styles.safeArea">
    <status-bar barStyle="light-content" />
    <colors-background
      :min-height-percentage="70"
      :max-height-percentage="80"
    />
    <view :style="styles.container">
      <view
        :style="styles.content"
      >
        <image
          :style="styles.logo"
          :source="require('@/assets/logo-light.png')"
        />
        <text :style="styles.slogan">You are in control</text>
      </view>
      <rounded-button
        :style="{ width: '100%' }"
        title="Let's get started"
        @on-press="navigation.navigate('intro')"
      />
    </view>
  </safe-area-view>
</template>

<script>
import { SafeAreaView } from 'react-native-safe-area-context'

export default {
  components: { SafeAreaView },

  computed: {
    styles () {
      return stylesStore()
    }
  }
}

const stylesStore = () => {
  return {
    safeArea: {
      height: '100%',
      backgroundColor: '#220028',
      flex: 1
    },

    container: {
      flex: 1,
      padding: 20,
      justifyContent: 'center',
      alignItems: 'center'
    },

    content: {
      flex: 1,
      width: '80%',
      justifyContent: 'center',
      alignItems: 'center'
    },

    logo: {
      width: '100%',
      height: 50,
      resizeMode: 'contain'
    },

    slogan: {
      color: 'white',
      fontSize: 20,
      fontWeight: '900',
      textAlign: 'center'
    }
  }
}
</script>
