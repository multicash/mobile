<template>
  <view :style="{ flex: 1 }">
    <modal-navigation
      title="Wallets"
      has-back-button
      @on-dismiss="navigation.goBack()"
    />
    <table-view :sections="data" type="small"/>
  </view>
</template>

<script>
import ModalNavigation from '@/components/ModalNavigation'
import TableView from '@/components/TableView'

export default {
  name: 'WalletsScreen',

  components: { TableView, ModalNavigation },

  data () {
    return {
      data: [
        {
          data: [
            {
              title: 'Main Account',
              subtitle: this.getFormattedCrypto(10505.44, 'en', 'MCX'),
              leftIcon: { name: 'wallet', color: '#2ab779', size: 40 },
              navigate: () => {
                this.navigation.navigate('confirm', { amount: 10 })
              }
            },
            {
              title: 'Savings Account',
              subtitle: this.getFormattedCrypto(1430705.78, 'en', 'MCX'),
              leftIcon: { name: 'gift', color: '#952aaa', size: 40 },
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
