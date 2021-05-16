<template>
  <view-background no-padding>
    <modal-navigation
      title="Top UP"
      has-close-button
      @on-dismiss="navigation.goBack()"
    />

    <table-view :sections="wallets" :header="renderTableHeader"/>
  </view-background>
</template>

<script>
import TableHeaderView from '@/react/components/TableHeaderView'
import { resolveIcon } from '@/core/assets/walletIcons'
import { mapActions } from 'vuex'

export default {
  name: 'OverviewView',

  computed: {
    styles () {
      return styleStore(this.isDarkScheme)
    },

    wallets () {
      return [
        {
          title: 'Which Account?',
          data: this.orderedWallets
            .map(wallet => {
              return {
                title: wallet.name,
                subtitle: this.formatAmountFromSatoshis(wallet.totalAmount),
                leftAvatar: { source: resolveIcon(wallet.icon), size: 40 },
                onPress: () => this.navigate(wallet)
              }
            })
        }
      ]
    }
  },

  created () {
    this.hasAnnouncement('topUp').then(hasAnnouncement => {
      if (hasAnnouncement) {
        this.navigation.navigate('topUp.explain')
      }
    })
  },

  methods: {
    ...mapActions(['hasAnnouncement', 'announcementSeen']),

    navigate (wallet) {

    },

    renderTableHeader (isDarkScheme) {
      return TableHeaderView(
        isDarkScheme,
        'Account Top Up',
        'Top Up your accounts from within MultiCash provided by our partner ChangeNOW.\n\nChoose the account you want to Top Up to proceed.',
        require('@/assets/add-dollar.png')
      )
    }
  }
}

const styleStore = (isDarkScheme) => {
  return {}
}
</script>
