<template>
  <image :source="resolvedIcon" :style="styles.icon"/>
</template>

<script>
export default {
  name: 'WalletIcon',

  data () {
    return {
      icons: {
        wallet: () => require('@/assets/walletIcons/wallet.png'),
        moneyBox: () => require('@/assets/walletIcons/money_box.png'),
        gift: () => require('@/assets/walletIcons/gift.png'),
        newYears: () => require('@/assets/walletIcons/new_years.png'),
        security: () => require('@/assets/walletIcons/security.png')
      }
    }
  },

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
      const icon = this.icons[this.icon] || (() => null)

      if (!icon) {
        return
      }

      return icon()
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
