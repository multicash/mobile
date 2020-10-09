/**
 * @format
 */

import { AppRegistry } from 'react-native'
import React from 'react'
import App from '@/App'
import Vue from 'vue-native-core'
import { name as appName } from './app.json'

import QRCode from 'react-native-qrcode-svg'

import Icon from '@/components/icons/Icon'
import SourceIcon from '@/components/icons/SourceIcon'
import WalletIcon from '@/components/icons/WalletIcon'

import ActionButton from '@/components/buttons/ActionButton'
import LinkButton from '@/components/buttons/LinkButton'
import RoundButton from '@/components/buttons/RoundButton'
import RoundedButton from '@/components/buttons/RoundedButton'
import SecondaryActionButton from '@/components/buttons/SecondaryActionButton'

import RoundedTextInput from '@/components/forms/RoundedTextInput'
import Selector from '@/components/forms/Selector'

import Money from '@/components/labels/Money'

import DetailList from '@/components/lists/DetailList'
import DetailListItem from '@/components/lists/DetailListItem'
import DetailListTitle from '@/components/lists/DetailListTitle'

import ModalNavigation from '@/components/navigations/ModalNavigation'

import ActionsSection from '@/components/sections/ActionsSection'
import WalletsSection from '@/components/sections/WalletsSection'

import TableView from '@/components/tables/TableView'

import Card from '@/components/views/Card'
import Spacer from '@/components/views/Spacer'
import StyledViewBackground from '@/components/views/StyledViewBackground'
import ViewBackground from '@/components/views/ViewBackground'
import ViewSection from '@/components/views/ViewSection'
import WalletCard from '@/components/views/WalletCard'

import '@/mixins/ColorScheme'
import '@/mixins/Money'
import '@/mixins/Router'

Vue.component('qr-code', QRCode)

Vue.component('action-button', ActionButton)
Vue.component('link-button', LinkButton)
Vue.component('round-button', RoundButton)
Vue.component('rounded-button', RoundedButton)
Vue.component('SecondaryAction-button', SecondaryActionButton)

Vue.component('rounded-text-input', RoundedTextInput)
Vue.component('selector', Selector)

Vue.component('icon', Icon)
Vue.component('source-icon', SourceIcon)
Vue.component('wallet-icon', WalletIcon)

Vue.component('money', Money)

Vue.component('detail-list', DetailList)
Vue.component('detail-list-item', DetailListItem)
Vue.component('detail-list-title', DetailListTitle)

Vue.component('modal-navigation', ModalNavigation)

Vue.component('actions-section', ActionsSection)
Vue.component('wallets-section', WalletsSection)

Vue.component('table-view', TableView)

Vue.component('card', Card)
Vue.component('spacer', Spacer)
Vue.component('styled-view-background', StyledViewBackground)
Vue.component('view-background', ViewBackground)
Vue.component('view-section', ViewSection)
Vue.component('wallet-card', WalletCard)

AppRegistry.registerComponent(appName, () => App)
