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
    title="Confirm Top Up"
    has-back-button
    @on-dismiss="navigation.goBack()"
    scrollable
  >
    <view-section
      title="Summary"
    >
      <action-notification
        title="You pay"
        :label="`1 ${ route.params.estimationCurrency } ≈ 2.43 ${ route.params.buyCurrency }`"
      >
        <money
          :amount="route.params.buy"
          :currency="route.params.buyCurrency"
          :style="styles.pay"
        />
      </action-notification>

      <action-notification
        title="You get"
        :label="wallet.tag"
        type="success"
      >
        <money
          :amount="route.params.estimation * 100000000"
          crypto
          :style="styles.estimation"
          approximately
        />
      </action-notification>

      <action-notification
        title="Estimated Arrival"
        label="≈ 10 minutes"
      />
    </view-section>

    <view-section
      title="Confirm"
    >
      <switch-notification
        type="primary"
        label="I've read and agree to the ChangeNOW Terms of Use, Privacy Policy and Risk Disclosure Statement"
        :value="readTerms"
        @input="readTerms = $event"
        always-show-extra
      >
        <rounded-button title="Show documents" @on-press="showDocuments" />
      </switch-notification>
      <switch-notification
        type="primary"
        label="I'm aware that this exchange is made through a third-party service"
        :value="awareTerm"
        @input="awareTerm = $event"
      />

      <rounded-button
        :disabled="!(readTerms && awareTerm)"
        type="primary"
        title="Pay"
        icon="card"
        @on-press="pay"
      />
    </view-section>
  </modal-view>
</template>

<script>
import { Alert, Linking, Platform } from 'react-native'

export default {
  name: 'ConfirmView',

  data () {
    return {
      readTerms: false,
      awareTerm: false
    }
  },

  computed: {
    styles () {
      return styleStore(this.isDarkScheme)
    }
  },

  methods: {
    pay () {
      this.navigation.navigate('pay', {
        buy: this.route.params.buy,
        buyCurrency: this.route.params.buyCurrency,
        estimation: this.route.params.estimation,
        estimationCurrency: this.route.params.estimationCurrency,
        walletIdentifier: this.wallet.identifier
      })
    },

    showDocuments () {
      Alert.alert(
        'Show documents',
        'I\'ve read and agree to the ChangeNOW Terms of Use, Privacy Policy and Risk Disclosure Statement',
        [
          {
            text: 'Terms Of Use',
            onPress: () => {
              Linking.openURL('https://changenow.io/terms-of-use')
            }
          },
          {
            text: 'Privacy Policy',
            onPress: () => {
              Linking.openURL('https://changenow.io/privacy-policy')
            }
          },
          {
            text: 'Risk Disclosure Statement',
            onPress: () => {
              Linking.openURL('https://changenow.io/risk-disclosure-statement')
            }
          },
          {
            text: 'Cancel',
            style: 'cancel'
          }
        ]
      )
    }
  }
}

const styleStore = (isDarkScheme) => {
  return {
    pay: {
      fontWeight: Platform.OS === 'ios' ? '900' : 'bold',
      fontSize: 25,
      color: isDarkScheme ? 'white' : '#2d2d2d'
    },

    estimation: {
      fontWeight: Platform.OS === 'ios' ? '900' : 'bold',
      fontSize: 25,
      color: isDarkScheme ? 'white' : 'white'
    }
  }
}
</script>
