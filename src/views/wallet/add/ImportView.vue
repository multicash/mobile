<template>
  <view :style="{ flex: 1 }">
    <modal-navigation
      title="Import a wallet"
      has-back-button
      @on-dismiss="navigation.goBack()"
    />
    <view-background :style="{ paddingBottom: 50 }" scrollable>

      <header-view
        title="Import an existing wallet"
        subtitle="Import an exported wallet file or paste the file contents here."
        :image-background="require('@/assets/import.png')"
        :image-foreground="require('@/assets/cardcash.png')"
      />

      <rounded-text-input
        title="Paste import file contents"
        multiline
        :fontSize="12"
        @input="pastedContents = $event"
      />
      <text v-if="pastedContents === ''" :style="styles.orLabel">Or</text>
      <rounded-button
        v-if="pastedContents === ''"
        title="Choose an import file"
        @on-press="importFile"
      />

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
      v-if="pastedContents !== '' && !checkingRestoreKey"
      :style="styles.proceedButton"
      title="Proceed"
      @on-press="importPastedContents"
    />
  </view>
</template>

<script>
export default {
  name: 'ImportView',

  data () {
    return {
      pastedContents: '',
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
    importFile () {
      this.proceed()
    },

    importPastedContents () {
      this.proceed()
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
    orLabel: {
      color: isDarkScheme ? '#b3aabe' : '#72677b',
      fontWeight: '600',
      textAlign: 'center',
      marginVertical: 10
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
