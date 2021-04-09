<template>
  <touchable-opacity
    :on-press="() => $emit('on-press')"
    :active-opacity="0.6"
  >
    <view :style="styles.iconContainer">
      <view :style="styles.iconCircle">
        <icon v-if="transactionIcon.icon" :name="transactionIcon.icon" :size="40" :color="transactionIcon.iconColor"/>
        <wallet-icon v-if="transactionIcon.image" :icon="transactionIcon.image" :size="40"/>
      </view>
      <text :style="styles.walletTitle">{{ transactionIcon.title }}</text>
      <money v-if="transactionIcon.amount" :style="styles.walletAmount" :amount="transactionIcon.amount" crypto/>
      <text v-else :style="styles.walletAmount">{{ transactionIcon.tagOrAddress }}</text>
    </view>
  </touchable-opacity>
</template>

<script>
import Money from '@/components/labels/Money'
import WalletIcon from '@/components/icons/WalletIcon'

export default {
  name: 'SourceIcon',

  components: { WalletIcon, Money },

  props: {
    transactionIcon: {
      type: Object,
      required: true
    }
  },

  computed: {
    styles () {
      return stylesStore(this.isDarkScheme)
    }
  }
}

const stylesStore = (isDarkScheme) => {
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
