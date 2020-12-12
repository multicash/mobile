import Vue from 'vue-native-core'
import WalletManager from '@/wallet/WalletManager'
import Wallet from '@/wallet/Wallet'
import { PluginFunction, VueConstructor } from '@/types/vue'

const managerStore = new Vue({
  data () {
    return {
      manager: null
    }
  },
  methods: {
    setManager (manager: WalletManager) {
      // @ts-ignore
      this.manager = manager
    }
  }
})

const plugin: PluginFunction<any> = function (vue: VueConstructor, options: any): void {
  // @ts-ignore
  managerStore.setManager(new WalletManager(options.store, options.store))
  // @ts-ignore
  vue.prototype.$walletManager = managerStore.manager

  vue.mixin({
    computed: {
      wallet (): Wallet|null {
        // @ts-ignore
        if (!(this.route && this.route.params && this.route.params.walletIdentifier)) {
          return null
        }

        // @ts-ignore
        return this.$walletManager.getWallet(this.route.params.walletIdentifier)
      },

      orderedWallets (): Wallet[] {
        // @ts-ignore
        const order = this.$store.state.walletOrder.order

        // @ts-ignore
        if (this.$walletManager.wallets.length !== order.length) {
          return []
        }

        // @ts-ignore
        return this.$store.state.walletOrder.order.map(identifier => {
          // @ts-ignore
          return this.$walletManager.getWallet(identifier)
        })
      }
    }
  })
}

export default plugin
