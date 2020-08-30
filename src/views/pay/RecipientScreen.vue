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
import ModalNavigation from '@/components/ModalNavigation'
import TableView from '@/components/TableView'
import ViewBackground from '@/components/ViewBackground'

export default {
  name: 'RecipientScreen',

  components: { ViewBackground, TableView, ModalNavigation },

  data () {
    return {
      data: [
        {
          data: [
            {
              title: 'My wallets',
              leftIcon: { name: 'wallet', size: 40 },
              navigate: () => {
                this.navigation.navigate('wallets', { navigate: 'confirm' })
              }
            },
            {
              title: 'Enter recipient address/tag',
              leftIcon: { name: 'barcode-outline', size: 40 },
              navigate: () => {
                this.navigation.navigate('enterRecipient')
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
              navigate: () => {
                this.navigation.navigate('confirm', { amount: 10 })
              }
            },
            {
              title: 'Sunerok',
              subtitle: '@justinvendetta',
              leftIcon: { name: 'person-circle', color: '#00ffb2', size: 40 },
              navigate: () => {
                this.navigation.navigate('confirm', { amount: 10 })
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
              navigate: () => {
                this.navigation.navigate('confirm', { amount: 10 })
              }
            },
            {
              title: 'sandersvoice',
              subtitle: '@sandersvoice',
              leftIcon: { name: 'person-circle', color: '#3b28f3', size: 40 },
              navigate: () => {
                this.navigation.navigate('confirm', { amount: 10 })
              }
            },
            {
              title: 'Michael',
              subtitle: '@michael',
              leftIcon: { name: 'person-circle', color: '#eaee18', size: 40 },
              navigate: () => {
                this.navigation.navigate('confirm', { amount: 10 })
              }
            }
          ]
        }
      ]
    }
  },

  props: {
    navigation: {
      type: Object
    }
  }
}
</script>
