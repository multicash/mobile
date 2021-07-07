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
  <modal-view
    has-back-button
    title="Export account"
    @on-dismiss="navigation.goBack()"
    scrollable
  >
    <keyboard-avoiding-view>
      <header-view
        title="Export your account"
        subtitle="In order to recover your account you need the restore key. Use the export option to conveniently store your account in a save place."
        :image-background="require('@/assets/export.png')"
        :image-foreground="require('@/assets/open-box.png')"
      />

      <switch-notification
        :value.sync="encryptFile"
        @input="switchEncryption"
        label="File encryption"
      >
        <view v-if="encryptFile">
          <text :style="styles.encryptFileText">Because the export file contains all the data to your account we encourage you to encrypt your export file with a password.</text>
          <rounded-text-input
            ref="password"
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
        label="I understand what I'm doing and want to export my account into a separate file."
        type="warning"
      />

<!--      <view :style="styles.exportButtonPlaceholder" />-->

      <rounded-button
        v-if="acceptedTerm"
        title="Export"
        type="primary"
        @on-press="showShareSheet"
      />
    </keyboard-avoiding-view>
  </modal-view>
</template>

<script>
import { Platform } from 'react-native'
import Share from 'react-native-share'
import ExportImportManager from '@/core/wallet/ExportImportManager'
import base64 from 'react-native-base64'
import Messages from '@/core/logging/Messages'

const Log = global.Logger.extend('EXPORT')

export default {
  name: 'ExportView',

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
    }
  },

  methods: {
    switchEncryption (encryptFile) {
      this.encryptFile = encryptFile

      if (this.encryptFile) {
        setTimeout(() => {
          this.$refs.password.focus()
        }, 250)
      }
    },

    showShareSheet () {
      const exportContent = base64.encode(ExportImportManager.getExportContent(
        this.wallet,
        this.encryptFile ? this.encryptionPassword : null
      ))

      const title = `Export MultiCash account ${this.wallet.name}.json`
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
          Log.info(Messages.wallet('Successfully exported account', this.wallet))

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
    encryptFileText: {
      color: isDarkScheme ? '#b3aabe' : '#72677b',
      fontSize: 12,
      paddingBottom: 10
    }
  }
}
</script>
