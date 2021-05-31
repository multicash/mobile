<template>
  <modal-view
    title="Payed!"
  >
    <text>Payed bitch!</text>
  </modal-view>
</template>

<script>
export default {
  name: 'PayedView',

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
