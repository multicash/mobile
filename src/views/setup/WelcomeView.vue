<template>
  <view-background :style="{ justifyContent: 'center', alignItems: 'center'}">
    <text :style="{ color: isDarkScheme ? 'white' : 'black', marginBottom: 30 }">
      Placeholder view for application setup :)
    </text>
    <rounded-button title="Finish setup" @on-press="updateIsSetup(true)"/>
  </view-background>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions(['updateIsSetup'])
  }
}
</script>
