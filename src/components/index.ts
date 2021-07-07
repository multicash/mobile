/*
  MultiCash Mobile
  Copyright (C) 2021  MultiCash Developers

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

import Vue from 'vue-native-core'

import QRCode from 'react-native-qrcode-svg'

import Icon from '@/components/icons/Icon.vue'
import SourceIcon from '@/components/icons/SourceIcon.vue'
import WalletIcon from '@/components/icons/WalletIcon.vue'

import PinKeyboard from '@/components/keyboards/PinKeyboard.vue'
import KeyboardKey from '@/components/keyboards/KeyboardKey.vue'

import ActionButton from '@/components/buttons/ActionButton.vue'
import LinkButton from '@/components/buttons/LinkButton.vue'
import RoundButton from '@/components/buttons/RoundButton.vue'
import RoundedButton from '@/components/buttons/RoundedButton.vue'
import SecondaryActionButton from '@/components/buttons/SecondaryActionButton.vue'
import SecondaryRoundButton from '@/components/buttons/SecondaryRoundButton.vue'

import AmountInput from '@/components/forms/AmountInput.vue'
import ColorPicker from '@/components/forms/ColorPicker.vue'
import DotInput from '@/components/forms/DotInput.vue'
import GroupedField from '@/components/forms/GroupedField.vue'
import RoundedTextInput from '@/components/forms/RoundedTextInput.vue'
import Selector from '@/components/forms/Selector.vue'

import Money from '@/components/labels/Money.vue'
import InputDescription from '@/components/labels/InputDescription.vue'

import DetailList from '@/components/lists/DetailList.vue'
import DetailListItem from '@/components/lists/DetailListItem.vue'
import DetailListTitle from '@/components/lists/DetailListTitle.vue'
import Feature from '@/components/lists/Feature.vue'

import ModalNavigation from '@/components/navigations/ModalNavigation.vue'

import ActionNotification from '@/components/notifications/ActionNotification.vue'
import Notification from '@/components/notifications/Notification.vue'
import SwitchNotification from '@/components/notifications/SwitchNotification.vue'

import ActionsSection from '@/components/sections/ActionsSection.vue'
import WalletsSection from '@/components/sections/WalletsSection.vue'

import TableView from '@/components/tables/TableView.vue'

import Card from '@/components/views/Card.vue'
import ColorsBackground from '@/components/views/ColorsBackground.vue'
import HeaderView from '@/components/views/HeaderView.vue'
import KeyboardAvoidingView from '@/components/views/KeyboardAvoidingView.vue'
import ModalView from '@/components/views/ModalView.vue'
import RestoreKeyGridView from '@/components/views/RestoreKeyGridView.vue'
import Spacer from '@/components/views/Spacer.vue'
import TotalAmountSection from '@/components/views/TotalAmountSection.vue'
import ViewBackground from '@/components/views/ViewBackground.vue'
import ViewSection from '@/components/views/ViewSection.vue'
import WalletCard from '@/components/views/WalletCard.vue'

Vue.component('qr-code', QRCode)

Vue.component('action-button', ActionButton)
Vue.component('link-button', LinkButton)
Vue.component('round-button', RoundButton)
Vue.component('rounded-button', RoundedButton)
Vue.component('secondary-action-button', SecondaryActionButton)
Vue.component('secondary-round-button', SecondaryRoundButton)

Vue.component('amount-input', AmountInput)
Vue.component('color-picker', ColorPicker)
Vue.component('dot-input', DotInput)
Vue.component('grouped-field', GroupedField)
Vue.component('rounded-text-input', RoundedTextInput)
Vue.component('selector', Selector)

Vue.component('icon', Icon)
Vue.component('source-icon', SourceIcon)
Vue.component('wallet-icon', WalletIcon)

Vue.component('pin-keyboard', PinKeyboard)
Vue.component('keyboard-key', KeyboardKey)

Vue.component('money', Money)
Vue.component('input-description', InputDescription)

Vue.component('detail-list', DetailList)
Vue.component('detail-list-item', DetailListItem)
Vue.component('detail-list-title', DetailListTitle)
Vue.component('feature', Feature)

Vue.component('modal-navigation', ModalNavigation)

Vue.component('action-notification', ActionNotification)
Vue.component('notification', Notification)
Vue.component('switch-notification', SwitchNotification)

Vue.component('actions-section', ActionsSection)
Vue.component('wallets-section', WalletsSection)

Vue.component('table-view', TableView)

Vue.component('card', Card)
Vue.component('colors-background', ColorsBackground)
Vue.component('header-view', HeaderView)
Vue.component('keyboard-avoiding-view', KeyboardAvoidingView)
Vue.component('modal-view', ModalView)
Vue.component('restore-key-grid-view', RestoreKeyGridView)
Vue.component('spacer', Spacer)
Vue.component('total-amount-section', TotalAmountSection)
Vue.component('view-background', ViewBackground)
Vue.component('view-section', ViewSection)
Vue.component('wallet-card', WalletCard)
