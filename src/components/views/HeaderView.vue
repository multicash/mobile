<template>
  <view :style="styles.headerContainer">
    <view :style="{ flexDirection: 'row' }">
      <image v-if="imageForeground" :style="styles.headerImage1" :source="imageForeground"/>
      <image v-if="imageBackground" :style="styles.headerImage2" :source="imageBackground"/>
    </view>
    <text :style="styles.headerTitle">{{ title }}</text>
    <text v-if="subtitle" :style="styles.headerSubtitle">{{ subtitle }}</text>
  </view>
</template>

<script>
import { pageSubtitle, pageTitle } from '@/core/support/styles'

export default {
  name: 'HeaderView',

  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String
    },
    imageBackground: {
      default: null
    },
    imageForeground: {
      default: null
    }
  },

  computed: {
    styles () {
      return stylesStore(this.isDarkScheme, !!this.imageForeground)
    }
  }
}

const stylesStore = (isDarkScheme, hasImageForeground) => {
  return {
    headerContainer: {
      marginHorizontal: 20,
      marginTop: 20,
      justifyContent: 'center',
      alignItems: 'center'
    },

    headerTitle: {
      ...pageTitle(isDarkScheme)
    },

    headerSubtitle: {
      ...pageSubtitle(isDarkScheme)
    },

    headerImage1: {
      zIndex: 10,
      width: 40,
      height: 40,
      marginTop: 0,
      marginRight: hasImageForeground ? -25 : 0,
      resizeMode: 'contain'
    },

    headerImage2: {
      width: 60,
      height: 60,
      resizeMode: 'contain',
      marginTop: 10,
      marginBottom: 2.5
    }
  }
}
</script>
