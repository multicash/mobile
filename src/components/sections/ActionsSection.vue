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
  <view-section title="Actions">
    <scroll-view
      :style="{ margin: -30 }"
      horizontal
      :showsHorizontalScrollIndicator="false"
    >
      <view
        :style="styles.actions"
      >
        <action-button
          title="Pay"
          :icon="require('@/assets/send.png')"
          @on-press="$emit('pay')"
        />

        <spacer/>

        <action-button
          title="Receive"
          :icon="require('@/assets/receive.png')"
          @on-press="$emit('receive')"
        />

        <spacer/>

        <action-button
          title="Top up"
          :icon="require('@/assets/add-dollar.png')"
          type="success"
          @on-press="$emit('topUp')"
        />

        <spacer/>

        <action-button
          title="Invest"
          :icon="require('@/assets/duration-finance.png')"
          type="warning"
          @on-press="$emit('invest')"
        />

        <spacer/>

        <action-button
          title="Change"
          :icon="require('@/assets/dollar-bitcoin-exchange.png')"
          type="secondary"
          @on-press="$emit('change')"
        />
      </view>
    </scroll-view>

    <spacer />

    <view :style="styles.actionsSecondary">
      <secondary-round-button
        icon="qr-code"
        title=""
        @on-press="$emit('scanQR')"
      />

      <spacer
        v-if="hasNfcSupported"
      />

      <secondary-round-button
        v-if="hasNfcSupported"
        @on-press="$emit('scanNFC')"
      >
        <image
          :style="styles.nfcImage"
          :source="require('@/assets/nfc-logo.png')"
        />
      </secondary-round-button>
    </view>
  </view-section>
</template>

<script>
import NfcManager from 'react-native-nfc-manager'
import { isEmulatorSync, isCameraPresentSync } from 'react-native-device-info'

export default {
  name: 'ActionsSection',

  data () {
    return {
      hasCamera: isCameraPresentSync,
      hasNfcSupported: isEmulatorSync
    }
  },

  computed: {
    styles () {
      return stylesStore(this.isDarkScheme)
    }
  },

  created () {
    NfcManager.isSupported().then(isSupported => {
      if (!isEmulatorSync) {
        this.hasNfcSupported = isSupported
      }
    })
  }
}

const stylesStore = (isDarkScheme) => {
  return {
    actions: {
      margin: 30,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between'
    },

    actionsSecondary: {
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row'
    },

    nfcImage: {
      width: 25,
      height: 25,
      resizeMode: 'contain',
      tintColor: isDarkScheme ? 'white' : 'black'
    }
  }
}
</script>
