<template>
  <modal-view
    title="Investment"
    has-back-button
    @on-dismiss="navigation.goBack()"
  >
    <text>Placeholder</text>
  </modal-view>
</template>

<script>
export default {
  name: 'InvestmentView',

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
