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
