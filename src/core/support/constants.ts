import {
  PRICE_API,
  MULTICORE_WALLET_SERVICE_API,
  BN_API,
  BLOCK_EXPLORER,
  TERMS_OF_USE,
  DEFAULT_CURRENCY_CODE,
  DEFAULT_COIN,
  DEFAULT_NETWORK,
  PAPER_KEY_LENGTH
} from '@env'

export default {
  priceApi: PRICE_API || 'https://wallet.multicash.dev/api/v1/fiatrates/',
  multicoreWalletServiceApi: MULTICORE_WALLET_SERVICE_API || 'https://api.multicash.dev/mws/api',
  bnApi: BN_API || 'https://api.multicash.dev/api/MXC',
  blockExplorer: BLOCK_EXPLORER || 'https://app.multicash.dev',
  termsOfUse: TERMS_OF_USE || 'https://multicash.io/wallets/terms',
  feePerKb: 100000,
  satoshiDivider: 100000000,
  decimalPerSatoshi: 8,
  defaultCurrencyCode: DEFAULT_CURRENCY_CODE || 'USD',
  defaultCoin: DEFAULT_COIN || 'mcx',
  defaultNetwork: DEFAULT_NETWORK || 'livenet',
  paperKeyLength: PAPER_KEY_LENGTH || 12
}
