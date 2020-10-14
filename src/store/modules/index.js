/**
 * The file enables `@/store/index.js` to import all vuex modules
 * in a one-shot manner. There should not be any reason to edit this file.
 */

export default {
  authenticated: require('@/store/modules/Authenticated').default,
  currency: require('@/store/modules/Currency').default,
  setup: require('@/store/modules/Setup').default
}
