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
  <view-background no-padding>
    <modal-navigation
      title="Support"
      has-back-button
      @on-dismiss="navigation.goBack()"
    />

    <table-view :sections="data" :header="renderTableHeader"/>

  </view-background>
</template>

<script>
import TableHeaderView from '@/react/components/TableHeaderView'
import { Linking } from 'react-native'

export default {
  name: 'SupportView',

  data () {
    return {
      data: [
        {
          title: 'Support',
          data: [
            {
              title: 'Support Page',
              subtitle: 'https://multicash.io/support',
              leftIcon: { name: 'information-circle', color: '#0a63ac' },
              onPress: () => {
                Linking.openURL('https://multicash.io/support')
              }
            },
            {
              title: 'Discord',
              subtitle: 'https://discord.gg/multicash',
              leftIcon: { name: 'discord', type: 'font-awesome-5', size: 28, color: '#7189d9' },
              onPress: () => {
                Linking.openURL('https://discord.gg/multicash')
              }
            },
            {
              title: 'Facebook',
              subtitle: 'https://www.facebook.com/MultiCash',
              leftIcon: { name: 'logo-facebook', color: '#1876f2' },
              onPress: () => {
                Linking.openURL('https://www.facebook.com/MultiCash')
              }
            },
            {
              title: 'Reddit',
              subtitle: 'https://www.reddit.com/r/MultiCash',
              leftIcon: { name: 'logo-reddit', color: '#ff4400' },
              onPress: () => {
                Linking.openURL('https://www.reddit.com/r/MultiCash')
              }
            },
            {
              title: 'Telegram',
              subtitle: 'https://t.me/MultiCash',
              leftIcon: { name: 'send', color: '#25a7e6' },
              onPress: () => {
                Linking.openURL('https://t.me/MultiCash')
              }
            },
            {
              title: 'Twitter',
              subtitle: 'https://www.twitter.com/MultiCash',
              leftIcon: { name: 'logo-twitter', color: '#1ba0f1' },
              onPress: () => {
                Linking.openURL('https://www.twitter.com/MultiCash')
              }
            }
          ]
        }
      ]
    }
  },

  methods: {
    renderTableHeader (isDarkScheme) {
      return TableHeaderView(
        isDarkScheme,
        'Support',
        'Are you experiencing a problem with MultiCash? Or do you simply have a question? The MultiCash community is there to help!',
        require('@/assets/support.png')
      )
    }
  }
}
</script>
