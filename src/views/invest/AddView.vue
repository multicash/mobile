<template>
  <modal-view
    title="Add Investment"
    has-back-button
    @on-dismiss="navigation.goBack()"
  >
    <text>Placeholder</text>
  </modal-view>
</template>

<script>
export default {
  name: 'AddView',

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
