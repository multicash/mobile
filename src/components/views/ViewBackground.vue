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
<!--  <safe-area-view :style="styles.safeArea">-->
  <scroll-view
    ref="scrollView"
    v-if="scrollable"
    :style="styles.viewBackground"
    :contentContainerStyle="styles.contentContainer"
    contentInsetAdjustmentBehavior="automatic"
    :disableScrollViewPanResponder="true"
  >
    <slot/>
  </scroll-view>
  <view v-else :style="styles.viewBackground">
    <slot/>
  </view>
</template>

<script>
export default {
  name: 'ViewBackground',

  props: {
    noPadding: {
      type: Boolean,
      default: false
    },

    scrollable: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    styles () {
      return stylesStore(this.isDarkScheme, this.noPadding, this.scrollable)
    }
  },

  methods: {
    scrollTo (options) {
      if (this.$refs.scrollView) {
        this.$refs.scrollView.scrollTo(options)
      }
    }
  }
}

const stylesStore = (isDarkScheme, noPadding, scrollable) => {
  return {
    safeArea: {
      flex: 1,
      backgroundColor: isDarkScheme ? '#222429' : '#ededf3'
    },

    viewBackground: {
      flex: 1,
      padding: scrollable ? undefined : (noPadding ? 0 : 20),
      flexDirection: 'column',
      backgroundColor: isDarkScheme ? '#222429' : '#ededf3'
    },

    contentContainer: {
      padding: noPadding ? 0 : 20
    }
  }
}
</script>
