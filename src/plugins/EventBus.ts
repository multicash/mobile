import Vue from 'vue-native-core'

const plugin: Vue.PluginFunction<any> = function (vue: Vue.VueConstructor, options: any): void {
  vue.prototype.$eventBus = new Vue()
}

export default plugin
