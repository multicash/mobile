<template>
  <safe-area-view :style="styles.safeArea">
    <status-bar barStyle="light-content" />
    <scroll-view
      :style="styles.scrollView"
      pagingEnabled
      horizontal
      :showsHorizontalScrollIndicator="false"
    >
      <view v-for="page in pages" :key="page.title" :style="styles.page">
        <view :style="{ flexDirection: 'row' }">
          <image :style="styles.headerImage1" :source="page.header1"/>
          <image :style="styles.headerImage2" :source="page.header2"/>
        </view>
        <text :style="styles.title">{{ page.title }}</text>
        <text :style="styles.description">{{ page.description }}</text>
      </view>
    </scroll-view>
    <view :style="styles.container">
      <rounded-button
        :style="{ width: '100%' }"
        title="Proceed"
        @on-press="navigation.navigate('setupPin')"
      />
    </view>
  </safe-area-view>
</template>

<script>
import { SafeAreaView } from 'react-native-safe-area-context'
import { Dimensions } from 'react-native'

export default {
  components: { SafeAreaView },

  data () {
    return {
      pages: [
        {
          title: 'Store, manage, and protect your MultiCash.',
          description: 'Keep your MultiCash always within reach in a secure and safe bank-like app with the benefits of the future.',
          header1: require('@/assets/restore-key.png'),
          header2: require('@/assets/restore-key-safe.png')
        },
        {
          title: 'Multiple Wallets!',
          description: 'MultiCash allows you to create multiple wallets. Create your main wallet and perhaps a savings wallet. Add up to 10 wallets to MultiCash!',
          header1: require('@/assets/new-wallet1.png'),
          header2: require('@/assets/new-wallet2.png')
        },
        {
          title: 'Wallet Tags!',
          description: 'MultiCash allows you to create wallet tags! Which will enable you to easily send and receive MCX to friends, family and businesses!',
          header1: require('@/assets/add-tag.png'),
          header2: require('@/assets/wallet.png')
        }
      ]
    }
  },

  computed: {
    styles () {
      return stylesStore()
    },

    dimensions () {
      return Dimensions
    }
  }
}

const stylesStore = () => {
  return {
    safeArea: {
      height: '100%',
      backgroundColor: '#0f1c37',
      flex: 1
    },

    scrollView: {
      flex: 1,
      width: '100%'
    },

    container: {
      padding: 20,
      justifyContent: 'center',
      alignItems: 'center'
    },

    page: {
      flex: 1,
      padding: 20,
      width: Dimensions.get('screen').width,
      justifyContent: 'center',
      alignItems: 'center'
    },

    headerImage1: {
      zIndex: 10,
      width: 120,
      height: 120,
      marginTop: -15,
      marginRight: -70,
      resizeMode: 'contain'
    },

    headerImage2: {
      width: 150,
      height: 150,
      resizeMode: 'contain'
    },

    title: {
      color: 'white',
      fontSize: 20,
      fontWeight: '600',
      textAlign: 'center',
      marginTop: 40,
      marginBottom: 10
    },

    description: {
      color: 'grey',
      textAlign: 'center'
    }
  }
}
</script>
