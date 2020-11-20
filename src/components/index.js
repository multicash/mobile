import Vue from 'vue-native-core'

import QRCode from 'react-native-qrcode-svg'

import Icon from '@/components/icons/Icon'
import SourceIcon from '@/components/icons/SourceIcon'
import WalletIcon from '@/components/icons/WalletIcon'

import PinKeyboard from '@/components/keyboards/PinKeyboard'
import KeyboardKey from '@/components/keyboards/KeyboardKey'

import ActionButton from '@/components/buttons/ActionButton'
import LinkButton from '@/components/buttons/LinkButton'
import RoundButton from '@/components/buttons/RoundButton'
import RoundedButton from '@/components/buttons/RoundedButton'
import SecondaryActionButton from '@/components/buttons/SecondaryActionButton'

import DotInput from '@/components/forms/DotInput'
import RoundedTextInput from '@/components/forms/RoundedTextInput'
import Selector from '@/components/forms/Selector'

import Money from '@/components/labels/Money'
import InputDescription from '@/components/labels/InputDescription'

import DetailList from '@/components/lists/DetailList'
import DetailListItem from '@/components/lists/DetailListItem'
import DetailListTitle from '@/components/lists/DetailListTitle'

import ModalNavigation from '@/components/navigations/ModalNavigation'

import ActionNotification from '@/components/notifications/ActionNotification'
import Notification from '@/components/notifications/Notification'
import SwitchNotification from '@/components/notifications/SwitchNotification'

import ActionsSection from '@/components/sections/ActionsSection'
import WalletsSection from '@/components/sections/WalletsSection'

import TableView from '@/components/tables/TableView'

import Card from '@/components/views/Card'
import HeaderView from '@/components/views/HeaderView'
import RestoreKeyGridView from '@/components/views/RestoreKeyGridView'
import Spacer from '@/components/views/Spacer'
import StyledViewBackground from '@/components/views/StyledViewBackground'
import ViewBackground from '@/components/views/ViewBackground'
import ViewSection from '@/components/views/ViewSection'
import WalletCard from '@/components/views/WalletCard'

Vue.component('qr-code', QRCode)

Vue.component('action-button', ActionButton)
Vue.component('link-button', LinkButton)
Vue.component('round-button', RoundButton)
Vue.component('rounded-button', RoundedButton)
Vue.component('SecondaryAction-button', SecondaryActionButton)

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
Vue.component('styled-view-background', StyledViewBackground)
Vue.component('view-background', ViewBackground)
Vue.component('view-section', ViewSection)
Vue.component('wallet-card', WalletCard)
