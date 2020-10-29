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
        <text :style="styles.headerTitle">Write down your restore key!</text>
        <text :style="styles.headerSubtitle">
          A restore key is the ONLY WAY to restore your wallet and open it in another app.
          If you lose it you can never recover it and you'll lose access to your MultiCash.
          So make absolutely sure to keep it very safe!
        </text>
      </view>

      <view :style="styles.wordsGrid">
        <view :style="styles.wordContainer" v-for="(word, i) in words" :key="word">
          <view :style="styles.wordNumber">
            <text :style="styles.number">{{ i + 1 }}</text>
          </view>
          <text :style="styles.word">{{ word }}</text>
        </view>
      </view>

      <switch-notification
        :value.sync="wordsAreBackedUp"
        @input="wordsAreBackedUp = $event"
        label="I hereby declare I've written down the restore key."
        type="warning"
      />

      <rounded-button
        v-if="wordsAreBackedUp"
        title="Proceed"
        @on-press="navigation.navigate('confirm')"
      />

    </view-background>
  </view>
</template>

<script>
export default {
  name: 'RestoreKeyView',

  data () {
    return {
      words: [
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
        'ten',
        'eleven',
        'twelve'
      ],

      wordsAreBackedUp: false
    }
  },

  computed: {
    styles () {
      return stylesStore(this.isDarkScheme)
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

    wordsGrid: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      marginBottom: 20
    },

    wordContainer: {
      backgroundColor: isDarkScheme ? 'black' : 'white',
      width: '30%',
      borderRadius: 5,
      marginBottom: 10,
      alignItems: 'stretch',
      justifyContent: 'center',
      flexDirection: 'row',
      overflow: 'hidden'
    },

    wordNumber: {
      backgroundColor: '#32b680',
      paddingHorizontal: 10,
      alignItems: 'center',
      justifyContent: 'center'
    },

    number: {
      color: 'white',
      fontSize: 12,
      fontWeight: 'bold'
    },

    word: {
      flex: 1,
      textAlign: 'center',
      paddingHorizontal: 5,
      paddingVertical: 10,
      color: isDarkScheme ? 'white' : 'black'
    },

    switchNotification: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: isDarkScheme ? '#ffdd57' : '#ffdd57',
      borderRadius: 10,
      padding: 15,
      marginBottom: 10
    },

    switchNotificationText: {
      color: '#3b3b3b',
      flex: 1
    },

    switchTrackColor: {
      false: '#e5d59f',
      true: '#32b680'
    }
  }
}
</script>
