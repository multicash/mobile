<!--MultiCash Mobile-->
<!--Copyright (C) 2021  MultiCash Developers-->

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
    :header="header"
  >
    <table-view
      :sections="currenciesList"
      :header="tableHeader"
    />
  </modal-view>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Currencies from '@/core/assets/currencies'

export default {
  name: 'CurrencyView',

  props: {
    header: {
      type: Boolean,
      default: true
    },

    tableHeader: {
      type: Function,
      default: undefined
    }
  },

  computed: {
    ...mapGetters(['currentCurrencyCode']),

    currenciesList () {
      const selectedCurrency = this.currentCurrencyCode

      return [
        {
          data: Currencies.map(currency => {
            return {
              title: currency.code,
              subtitle: currency.name,
              checked: selectedCurrency === currency.code,
              onPress: () => {
                this.updateCurrency(currency.code)
                this.$emit('selected', currency)
              }
            }
          })
        }
      ]
    }
  },

  methods: {
    ...mapActions(['updateCurrency'])
  }
}
</script>
