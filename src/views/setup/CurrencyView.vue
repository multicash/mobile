<template>
  <safe-area-view :style="styles.safeArea" :edges="['right', 'top', 'left']">
    <status-bar :bar-style="isDarkScheme ? 'light-content' : 'dark-content'" />
    <settings-currency-view
      :header="false"
      :table-header="renderTableHeader"
      @selected="done"
    />
  </safe-area-view>
</template>

<script>
import { SafeAreaView } from 'react-native-safe-area-context'
import SettingsCurrencyView from '@/views/settings/CurrencyView'
import TableHeaderView from '@/react/components/TableHeaderView'
import { mapActions } from 'vuex'

export default {
  name: 'CurrencyView',

  components: {
    SettingsCurrencyView,
    SafeAreaView
  },

  computed: {
    styles () {
      return styleStore(this.isDarkScheme)
    }
  },

  methods: {
    renderTableHeader (isDarkScheme) {
      return TableHeaderView(
        isDarkScheme,
        'Currency',
        'Choose your favorite well-known currency. All calculated amounts will be displayed in this currency.',
        require('@/assets/currency-exchange.png')
      )
    },

    ...mapActions(['updateIsSetup']),

    done () {
      this.updateIsSetup(true)
    }
  }
}

const styleStore = (isDarkScheme) => {
  return {
    safeArea: {
      flex: 1
    }
  }
}
</script>
