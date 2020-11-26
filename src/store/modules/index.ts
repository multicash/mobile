/**
 * The file enables `@/store/index.js` to import all vuex modules
 * in a one-shot manner. There should not be any reason to edit this file.
 */

export default {
  currency: require('@/store/modules/Currency').default,
  pin: require('@/store/modules/Pin').default,
  setup: require('@/store/modules/Setup').default,
  wallets: require('@/store/modules/Wallets').default
}
