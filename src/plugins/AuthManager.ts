import Vue from 'vue-native-core'
import AuthManager from '@/authentication/AuthManager'

const plugin: Vue.PluginFunction<any> = function (vue: Vue.VueConstructor, options: any): void {
  vue.prototype.$authManager = new AuthManager(vue.prototype.$eventBus)
}

export default plugin
