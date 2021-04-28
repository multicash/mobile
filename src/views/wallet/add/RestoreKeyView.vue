<template>
  <view :style="{ flex: 1 }">
    <modal-navigation
      title="Restore key"
      has-back-button
      @on-dismiss="navigation.goBack()"
    />
    <view-background :style="{ paddingBottom: 50 }" scrollable>

      <header-view
        title="Write down your restore key!"
        :subtitle="'A restore key is the ONLY WAY to restore your wallet and open it in another app. If you lose it you can never recover it and you\'ll lose access to your MultiCash. So make absolutely sure to keep it very safe!'"
        :image-background="require('@/assets/safe.png')"
        :image-foreground="require('@/assets/key.png')"
      />

      <restore-key-grid-view :words="words" />

      <switch-notification
        :value.sync="wordsAreBackedUp"
        @input="wordsAreBackedUp = $event"
        label="I hereby declare I've written down the restore key."
        type="warning"
      />

      <view :style="styles.proceedButtonPlaceholder" />

    </view-background>

    <rounded-button
      v-if="wordsAreBackedUp"
      :style="styles.proceedButton"
      title="Proceed"
      @on-press="proceed"
    />
  </view>
</template>

<script>
export default {
  name: 'RestoreKeyView',

  data () {
    return {
      words: [],

      wordsAreBackedUp: false
    }
  },

  computed: {
    styles () {
      return stylesStore(this.isDarkScheme)
    }
  },

  created () {
    this.words = this.$walletManager.generateKey().toObj().mnemonic.split(' ')
  },

  methods: {
    proceed () {
      const walletConfig = this.$walletManager.getTempWallet(this.route.params.identifier)

      walletConfig.restoreKey = this.words.join(' ')

      this.navigation.navigate('confirm', {
        identifier: walletConfig.identifier
      })
    }
  }
}

const stylesStore = (isDarkScheme) => {
  return {
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
