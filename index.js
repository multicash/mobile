import './shim'
import '@/core/support/globals'
import '@/core/logging'
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { AppRegistry } from 'react-native'
import App from '@/views/App.vue'
import { name as appName } from './app.json'

import '@/components'

import '@/mixins/ColorScheme'
import '@/mixins/Money'
import '@/mixins/Router'

AppRegistry.registerComponent(appName, () => App)
