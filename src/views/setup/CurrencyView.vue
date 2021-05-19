<template>
  <safe-area-view :style="styles.safeArea">
    <status-bar :bar-style="isDarkScheme ? 'light-content' : 'dark-content'" />
    <settings-currency-view
      :header="false"
      :table-header="renderTableHeader"
      @selected="navigation.navigate('done')"
    />
  </safe-area-view>
</template>

<script>
import SettingsCurrencyView from '@/views/settings/CurrencyView'
import TableHeaderView from '@/react/components/TableHeaderView'

export default {
  name: 'CurrencyView',

  components: {
    SettingsCurrencyView
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
