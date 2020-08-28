<template>
  <view :style="styles.iconContainer">
    <view :style="styles.iconCircle">
      <icon :name="icon" :size="40" :color="iconColor"/>
    </view>
    <text :style="styles.walletTitle">{{ title }}</text>
    <money v-if="amount" :style="styles.walletAmount" :amount="amount" crypto/>
    <text v-else> </text>
  </view>
</template>

<script>
import Money from '@/components/Money'

export default {
  name: 'SourceIcon',
  components: { Money },
  props: {
    icon: {
      type: String
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
      backgroundColor: isDarkScheme ? '#494949' : '#bbbbbb',
      justifyContent: 'center',
      alignItems: 'center',
      paddingLeft: 3,
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
