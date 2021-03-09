<template>
  <touchable-opacity
    :active-opacity="0.6"
    :on-press="() => $emit('wallet-selected', value)"
    :style="styles.walletCard"
  >
    <view :style="styles.walletCardHeader">
      <wallet-icon :icon="value.icon" :size="30"/>

      <text
        :style="styles.walletCardName"
        adjusts-font-size-to-fit
        :minimumFontScale="0.01"
      >
        {{ value.name }}
      </text>
    </view>

    <view :style="styles.moneyView">
      <money
        crypto
        :amount="value.totalAmount"
        :style="styles.walletCardAmount"
      />
    </view>

    <view :style="styles.moneyView">
      <money
        convert
        :amount="value.totalAmount"
        :style="styles.walletCardFiatAmount"
      />
    </view>
  </touchable-opacity>
</template>

<script>
import { cards, text } from '@/core/support/styles'
import WalletIcon from '@/components/icons/WalletIcon'
import Money from '@/components/labels/Money'

export default {
  name: 'WalletCard',

  components: { Money, WalletIcon },

  computed: {
    styles () {
      return stylesStore(this.isDarkScheme)
    }
  },

  props: {
    value: {
      type: Object,
      required: true
    }
  }
}

const stylesStore = (isDarkScheme) => {
  return {
    walletCard: {
      ...cards(isDarkScheme),
      flex: 1,
      height: '100%',
      width: 250
    },
    walletCardHeader: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      marginBottom: 10
    },
    walletCardName: {
      marginLeft: 10,
      fontSize: 15,
      fontWeight: '600',
      color: text(isDarkScheme).color,
      lineHeight: 30
    },
    moneyView: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
    },
    walletCardAmount: {
      color: text(isDarkScheme).color,
      fontSize: 35,
      fontWeight: 'bold',
      width: '100%'
    },
    walletCardFiatAmount: {
      color: isDarkScheme ? '#b95c8b' : '#931A5A',
      fontSize: 15,
      fontWeight: '600'
    }
  }
}
</script>
