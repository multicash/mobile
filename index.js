/**
 * @format
 */

import { AppRegistry } from 'react-native'
import App from './src/App'
import Vue from 'vue-native-core'
import { name as appName } from './app.json'
import Icon from './src/components/Icon'
import './src/mixins/ColorScheme'
import './src/mixins/Money'

Vue.component('icon', Icon)

AppRegistry.registerComponent(appName, () => App)
