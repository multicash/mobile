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
    setTimeout(() => {
      this.payed = true
    }, 1000)
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
