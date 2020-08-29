<template>
  <touchable-opacity
    :active-opacity="0.6"
    :on-press="() => modalVisible = true"
    :style="styles.walletCard"
  >
    <view :style="styles.walletCardHeader">
      <wallet-icon :icon="wallet.icon" :size="30"/>

      <text
        :style="styles.walletCardName"
        adjusts-font-size-to-fit
        :minimumFontScale="0.01"
      >
        {{ wallet.name }}
      </text>
    </view>

    <view :style="styles.moneyView">
      <text
        :style="styles.walletCardAmount"
        adjusts-font-size-to-fit
        :minimumFontScale="0.01"
      >
        {{ wallet.amount }}
      </text>
      <text :style="styles.walletCardAmountSign">MCX</text>
    </view>

    <view :style="styles.moneyView">
      <text :style="styles.walletCardFiatSign">€</text>
      <text
        :style="styles.walletCardFiatAmount"
        adjusts-font-size-to-fit
        :minimumFontScale="0.01"
      >
        {{ wallet.amount / 200 }}
      </text>
    </view>

    <view-modal :visible.sync="modalVisible">
      <wallet-view :wallet="wallet"/>
    </view-modal>

  </touchable-opacity>
</template>

<script>
import WalletView from '@/views/WalletView'
import ViewModal from '@/components/ViewModal'
import { cards, text } from '@/styles/index'
import WalletIcon from '@/components/WalletIcon'

export default {
  name: 'WalletCard',

  components: { WalletIcon, ViewModal, WalletView },

  data () {
    return {
      modalVisible: false
    }
  },

  computed: {
    styles () {
      return stylesStore(this.isDarkScheme)
    }
  },

  props: {
    wallet: {
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
      minWidth: 250
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
    walletCardAmountSign: {
      marginLeft: 10,
      color: text(isDarkScheme).color
    },
    walletCardAmount: {
      color: text(isDarkScheme).color,
      fontSize: 35,
      fontWeight: 'bold'
    },
    walletCardFiatSign: {
      marginRight: 5,
      color: isDarkScheme ? '#b95c8b' : '#931A5A'
    },
    walletCardFiatAmount: {
      color: isDarkScheme ? '#b95c8b' : '#931A5A',
      fontSize: 15,
      fontWeight: '600'
    }
  }
}
</script>
