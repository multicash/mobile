<template>
  <view :style="styles.iconContainer">
    <view :style="styles.iconCircle">
      <icon v-if="icon" :name="icon" :size="40" :color="iconColor"/>
      <wallet-icon v-if="image" :icon="image" :size="40"/>
    </view>
    <text :style="styles.walletTitle">{{ title }}</text>
    <money v-if="amount" :style="styles.walletAmount" :amount="amount" crypto/>
    <text v-else> </text>
  </view>
</template>

<script>
import Money from '@/components/Money'
import WalletIcon from '@/components/WalletIcon'

export default {
  name: 'SourceIcon',

  components: { WalletIcon, Money },

  props: {
    image: {
      type: String,
      default: null
    },

    icon: {
      type: String,
      default: null
    },

    iconColor: {
      type: String,
      default: undefined
    },

    title: {
      type: String
    },

    amount: {
      type: Number,
      default: null
    }
  },

  computed: {
    styles () {
      return stylesStore(this.isDarkScheme, !!this.image)
    }
  }
}

const stylesStore = (isDarkScheme, usesImage) => {
  return {
    iconContainer: {
      justifyContent: 'center',
      alignItems: 'center'
    },

    iconCircle: {
      height: 64,
      width: 64,
      borderRadius: 32,
      backgroundColor: isDarkScheme ? '#494949' : '#d6d5d5',
      justifyContent: 'center',
      alignItems: 'center',
      paddingLeft: usesImage ? 0 : 3,
      marginBottom: 10
    },

    walletTitle: {
      color: isDarkScheme ? 'white' : 'black',
      fontSize: 12
    },

    walletAmount: {
      color: isDarkScheme ? '#a7a7a7' : '#727272',
      fontSize: 12
    }
  }
}
</script>
