import Vue from 'vue-native-core'
import WalletManager from '@/walletManager/WalletManager'
import Wallet from '@/walletManager/Wallet'
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

const walletManager: PluginFunction<any> = function (vue: VueConstructor, options: any): void {
  // @ts-ignore
  managerStore.setManager(new WalletManager(options.store))
  // @ts-ignore
  vue.prototype.$walletManager = managerStore.manager

  vue.mixin({
    computed: {
      wallet (): Wallet|null {
        // @ts-ignore
        if (!(this.route && this.route.params && this.route.params.walletName)) {
          return null
        }

        // @ts-ignore
        return this.$walletManager.getWallet(this.route.params.walletName)
      }
    }
  })
}

export default walletManager
