/**
 * @format
 */

import { AppRegistry } from 'react-native'
import App from '@/App'
import Vue from 'vue-native-core'
import { name as appName } from './app.json'
import Icon from '@/components/Icon'
import '@/mixins/ColorScheme'
import '@/mixins/Money'

Vue.component('icon', Icon)

AppRegistry.registerComponent(appName, () => App)
