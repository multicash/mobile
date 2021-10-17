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

import {
  MCXTAGS_API,
  MCXRATES_API,
  MCXLITE_API,
  MCXPAY_ENDPOINT,
  BLOCK_EXPLORER,
  TERMS_OF_USE,
  DEFAULT_CURRENCY_CODE,
  DEFAULT_COIN,
  DEFAULT_NETWORK,
  PAPER_KEY_LENGTH
} from '@env'

export default {
  tagsApi: MCXTAGS_API || 'https://staging.tags.multicash.io/api',
  ratesApi: MCXRATES_API || 'https://rates.multicash.io/api',
  liteApi: MCXLITE_API || 'https://lite.multicash.io/api',
  payEndpoint: MCXPAY_ENDPOINT || 'https://pay.multicash.io',
  blockExplorer: BLOCK_EXPLORER || 'https://data.multicash.io',
  termsOfUse: TERMS_OF_USE || 'https://multicash.io/wallets/terms',
  feePerKb: 100000,
  satoshiDivider: 100000000,
  decimalPerSatoshi: 8,
  defaultCurrencyCode: DEFAULT_CURRENCY_CODE || 'USD',
  defaultCoin: DEFAULT_COIN || 'mcx',
  defaultNetwork: DEFAULT_NETWORK || 'livenet',
  paperKeyLength: PAPER_KEY_LENGTH || 12,
  supportBuyCurrencies: ['USD', 'EUR', 'GPB']
}
