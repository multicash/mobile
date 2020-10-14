<template>
  <app-navigator v-if="isSetup && isAuthenticated" />
  <authentication-navigator v-else-if="isSetup" />
  <setup-navigator v-else/>
</template>

<script>
import { AppNavigator, AuthenticationNavigator, SetupNavigator } from '@/navigation'
import { mapGetters } from 'vuex'
import store from '@/store'

export default {
  store: store,

  components: { AppNavigator, AuthenticationNavigator, SetupNavigator },

  computed: {
    ...mapGetters(['isSetup', 'isAuthenticated'])
  }
}
</script>
