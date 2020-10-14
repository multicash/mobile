import { AppRegistry } from 'react-native'
import React from 'react'
import App from '@/App'
import { name as appName } from './app.json'

import '@/components'

import '@/mixins/Authentication'
import '@/mixins/ColorScheme'
import '@/mixins/Money'
import '@/mixins/Router'

AppRegistry.registerComponent(appName, () => App)
