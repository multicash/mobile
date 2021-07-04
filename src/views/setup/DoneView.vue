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
    <safe-area-view :style="styles.safeArea">
      <status-bar :bar-style="isDarkScheme ? 'light-content' : 'dark-content'" />
      <view :style="styles.container">
        <view :style="styles.imageContainer">
          <image :style="styles.image" :source="require('@/assets/check-all.png')" />
        </view>
        <text :style="styles.title">We're ready to go!</text>
        <text :style="styles.subtitle">The basic setup is done! You setup an application PIN and selected a default well-known currency. Now it's time to setup your first account.</text>

        <spacer />

        <feature
          v-for="feature in features"
          :style="styles.feature"
          :key="feature.title"
          :title="feature.title"
          :description="feature.description"
          :image="feature.image"
        />
      </view>

      <spacer large/>

      <rounded-button
        :style="{ maxWidth: 350, width: '100%' }"
        title="Proceed"
        @on-press="done"
        type="primary"
      />
    </safe-area-view>
  </view-background>
</template>

<script>
import { SafeAreaView } from 'react-native-safe-area-context'
import { mapActions } from 'vuex'
import { sectionTitle, subtitle } from '@/core/support/styles'

export default {
  components: { SafeAreaView },

  data () {
    return {
      features: [
        {
          image: require('@/assets/checked.png'),
          title: 'The first steps',
          description: 'Buying MCX or other currencies with USD or EUR is easier than ever! MultiCash provides an easy and secure way to Top Up your accounts.'
        },
        {
          image: require('@/assets/coins/MCX.png'),
          title: 'Setup your first account',
          description: 'You can easily buy multiple currencies with a low fee right from within MultiCash. Just select your account, the amount, pay and you\'re done!'
        },
        {
          image: require('@/assets/support.png'),
          title: 'Reach out for help',
          description: 'With ChangeNOW as our partner MultiCash can provide a seamlessly great service on topping up your accounts.'
        }
      ]
    }
  },

  computed: {
    styles () {
      return stylesStore(this.isDarkScheme)
    }
  },

  methods: {
    ...mapActions(['updateIsSetup']),

    done () {
      this.updateIsSetup(true)
    }
  }
}

const stylesStore = (isDarkScheme) => {
  return {
    safeArea: {
      flex: 1
    },

    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      maxWidth: 450
    },

    image: {
      width: 100,
      height: 100,
      resizeMode: 'contain'
    },

    imageContainer: {
      width: 100,
      height: 100,
      marginBottom: 10,
      shadowColor: '#3ae900',
      shadowRadius: 60,
      shadowOpacity: isDarkScheme ? 0.35 : 0.7
    },

    title: {
      color: sectionTitle(isDarkScheme).color,
      fontSize: 28,
      fontWeight: '900',
      paddingBottom: 10,
      textAlign: 'center'
    },

    subtitle: {
      color: subtitle(isDarkScheme).color,
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center'
    }
  }
}
</script>
