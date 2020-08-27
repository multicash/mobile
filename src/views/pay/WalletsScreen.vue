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
              subtitle: '10,505.44 MCX',
              leftIcon: { name: 'wallet', color: '#2ab779', size: 40 },
              navigate: () => {
                this.navigation.navigate('confirm', { amount: 10 })
              }
            },
            {
              title: 'Savings Account',
              subtitle: '1.430.705.78 MCX',
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
