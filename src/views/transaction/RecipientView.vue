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
  <view-background no-padding>
    <modal-navigation
      title="Choose recipient"
      has-back-button
      @on-dismiss="navigation.goBack()"
    />
    <table-view :sections="data" type="small" subtitle="primary"/>
  </view-background>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'RecipientView',

  computed: {
    ...mapGetters(['contacts']),

    contactsList () {
      if (this.contacts.length === 0) {
        return []
      }

      return this.contacts.map(contact => {
        return {
          title: contact.name,
          subtitle: contact.tagOrAddress,
          leftIcon: { name: contact.icon.name, color: contact.icon.color, size: 40 },
          rightIcon: contact.isFavorite ? { name: 'star', color: '#FFDD57', size: 20 } : undefined,
          meta: {
            isFavorite: contact.isFavorite
          },
          onPress: () => {
            const transaction = this.route.params.transaction
            transaction.setContact(contact)

            this.navigation.navigate('confirm', this.route.params)
          }
        }
      })
    },

    favorites () {
      return this.contactsList.filter(contact => contact.meta.isFavorite)
    },

    recents () {
      return this.contactsList.filter(contact => !contact.meta.isFavorite)
    },

    data () {
      const data = [
        {
          data: [
            {
              title: 'My accounts',
              leftAvatar: { source: require('@/assets/coin-wallet.png'), size: 40 },
              onPress: () => {
                this.navigation.navigate('wallets', { navigate: 'confirm', ...this.route.params })
              }
            },
            this.route.params.transaction.isReceive ? {
              title: 'Share QR code',
              leftAvatar: { source: require('@/assets/qr-code.png'), size: 40 },
              onPress: () => {
                this.navigation.navigate('qr', this.route.params)
              }
            } : {
              title: 'Enter recipient address/tag',
              leftAvatar: { source: require('@/assets/barcode-scanner.png'), size: 40 },
              onPress: () => {
                this.navigation.navigate('enterRecipient', this.route.params)
              }
            }
          ]
        }
      ]

      if (this.favorites.length > 0) {
        data.push({
          title: 'Favorites',
          data: this.favorites
        })
      }

      if (this.recents.length > 0) {
        data.push({
          title: 'Recent',
          data: this.recents
        })
      }

      return data
    }
  }
}
</script>
