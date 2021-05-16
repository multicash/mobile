<template>
  <view :style="{ flex: 1 }">
    <view-background scrollable>
      <text>Whats New</text>
      <spacer />
      <rounded-button
        title="Continue"
        @on-press="continues"
      />
    </view-background>
  </view>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'WhatsNew',

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
