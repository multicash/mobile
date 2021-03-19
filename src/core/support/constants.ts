import {
  TAGS_API,
  RATES_API,
  WALLET_SERVICE_API,
  NODE_API,
  BLOCK_EXPLORER,
  TERMS_OF_USE,
  DEFAULT_CURRENCY_CODE,
  DEFAULT_COIN,
  DEFAULT_NETWORK,
  PAPER_KEY_LENGTH
} from '@env'

export default {
  tagsApi: TAGS_API || 'https://tag.multicash.io/api',
  ratesApi: RATES_API || 'https://rates.multicash.io/api',
  walletServiceApi: WALLET_SERVICE_API || 'https://mws.multicash.io/api',
  nodeApi: NODE_API || 'https://node.multicash.io/api',
  blockExplorer: BLOCK_EXPLORER || 'https://data.multicash.io',
  termsOfUse: TERMS_OF_USE || 'https://multicash.io/wallets/terms',
  feePerKb: 100000,
  satoshiDivider: 100000000,
  decimalPerSatoshi: 8,
  defaultCurrencyCode: DEFAULT_CURRENCY_CODE || 'USD',
  defaultCoin: DEFAULT_COIN || 'mcx',
  defaultNetwork: DEFAULT_NETWORK || 'livenet',
  paperKeyLength: PAPER_KEY_LENGTH || 12
}
