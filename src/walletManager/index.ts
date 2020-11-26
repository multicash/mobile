import Vue, { PluginFunction } from 'vue-native-core'
import WalletManager from '@/walletManager/WalletManager'

const walletManager: PluginFunction<any> = function (vue: Vue, options: any): void {
  vue.prototype.$walletManager = new WalletManager(options.store)
}

export default walletManager
