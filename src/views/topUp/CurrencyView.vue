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
  <modal-view
    title="Currency"
    has-back-button
    @on-dismiss="navigation.goBack()"
    no-padding
  >
    <table-view
      :sections="currencies"
    />
  </modal-view>
</template>

<script>
import { mapGetters } from 'vuex'
import { buyCurrencies } from '@/core/assets/currencies'

export default {
  name: 'CurrencyView',

  computed: {
    ...mapGetters(['currentCurrencyCode']),

    styles () {
      return styleStore(this.isDarkScheme)
    },

    currencies () {
      const selectedCurrency = this.route.params.currency

      return [
        {
          data: buyCurrencies.map(currency => {
            return {
              title: currency.code,
              subtitle: currency.name,
              checked: selectedCurrency === currency.code,
              onPress: () => {
                this.navigation.navigate(this.route.params.returnView, { currency })
              }
            }
          })
        }
      ]
    }
  }
}

const styleStore = (isDarkScheme) => {
  return {}
}
</script>
