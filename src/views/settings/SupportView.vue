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
              leftIcon: { name: 'information-circle' },
              navigate: () => {
                Linking.openURL('https://multicash.io/support')
              }
            },
            {
              title: 'Discord',
              subtitle: 'https://discord.gg/multicash',
              leftIcon: { name: 'discord', type: 'font-awesome-5', size: 28 },
              navigate: () => {
                Linking.openURL('https://discord.gg/multicash')
              }
            },
            {
              title: 'Facebook',
              subtitle: 'https://www.facebook.com/MultiCash',
              leftIcon: { name: 'logo-facebook' },
              navigate: () => {
                Linking.openURL('https://www.facebook.com/MultiCash')
              }
            },
            {
              title: 'Reddit',
              subtitle: 'https://www.reddit.com/r/MultiCash',
              leftIcon: { name: 'logo-reddit' },
              navigate: () => {
                Linking.openURL('https://www.reddit.com/r/MultiCash')
              }
            },
            {
              title: 'Telegram',
              subtitle: 'https://t.me/MultiCash',
              leftIcon: { name: 'send' },
              navigate: () => {
                Linking.openURL('https://t.me/MultiCash')
              }
            },
            {
              title: 'Twitter',
              subtitle: 'https://www.twitter.com/MultiCash',
              leftIcon: { name: 'logo-twitter' },
              navigate: () => {
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
