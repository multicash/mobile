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

import ColorPicker from '@/components/forms/ColorPicker.vue'
import DotInput from '@/components/forms/DotInput.vue'
import RoundedTextInput from '@/components/forms/RoundedTextInput.vue'
import Selector from '@/components/forms/Selector.vue'

import Money from '@/components/labels/Money.vue'
import InputDescription from '@/components/labels/InputDescription.vue'

import DetailList from '@/components/lists/DetailList.vue'
import DetailListItem from '@/components/lists/DetailListItem.vue'
import DetailListTitle from '@/components/lists/DetailListTitle.vue'

import ModalNavigation from '@/components/navigations/ModalNavigation.vue'

import ActionNotification from '@/components/notifications/ActionNotification.vue'
import Notification from '@/components/notifications/Notification.vue'
import SwitchNotification from '@/components/notifications/SwitchNotification.vue'

import ActionsSection from '@/components/sections/ActionsSection.vue'
import WalletsSection from '@/components/sections/WalletsSection.vue'

import TableView from '@/components/tables/TableView.vue'

import Card from '@/components/views/Card.vue'
import HeaderView from '@/components/views/HeaderView.vue'
import RestoreKeyGridView from '@/components/views/RestoreKeyGridView.vue'
import Spacer from '@/components/views/Spacer.vue'
import ViewBackground from '@/components/views/ViewBackground.vue'
import ViewSection from '@/components/views/ViewSection.vue'
import WalletCard from '@/components/views/WalletCard.vue'

Vue.component('qr-code', QRCode)

Vue.component('action-button', ActionButton)
Vue.component('link-button', LinkButton)
Vue.component('round-button', RoundButton)
Vue.component('rounded-button', RoundedButton)
Vue.component('SecondaryAction-button', SecondaryActionButton)

Vue.component('color-picker', ColorPicker)
Vue.component('dot-input', DotInput)
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

Vue.component('modal-navigation', ModalNavigation)

Vue.component('action-notification', ActionNotification)
Vue.component('notification', Notification)
Vue.component('switch-notification', SwitchNotification)

Vue.component('actions-section', ActionsSection)
Vue.component('wallets-section', WalletsSection)

Vue.component('table-view', TableView)

Vue.component('card', Card)
Vue.component('header-view', HeaderView)
Vue.component('restore-key-grid-view', RestoreKeyGridView)
Vue.component('spacer', Spacer)
Vue.component('view-background', ViewBackground)
Vue.component('view-section', ViewSection)
Vue.component('wallet-card', WalletCard)