<template>
  <view :style="{ flex: 1 }">
    <modal-navigation
      title="Restore key"
      has-back-button
      @on-dismiss="navigation.goBack()"
    />
    <view-background :style="{ paddingBottom: 50 }" scrollable>

      <view :style="styles.headerContainer">
        <view :style="{ flexDirection: 'row' }">
          <image :style="styles.headerImage1" :source="require('@/assets/restore-key.png')"/>
          <image :style="styles.headerImage2" :source="require('@/assets/restore-key-safe.png')"/>
        </view>
        <text :style="styles.headerTitle">Enter your restore key!</text>
        <text :style="styles.headerSubtitle">
          Enter your restore key to recreate your wallet! It should be 12 words all lowercased.
        </text>
      </view>

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
      v-if="words.length === 12"
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
      marginVertical: 5
    },

    headerSubtitle: {
      fontSize: 12,
      color: isDarkScheme ? '#b3aabe' : '#72677b',
      marginVertical: 5,
      textAlign: 'center'
    },

    headerImage1: {
      zIndex: 10,
      width: 80,
      height: 80,
      marginTop: 0,
      marginRight: -40,
      resizeMode: 'contain'
    },

    headerImage2: {
      width: 100,
      height: 100,
      resizeMode: 'contain',
      marginTop: 20,
      marginBottom: 5
    },

    wordsCounter: {
      marginVertical: 5
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
