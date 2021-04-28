<template>
  <view :style="styles.container">
    <image :style="styles.image" :source="require('@/assets/tags.png')" />
    <view>
      <text :style="styles.title">Account Tags</text>
      <text :style="styles.subtitle">Pay each other by using your created account tags.</text>
    </view>

    <view :style="styles.exampleContainer">

      <view :style="styles.fromMessage">
        <text :style="styles.messageText">Hé send me your MCX tag, so I can pay you back for the coffee ☕️</text>
      </view>

      <view :style="{ alignItems: 'flex-end' }">
        <view :style="styles.toMessage">
          <text :style="styles.messageText">Ah sweet! My accounts tag is <text :style="{ fontWeight: 'bold' }">@MyAccount</text></text>
        </view>
      </view>

      <view :style="styles.fromMessage">
        <text :style="styles.messageText">Alrighty then it's done 👍</text>
      </view>

      <view :style="{ alignItems: 'flex-end' }">
        <view :style="styles.toMessage">
          <text :style="styles.messageText">Wow that was fast 🤩</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import { sectionTitle, subtitle } from '@/core/support/styles'

export default {
  name: 'WalletTags',

  computed: {
    styles () {
      return styleStore(this.isDarkScheme)
    }
  }
}

const styleStore = (isDarkScheme) => {
  return {

    container: { alignItems: 'center' },

    image: { width: 60, height: 60, cover: 'contain' },

    title: {
      fontSize: 30,
      fontWeight: '900',
      textAlign: 'center',
      color: sectionTitle(isDarkScheme).color
    },

    subtitle: {
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 40,
      color: subtitle(isDarkScheme).color
    },

    exampleContainer: {
      width: '100%',
      flex: 1,
      justifyContent: 'center'
    },

    fromMessage: {
      backgroundColor: '#04c140',
      borderRadius: 20,
      borderTopLeftRadius: 5,
      marginBottom: 20,
      padding: 15,
      maxWidth: '75%',
      float: 'left',
      shadowColor: '#00ff4f',
      shadowRadius: 40,
      shadowOpacity: isDarkScheme ? 0.25 : 0.5
    },

    toMessage: {
      backgroundColor: '#0f76e3',
      borderRadius: 20,
      borderTopRightRadius: 5,
      marginBottom: 20,
      padding: 15,
      maxWidth: '75%',
      shadowColor: '#007aff',
      shadowRadius: 40,
      shadowOpacity: isDarkScheme ? 0.25 : 0.5
    },

    messageText: {
      color: 'white',
      fontSize: 16
    }

  }
}
</script>
