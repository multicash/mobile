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
export default {
  name: 'RecipientView',

  data () {
    return {
      data: [
        {
          data: [
            {
              title: 'My wallets',
              leftIcon: { name: 'wallet', size: 40 },
              onPress: () => {
                this.navigation.navigate('wallets', { navigate: 'confirm', ...this.route.params })
              }
            },
            this.route.params.isReceive ? {
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
          data: [
            {
              title: 'Swen van Zanten',
              subtitle: '@swenvanzanten',
              leftIcon: { name: 'person-circle', color: '#c807a9', size: 40 },
              onPress: () => {
                this.navigation.navigate('confirm', this.route.params)
              }
            },
            {
              title: 'Sunerok',
              subtitle: '@justinvendetta',
              leftIcon: { name: 'person-circle', color: '#00ffb2', size: 40 },
              onPress: () => {
                this.navigation.navigate('confirm', this.route.params)
              }
            }
          ]
        },
        {
          title: 'Favorites',
          data: [
            {
              title: 'CryptoRekt',
              subtitle: '@cr',
              leftIcon: { name: 'person-circle', color: '#a7fb00', size: 40 },
              onPress: () => {
                this.navigation.navigate('confirm', this.route.params)
              }
            },
            {
              title: 'sandersvoice',
              subtitle: '@sandersvoice',
              leftIcon: { name: 'person-circle', color: '#3b28f3', size: 40 },
              onPress: () => {
                this.navigation.navigate('confirm', this.route.params)
              }
            },
            {
              title: 'Michael',
              subtitle: '@michael',
              leftIcon: { name: 'person-circle', color: '#eaee18', size: 40 },
              onPress: () => {
                this.navigation.navigate('confirm', this.route.params)
              }
            }
          ]
        }
      ]
    }
  }
}
</script>
