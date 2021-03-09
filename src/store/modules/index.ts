export default {
  contacts: require('@/store/modules/Contacts').default,
  currency: require('@/store/modules/Currency').default,
  defaultWallet: require('@/store/modules/DefaultWallet').default,
  nfcTagReader: require('@/store/modules/NfcTagReader').default,
  pin: require('@/store/modules/Pin').default,
  setup: require('@/store/modules/Setup').default,
  wallets: require('@/store/modules/Wallets').default,
  walletOrder: require('@/store/modules/WalletOrder').default
}
