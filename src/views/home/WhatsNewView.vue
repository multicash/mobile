<template>
  <view-background scrollable>
    <view :style="styles.container">
      <header-view
        :image-background="require('@/assets/coins/MCX.png')"
        :image-foreground="require('@/assets/new.png')"
        title="What's New!"
        subtitle="MultiCash is constantly updating and improving our apps. So we occasionally will tell you all about what we've been up to."
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
  name: 'WhatsNew',

  data () {
    return {
      features: [
        {
          image: require('@/assets/online-shop-sale.png'),
          title: 'Limited Offer!',
          description: 'Get 10 MCX for free when creating a new MCX account right now! Simply setup a MCX account through one of our MultiCash application and you\'ll receive 10 free MCX to start your MCX experience right away!'
        },
        {
          image: require('@/assets/add-dollar.png'),
          title: 'Account Top Up',
          description: 'You can now easily Top Up your accounts from within MultiCash provided by our partner ChangeNOW.'
        },
        {
          image: require('@/assets/currency-exchange.png'),
          title: 'Multiple Currencies',
          description: 'MultiCash enables you to setup multiple different accounts with different currencies like Bitcoin and Ethereum'
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
      this.announcementSeen('home')

      this.navigation.goBack()
    }
  }
}

const styleStore = (isDarkScheme) => {
  return {}
}
</script>
