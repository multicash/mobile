<template>
  <keyboard-avoiding-view
    :style="{ flex: 1 }"
    :behavior="behavior"
  >
    <modal-navigation
      has-back-button
      title="Export wallet"
      @on-dismiss="navigation.goBack()"
    />
    <view-background :style="{ paddingBottom: 50 }" scrollable>
      <header-view
        title="Export your wallet"
        subtitle="In order to recover your wallet you need the restore key. Use the export option to conveniently store your wallet in a save place."
        :image-background="require('@/assets/export.png')"
        :image-foreground="require('@/assets/open-box.png')"
      />

      <switch-notification
        :value.sync="encryptFile"
        @input="encryptFile = $event"
        label="File encryption"
      >
        <view v-if="encryptFile">
          <text :style="styles.encryptFileText">Because the export file contains all the data to your wallet we encourage you to encrypt your export file with a password.</text>
          <rounded-text-input
            title="Password"
            secureTextEntry
            :value="encryptionPassword"
            @input="encryptionPassword = $event"
          />
        </view>
      </switch-notification>

      <switch-notification
        :value.sync="acceptedTerm"
        @input="acceptedTerm = $event"
        label="I understand what I'm doing and want to export my wallet into a separate file."
        type="warning"
      />

      <view :style="styles.exportButtonPlaceholder" />

    </view-background>

    <rounded-button
      v-if="acceptedTerm"
      :style="styles.exportButton"
      title="Export"
      @on-press="showShareSheet"
    />
  </keyboard-avoiding-view>
</template>

<script>
import { Platform, KeyboardAvoidingView } from 'react-native'
import Share from 'react-native-share'
import ExportImportManager from '@/core/wallet/ExportImportManager'
import base64 from 'react-native-base64'
import Messages from '@/core/logging/Messages'

const Log = global.Logger.extend('EXPORT')

export default {
  name: 'ExportView',

  components: { KeyboardAvoidingView },

  data () {
    return {
      encryptFile: false,
      acceptedTerm: false,
      encryptionPassword: ''
    }
  },

  computed: {
    styles () {
      return stylesStore(this.isDarkScheme)
    },

    behavior () {
      return Platform.OS === 'ios' ? 'padding' : null
    }
  },

  methods: {
    showShareSheet () {
      const exportContent = base64.encode(ExportImportManager.getExportContent(
        this.wallet,
        this.encryptFile ? this.encryptionPassword : null
      ))

      const title = `Export MultiCash wallet ${this.wallet.name}.json`
      const url = `data:application/json;base64,${exportContent}`

      const options = Platform.select({
        ios: {
          activityItemSources: [
            {
              placeholderItem: { type: 'url', content: url },
              item: {
                default: { type: 'url', content: url }
              },
              subject: {
                default: title
              },
              linkMetadata: { originalUrl: url, url, title }
            }
          ]
        },
        default: {
          title,
          subject: title,
          url
        }
      })

      Share.open(options)
        .then(() => {
          Log.info(Messages.wallet('Successfully exported wallet', this.wallet))

          this.encryptFile = false
          this.acceptedTerm = false
        })
        .catch(error => {
          Log.error(Messages.wallet(`Export failed: ${error.message}`, this.wallet))
        })
    }
  }
}

const stylesStore = (isDarkScheme) => {
  return {
    container: {

    },

    encryptFileText: {
      color: isDarkScheme ? '#b3aabe' : '#72677b',
      fontSize: 12,
      paddingBottom: 10
    },

    exportButtonPlaceholder: {
      height: 120
    },

    exportButton: {
      position: 'absolute',
      bottom: 30,
      left: 20,
      right: 20
    }
  }
}
</script>
