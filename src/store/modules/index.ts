/**
 * The file enables `@/store/index.js` to import all vuex modules
 * in a one-shot manner. There should not be any reason to edit this file.
 */

export default {
  contacts: require('@/store/modules/Contacts').default,
  currency: require('@/store/modules/Currency').default,
  defaultWallet: require('@/store/modules/DefaultWallet').default,
  pin: require('@/store/modules/Pin').default,
  setup: require('@/store/modules/Setup').default,
  wallets: require('@/store/modules/Wallets').default,
  walletOrder: require('@/store/modules/WalletOrder').default
}
