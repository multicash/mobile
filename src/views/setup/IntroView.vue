<template>
  <safe-area-view :style="styles.safeArea">
    <status-bar :bar-style="isDarkScheme ? 'light-content' : 'dark-content'" />
    <scroll-view
      :style="styles.scrollView"
      pagingEnabled
      horizontal
      :showsHorizontalScrollIndicator="false"
      :onScroll="(nice) => onScroll(nice)"
      :scrollEventThrottle="4"
    >
      <wallet-tags :style="styles.page"/>
      <multiple-wallets :style="styles.page"/>
      <save-and-secure :style="styles.page"/>
    </scroll-view>
    <view :style="styles.container">
      <page-indicator :current-page="currentPage" :pages="3" :style="styles.pageIndicator" />
      <rounded-button
        :style="{ width: '100%' }"
        :title="currentPage === 2 ? 'Proceed' : 'Skip'"
        @on-press="navigation.navigate('setupPin')"
      />
    </view>
  </safe-area-view>
</template>

<script>
import { SafeAreaView } from 'react-native-safe-area-context'
import { Dimensions } from 'react-native'
import WalletTags from '@/views/setup/intros/WalletTags'
import MultipleWallets from '@/views/setup/intros/MultipleWallets'
import SaveAndSecure from '@/views/setup/intros/SaveAndSecure'
import PageIndicator from '@/components/views/PageIndicator'

export default {
  components: {
    PageIndicator,
    SafeAreaView,
    WalletTags,
    MultipleWallets,
    SaveAndSecure
  },

  data () {
    return {
      currentPage: 0
    }
  },

  computed: {
    styles () {
      return stylesStore(this.isDarkScheme)
    },

    dimensions () {
      return Dimensions
    }
  },

  methods: {
    pageStyle (page) {
      return {
        ...this.styles.page,
        backgroundColor: page.backgroundColor
      }
    },

    onScroll (event) {
      this.currentPage = Math.round(event.nativeEvent.contentOffset.x / (event.nativeEvent.contentSize.width / 3))
    }
  }
}

const stylesStore = (isDarkScheme) => {
  return {
    safeArea: {
      height: '100%',
      backgroundColor: isDarkScheme ? '#0f0f11' : '#e8e8f3',
      flex: 1
    },

    scrollView: {
      flex: 1,
      width: '100%',
      overflow: 'visible'
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

    pageIndicator: {
      marginBottom: 20
    }
  }
}
</script>
