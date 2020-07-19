/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import Vue from 'vue-native-core'
import SvgUri from 'react-native-svg-uri';
import {name as appName} from './app.json';

Vue.component('svg-uri', SvgUri)

AppRegistry.registerComponent(appName, () => App);
