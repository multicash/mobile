/*
  MultiCash Mobile
  Copyright (C) 2021  Swen van Zanten

  This program is free software: you can redistribute it and/or modify
  it under the terms of the GNU General Public License as published by
  the Free Software Foundation, either version 3 of the License, or
  any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
  along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

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
