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

    data () {
      return [
        {
          data: [
            {
              title: 'My wallets',
              leftIcon: { name: 'wallet', size: 40 },
              onPress: () => {
                this.navigation.navigate('wallets', { navigate: 'confirm', ...this.route.params })
              }
            },
            this.route.params.transaction.isReceive ? {
              title: 'Share QR code',
              leftIcon: { name: 'qr-code-outline', size: 40 },
              onPress: () => {
                this.navigation.navigate('qr', this.route.params)
              }
            } : {
              title: 'Enter recipient address/tag',
              leftIcon: { name: 'barcode-outline', size: 40 },
              onPress: () => {
                this.navigation.navigate('enterRecipient', this.route.params)
              }
            }
          ]
        },
        {
          title: 'Recent',
          data: this.contactsList
        },
        {
          title: 'Favorites',
          data: this.contactsList.filter(contact => contact.meta.isFavorite)
        }
      ]
    }
  }
}
</script>
