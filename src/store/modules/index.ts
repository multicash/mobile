/*
  MultiCash Mobile
  Copyright (C) 2021  Swen van Zanten

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

export default {
  announcements: require('@/store/modules/Announcements').default,
  applicationOptions: require('@/store/modules/ApplicationOptions').default,
  contacts: require('@/store/modules/Contacts').default,
  currency: require('@/store/modules/Currency').default,
  defaultWallet: require('@/store/modules/DefaultWallet').default,
  nfcTagReader: require('@/store/modules/NfcTagReader').default,
  pin: require('@/store/modules/Pin').default,
  setup: require('@/store/modules/Setup').default,
  wallets: require('@/store/modules/Wallets').default,
  walletOrder: require('@/store/modules/WalletOrder').default
}
