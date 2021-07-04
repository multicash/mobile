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
  <view-background scrollable>
    <view :style="styles.container">
      <header-view
        :image="require('@/assets/add-dollar.png')"
        title="Account Top Up"
        subtitle="Top Up your accounts from within MultiCash provided by our partner ChangeNOW."
      />
    </view>
    <feature
      v-for="feature in features"
      :style="styles.feature"
      :key="feature.title"
      :title="feature.title"
      :description="feature.description"
      :image="feature.image"
    />
    <spacer large />
    <rounded-button
      title="Continue"
      type="primary"
      @on-press="continues"
    />
  </view-background>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'TopUpExplainView',

  data () {
    return {
      features: [
        {
          image: require('@/assets/fast-cart.png'),
          title: 'Easily Buy MCX',
          description: 'You can easily buy multiple currencies with a low fee right from within MultiCash. Just select your account, the amount, pay and you\'re done!'
        },
        {
          image: require('@/assets/infinity.png'),
          title: 'No Limits',
          description: 'Buying MCX or other currencies with USD or EUR is easier than ever! MultiCash provides an easy and secure way to Top Up your accounts.'
        },
        {
          image: require('@/assets/change-now.png'),
          title: 'A Great Partner',
          description: 'With ChangeNOW as our partner MultiCash can provide a seamlessly great service on topping up your accounts.'
        }
      ]
    }
  },

  computed: {
    styles () {
      return styleStore(this.isDarkScheme)
    }
  },

  methods: {
    ...mapActions(['announcementSeen']),

    continues () {
      this.announcementSeen('topUp')

      this.navigation.goBack()
    }
  }
}

const styleStore = (isDarkScheme) => {
  return {
    container: {
      alignItems: 'center',
      marginVertical: 20
    }
  }
}
</script>
