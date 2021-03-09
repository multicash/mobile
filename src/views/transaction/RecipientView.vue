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
              title: 'Kirsten Larsen',
              subtitle: '@KirstenLn1992',
              leftIcon: { name: 'person-circle', color: '#c807a9', size: 40 },
              onPress: () => {
                this.navigation.navigate('confirm', {
                  ...this.route.params,
                  target: {
                    title: 'Kirsten Larsen',
                    amount: null,
                    icon: 'person-circle',
                    iconColor: '#c807a9'
                  }
                })
              }
            },
            {
              title: 'Birthe Lyberth',
              subtitle: '@BLyberth',
              leftIcon: { name: 'bicycle', color: '#00ffb2', size: 40 },
              onPress: () => {
                this.navigation.navigate('confirm', {
                  ...this.route.params,
                  target: {
                    title: 'Birthe Lyberth',
                    amount: null,
                    icon: 'person-circle',
                    iconColor: '#00ffb2'
                  }
                })
              }
            }
          ]
        },
        {
          title: 'Favorites',
          data: [
            {
              title: 'Fletcher Faubert',
              subtitle: '@fF',
              leftIcon: { name: 'barbell', color: '#a7fb00', size: 40 },
              onPress: () => {
                this.navigation.navigate('confirm', {
                  ...this.route.params,
                  target: {
                    title: 'Fletcher Faubert',
                    amount: null,
                    icon: 'person-circle',
                    iconColor: '#a7fb00'
                  }
                })
              }
            },
            {
              title: 'Maik Fisher',
              subtitle: '@MMFisher',
              leftIcon: { name: 'airplane', color: '#3b28f3', size: 40 },
              onPress: () => {
                this.navigation.navigate('confirm', {
                  ...this.route.params,
                  target: {
                    title: 'Maik Fisher',
                    amount: null,
                    icon: 'person-circle',
                    iconColor: '#3b28f3'
                  }
                })
              }
            },
            {
              title: 'Pola Cordova Guzmán',
              subtitle: '@cordovaV1',
              leftIcon: { name: 'person-circle', color: '#eaee18', size: 40 },
              onPress: () => {
                this.navigation.navigate('confirm', {
                  ...this.route.params,
                  target: {
                    title: 'Pola Cordova Guzmán',
                    amount: null,
                    icon: 'person-circle',
                    iconColor: '#eaee18'
                  }
                })
              }
            }
          ]
        }
      ]
    }
  }
}
</script>
