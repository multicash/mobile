<!--MultiCash Mobile-->
<!--Copyright (C) 2021  Swen van Zanten-->

<!--This program is free software: you can redistribute it and/or modify-->
<!--it under the terms of the GNU General Public License as published by-->
<!--the Free Software Foundation, either version 3 of the License, or-->
<!--any later version.-->

<!--This program is distributed in the hope that it will be useful,-->
<!--but WITHOUT ANY WARRANTY; without even the implied warranty of-->
<!--MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the-->
<!--GNU General Public License for more details.-->

<!--You should have received a copy of the GNU General Public License-->
<!--along with this program.  If not, see <https://www.gnu.org/licenses/>.-->

<template>
  <safe-area-view :style="styles.safeArea">
    <status-bar :bar-style="isDarkScheme ? 'light-content' : 'dark-content'" />
    <view :style="styles.contentContainer">
      <scroll-view
        :style="styles.scrollView"
        :contentContainerStyle="styles.scrollContentView"
        pagingEnabled
        horizontal
        :showsHorizontalScrollIndicator="false"
        :onScroll="(nice) => onScroll(nice)"
        :scrollEventThrottle="4"
      >
        <wallet-tags :style="styles.page" :active="currentPage === 0"/>
        <multiple-wallets :style="styles.page" :active="currentPage === 1"/>
        <save-and-secure :style="styles.page" :active="currentPage === 2"/>
      </scroll-view>
    </view>
    <view :style="styles.actionsContainer">
      <page-indicator
        :current-page="currentPage"
        :pages="3"
        :style="styles.pageIndicator"
      />
      <rounded-button
        :style="{ maxWidth: 350, width: '100%' }"
        :title="currentPage === 2 ? 'Proceed' : 'Skip'"
        :type="currentPage === 2 ? 'primary' : null"
        @on-press="navigation.navigate('pinExplanation')"
      />
    </view>
  </safe-area-view>
</template>

<script>
import { Platform } from 'react-native'
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
    },

    platform () {
      return Platform
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

    contentContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },

    scrollView: {
      flex: 1,
      width: '100%',
      maxWidth: 450,
      maxHeight: 600,
      overflow: 'visible'
    },

    scrollContentView: {
      width: Dimensions.get('screen').width * 3,
      maxWidth: 450 * 3
    },

    actionsContainer: {
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
