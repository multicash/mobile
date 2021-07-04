<!--MultiCash Mobile-->
<!--Copyright (C) 2021  Swen van Zanten-->

<!--This program is free software: you can redistribute it and/or modify-->
<!--it under the terms of the GNU General Public License as published by-->
<!--the Free Software Foundation, either version 3 of the License, or-->
<!--any later version.-->

<!--This program is distributed in the hope that it will be useful,-->
<!--but WITHOUT ANY WARRANTY; without even the implied warranty of-->
<!--MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the-->
<!--GNU General Public License for more details.-->

<!--You should have received a copy of the GNU General Public License-->
<!--along with this program.  If not, see <https://www.gnu.org/licenses/>.-->

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
