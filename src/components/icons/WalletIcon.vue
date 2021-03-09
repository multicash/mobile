<template>
  <image :source="resolvedIcon" :style="styles.icon"/>
</template>

<script>
import { resolveIcon } from '@/core/support/walletIcons'

export default {
  name: 'WalletIcon',

  props: {
    icon: {
      type: String,
      default: 'wallet'
    },

    size: {
      type: Number,
      default: 50
    }
  },

  computed: {
    resolvedIcon () {
      return resolveIcon(this.icon)
    },

    styles () {
      return stylesStore(this.size)
    }
  }
}

const stylesStore = (size) => {
  return {
    icon: {
      width: size,
      height: size,
      resizeMode: 'contain'
    }
  }
}
</script>
