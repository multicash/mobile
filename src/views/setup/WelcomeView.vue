<template>
  <safe-area-view :style="styles.safeArea">
    <status-bar barStyle="light-content" />
    <view :style="styles.container">
      <image
        :style="styles.logo"
        :source="require('@/assets/logo-light.png')"
      />
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
      paddingHorizontal: 20,
      justifyContent: 'center',
      alignItems: 'center'
    },

    logo: {
      flex: 1,
      width: '80%',
      resizeMode: 'contain'
    }
  }
}
</script>
