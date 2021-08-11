<!--MultiCash Mobile-->
<!--Copyright (C) 2021  MultiCash Developers-->

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
    <modal-navigation
      title="Restore key"
      has-back-button
      @on-dismiss="navigation.goBack()"
    />
    <keyboard-avoiding-view :keyboardVerticalOffset="-150">
      <view-background ref="scrollView" :style="{ paddingBottom: 50 }" scrollable>

        <header-view
          title="Enter your restore key!"
          subtitle="Enter your restore key to recreate your account! It should be 12 words all lowercased."
          :image-background="require('@/assets/safe.png')"
          :image-foreground="require('@/assets/key.png')"
        />

        <view :style="styles.wordsContainer">
          <rounded-text-input
            title="Restore key"
            multiline
            auto-capitalize="none"
            auto-complete-type="off"
            :auto-correct="false"
            @input="onKeyup"
          />
          <view :style="styles.wordsCounter">
            <text :style="styles.wordsCounterText">{{ words.length }}/12 words</text>
          </view>
        </view>

        <spacer v-if="checkingRestoreKey || successfullyRestored" />
        <notification
          v-if="checkingRestoreKey || successfullyRestored"
          :loading="checkingRestoreKey"
          icon="checkmark-circle"
          label="With the given restore key we successfully found an existing account!"
          type="success"
        />

        <view :style="styles.proceedButtonPlaceholder" />

      </view-background>
    </keyboard-avoiding-view>

    <rounded-button
      v-if="words.length === 12 && !checkingRestoreKey"
      :style="styles.proceedButton"
      title="Proceed"
      @on-press="proceed"
    />
  </view>
</template>

<script>
export default {
  name: 'EnterRestoreKeyView',

  data () {
    return {
      words: [],
      checkingRestoreKey: false,
      successfullyRestored: false
    }
  },

  computed: {
    styles () {
      return stylesStore(this.isDarkScheme)
    }
  },

  methods: {
    onKeyup (text) {
      this.words = text.split(' ')

      if (this.words[this.words.length - 1] === '') {
        this.words.splice(-1, 1)
      }
    },

    proceed () {
      if (this.successfullyRestored) {
        const walletConfig = this.$walletManager.getTempWallet(this.route.params.identifier)

        walletConfig.restoreKey = this.words.join(' ')
        walletConfig.tag = `@dummytag${(Math.random() * 1000).toFixed(0)}`

        this.navigation.navigate('confirm', {
          identifier: walletConfig.identifier
        })
      }

      this.checkingRestoreKey = true
      setTimeout(() => {
        this.checkingRestoreKey = false
        this.successfullyRestored = true
      }, 1000)
    }
  }
}

const stylesStore = (isDarkScheme) => {
  return {
    wordsContainer: {
    },

    wordsCounter: {
      position: 'absolute',
      bottom: 10,
      right: 10
    },

    wordsCounterText: {
      color: isDarkScheme ? '#b3aabe' : '#72677b',
      textAlign: 'right'
    },

    proceedButtonPlaceholder: {
      height: 120
    },

    proceedButton: {
      position: 'absolute',
      bottom: 30,
      left: 20,
      right: 20
    }
  }
}
</script>
