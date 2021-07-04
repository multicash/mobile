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
  <modal-view
    title="Import an account"
    has-back-button
    @on-dismiss="navigation.goBack()"
    scrollable
  >
    <keyboard-avoiding-view
      :keyboard-vertical-offset="160"
    >
      <header-view
        title="Import an existing account"
        subtitle="Import an exported account file or paste the file contents here."
        :image-background="require('@/assets/import.png')"
        :image-foreground="require('@/assets/credit-card-cash-withdrawal.png')"
      />

      <rounded-text-input
        title="Paste import file contents"
        multiline
        :fontSize="12"
        :value="pastedContents"
        @input="pastedContents = $event"
      />
      <text v-if="pastedContents === ''" :style="styles.orLabel">Or</text>
      <rounded-button
        v-if="pastedContents === ''"
        title="Choose an import file"
        @on-press="importFile"
      />

      <spacer v-if="checkingRestoreKey || successfullyRestored"/>
      <notification
        v-if="checkingRestoreKey || successfullyRestored"
        :loading="checkingRestoreKey"
        icon="checkmark-circle"
        label="With the given restore key we successfully found an existing account!"
        type="success"
      />

      <view
        v-if="pastedContents !== '' && !checkingRestoreKey && resolvedWalletConfig === null"
      >
        <spacer />
        <rounded-button
          title="Proceed"
          @on-press="importPastedContents"
        />
      </view>

      <view
        v-if="resolvedWalletConfig"
      >
        <spacer />
        <rounded-button
          title="Import account"
          @on-press="createWallet"
        />
      </view>
    </keyboard-avoiding-view>
  </modal-view>
</template>

<script>
import DocumentPicker from 'react-native-document-picker'
import FileSystem from 'react-native-fs'
import ExportImportManager, { DecryptError } from '@/core/wallet/ExportImportManager'
import { Alert, Platform } from 'react-native'
import AndroidPrompt from 'react-native-prompt-android'

const Log = global.Logger.extend('IMPORT')
const exportImportManager = new ExportImportManager()

export default {
  name: 'ImportView',

  data () {
    return {
      pastedContents: '',
      checkingRestoreKey: false,
      successfullyRestored: false,
      resolvedWalletConfig: null
    }
  },

  computed: {
    styles () {
      return stylesStore(this.isDarkScheme)
    }
  },

  methods: {
    async importFile () {
      try {
        const res = await DocumentPicker.pick({
          type: [DocumentPicker.types.allFiles]
        })

        this.pastedContents = await FileSystem.readFile(decodeURI(res.uri))
      } catch (err) {
        if (!DocumentPicker.isCancel(err)) {
          Alert.alert('Couldn\'t open the selected file', err.message)
        }
      }
    },

    async importPastedContents () {
      try {
        const wallet = await exportImportManager.readWallet(this.pastedContents, this.showPasswordPrompt)

        this.proceed(wallet)
      } catch (e) {
        Log.error(`Couldn't read import contents: ${e}`)

        switch (e.constructor) {
          case SyntaxError:
            Log.info('Given file is not valid')

            Alert.alert(
              'Given file is not valid',
              'The file doesn\'t contain any valid account configuration.',
              [
                {
                  text: 'Ok',
                  onPress: () => {
                    this.pastedContents = ''
                  }
                }
              ]
            )
            break
          case DecryptError:
            Log.info('Wrong password entered')

            Alert.alert(
              'Wrong password entered',
              'Couldn\'t decrypt the import file because the given password was wrong, please try again.',
              [
                {
                  text: 'Cancel',
                  onPress: () => {
                    this.pastedContents = ''
                  }
                },
                { text: 'Try again', onPress: () => this.importPastedContents() }
              ]
            )
            break
        }
      }
    },

    async showPasswordPrompt () {
      return new Promise((resolve, reject) => {
        const title = 'File encrypted'
        const message = 'Enter your encryption password to unlock the encrypted import file.'
        const actions = [
          { text: 'Cancel', onPress: () => reject(new Error('No password entered')), style: 'cancel' },
          { text: 'Decrypt', onPress: (password) => resolve(password) }
        ]
        const type = 'secure-text'

        if (Platform.OS === 'ios') {
          Alert.prompt(title, message, actions, type)
        } else {
          AndroidPrompt(title, message, actions, { type })
        }
      })
    },

    proceed (wallet) {
      this.resolvedWalletConfig = wallet
      this.checkingRestoreKey = true
      setTimeout(() => {
        this.checkingRestoreKey = false
        this.successfullyRestored = true
      }, 1000)
    },

    createWallet () {
      const wallet = this.$walletManager.storeTempWallet(this.resolvedWalletConfig)

      this.navigation.navigate('confirm', { identifier: wallet.identifier })
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
    }
  }
}
</script>
