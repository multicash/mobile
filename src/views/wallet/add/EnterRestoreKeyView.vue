<template>
  <view :style="{ flex: 1 }">
    <modal-navigation
      title="Restore key"
      has-back-button
      @on-dismiss="navigation.goBack()"
    />
    <view-background :style="{ paddingBottom: 50 }" scrollable>

      <header-view
        title="Enter your restore key!"
        subtitle="Enter your restore key to recreate your wallet! It should be 12 words all lowercased."
        :image-background="require('@/assets/restore-key-safe.png')"
        :image-foreground="require('@/assets/restore-key.png')"
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
        label="With the given restore key we successfully found an existing wallet!"
        type="success"
      />

      <view :style="styles.proceedButtonPlaceholder" />

    </view-background>

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
        this.navigation.navigate('confirm')
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
