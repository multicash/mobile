<template>
  <view :style="styles.headerContainer">
    <view :style="{ flexDirection: 'row' }">
      <image v-if="imageForeground" :style="styles.headerImage1" :source="imageForeground"/>
      <image :style="styles.headerImage2" :source="imageBackground"/>
    </view>
    <text :style="styles.headerTitle">{{ title }}</text>
    <text v-if="subtitle" :style="styles.headerSubtitle">{{ subtitle }}</text>
  </view>
</template>

<script>
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
      required: true
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
      marginBottom: 30,
      justifyContent: 'center',
      alignItems: 'center'
    },

    headerTitle: {
      fontSize: 24,
      fontWeight: '600',
      color: isDarkScheme ? 'white' : 'black',
      marginVertical: 5,
      textAlign: 'center'
    },

    headerSubtitle: {
      fontSize: 16,
      color: isDarkScheme ? '#b3aabe' : '#4a4350',
      marginVertical: 5,
      textAlign: 'center'
    },

    headerImage1: {
      zIndex: 10,
      width: 80,
      height: 80,
      marginTop: 0,
      marginRight: hasImageForeground ? -40 : 0,
      resizeMode: 'contain'
    },

    headerImage2: {
      width: 100,
      height: 100,
      resizeMode: 'contain',
      marginTop: 20,
      marginBottom: 5
    }
  }
}
</script>
