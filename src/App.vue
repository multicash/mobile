<template>
  <home-view :wallets="wallets"/>
</template>

<script>
import HomeView from '@/views/HomeView'

export default {
  name: 'App',
  components: { HomeView },
  data () {
    return {
      wallets: [
        {
          name: 'Main Account',
          amount: 10505.44,
          icon: 'wallet',
          tag: '@SwenVanZanten',
          address: 'M6NYsdntCHYDv6X6uGzgEChnoQruHBR1De'
        },
        {
          name: 'Savings Account',
          amount: 1430705.78,
          icon: 'gift',
          tag: '@SwenSaving',
          address: 'M6NYsdntCHYDv6X6uGzgEChnoQruHBR1De'
        }
      ]
    }
  }
}
</script>
