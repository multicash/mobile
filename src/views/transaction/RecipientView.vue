<template>
  <view-background no-padding>
    <modal-navigation
      title="Choose recipient"
      has-back-button
      @on-dismiss="navigation.goBack()"
    />
    <table-view :sections="data" type="small"/>
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

    data () {
      const data = [
        {
          data: [
            {
              title: 'My wallets',
              leftAvatar: { source: require('@/assets/new-wallet2.png'), size: 40 },
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

      if (this.contactsList.length > 0) {
        data.push({
          title: 'Recent',
          data: this.contactsList
        })
      }

      if (this.favorites.length > 0) {
        data.push({
          title: 'Favorites',
          data: this.favorites
        })
      }

      return data
    }
  }
}
</script>
