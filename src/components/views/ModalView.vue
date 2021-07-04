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
  <view :style="{ flex: 1 }">
    <slot name="header">
      <modal-navigation
        v-if="header"
        :has-back-button="hasBackButton"
        :has-close-button="hasCloseButton"
        :title="title"
        @on-dismiss="$emit('on-dismiss')"
      />
    </slot>
    <view-background
      ref="scrollView"
      :scrollable="scrollable"
      :no-padding="noPadding"
    >
      <slot/>
    </view-background>
  </view>
</template>

<script>
export default {
  name: 'ModalView',

  props: {
    title: {
      type: String,
      default: ''
    },

    hasBackButton: {
      type: Boolean,
      default: false
    },

    hasCloseButton: {
      type: Boolean,
      default: false
    },

    header: {
      type: Boolean,
      default: true
    },

    scrollable: {
      type: Boolean,
      default: false
    },

    noPadding: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    styles () {
      return styleStore(this.isDarkScheme)
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

const styleStore = (isDarkScheme) => {
  return {}
}
</script>
