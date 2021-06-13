<template>
  <text>invest explain view</text>
</template>

<script>
export default {
  name: 'InvestExplainView',

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
