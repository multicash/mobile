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
  <view-background :style="styles.container">
    <view v-if="!payed">
      <ActivityIndicator size="large" :color="isDarkScheme ? '#6868ff' : '#0000ff'" />
      <header-view
        title="Payment in progress"
        subtitle="one sec..."
      />
    </view>
    <view v-else>
      <header-view
        title="You've Paid!"
        subtitle="Your payment was successfully executed."
        :image-background="require('@/assets/money.png')"
        :image-foreground="require('@/assets/certificate.png')"
      />

      <action-notification
        title="Transaction"
        label="Show the transaction details."
      >
        <rounded-button
          title="Details"
        />
      </action-notification>

      <action-notification
        title="Again"
        label="Create another pay transaction."
      >
        <rounded-button
          title="Pay"
          @on-press="pay"
        />
      </action-notification>

      <spacer />

      <rounded-button
        title="Done"
        type="primary"
        @on-press="done"
      />
    </view>
  </view-background>
</template>

<script>
export default {
  name: 'PayingView',

  data () {
    return {
      payed: false
    }
  },

  created () {
    const params = this.route.params
    this.$tagManager.address(params.transaction.to.tagOrAddress).then(address => {
      setTimeout(() => {
        this.payed = true
      }, 1000)
    })
  },

  computed: {
    styles () {
      return stylesStore()
    }
  },

  methods: {
    done () {
      this.navigation.navigate(this.route.params.walletIdentifier ? 'wallet' : 'home')
    },

    pay () {
      this.navigation.navigate('home')

      setTimeout(() => {
        this.navigation.navigate('pay')
      }, 100)
    }
  }
}

const stylesStore = () => {
  return {
    container: {
      justifyContent: 'center'
    }
  }
}
</script>
