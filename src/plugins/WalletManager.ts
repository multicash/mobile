// @ts-nocheck
import Vue from 'vue-native-core'
import WalletManager from '@/core/wallet/WalletManager'
import Wallet from '@/core/wallet/Wallet'
import { PluginFunction, VueConstructor } from '@/types/vue'

const managerStore = new Vue({
  data () {
    return {
      manager: null
    }
  },
  methods: {
    setManager (manager: WalletManager) {
      this.manager = manager
    }
  }
})

const plugin: PluginFunction<any> = function (vue: VueConstructor, options: any): void {
  managerStore.setManager(new WalletManager(options.store, options.store))
  vue.prototype.$walletManager = managerStore.manager

  vue.mixin({
    computed: {
      wallet (): Wallet|null {
        if (!(this.route && this.route.params && this.route.params.walletIdentifier)) {
          return null
        }

        return this.$walletManager.getWallet(this.route.params.walletIdentifier)
      },

      wallets (): Wallet[] {
        return this.$walletManager.getWallets()
      },

      orderedWallets (): Wallet[] {
        return this.$walletManager.getOrderedWallets()
      }
    }
  })
}

export default plugin
