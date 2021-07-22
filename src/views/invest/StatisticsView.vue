<template>
  <modal-view
    title="Statistics"
    has-back-button
    @on-dismiss="navigation.goBack()"
  >
    <text>Statistics</text>
  </modal-view>
</template>

<script>
export default {
  name: 'StatisticsView',

  computed: {
    styles () {
      return styleStore(this.isDarkScheme)
    }
  }
}

const styleStore = (isDarkScheme) => {
  return {}
}
</script>
