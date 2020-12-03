import Vue from 'vue-native-core'
import { PluginFunction, VueConstructor } from '@/types/vue'

const EventBus: PluginFunction<any> = function (vue: VueConstructor, options: any): void {
  vue.prototype.$eventBus = new Vue()
}

export default EventBus
