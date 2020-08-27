<template>
  <view :style="{ flex: 1 }">
    <modal-navigation
      title="New payment"
      has-back-button
      @on-dismiss="navigation.goBack()"
    />
    <view-background
      :style="{ alignItems: 'center' }"
    >
      <view :style="styles.headerContainer">
        <view :style="styles.iconContainer">
          <view :style="styles.iconCircle">
            <icon name="wallet" :size="40" color="#2ab779"/>
          </view>
          <text :style="styles.walletTitle">Main Account</text>
          <text :style="styles.walletAmount">50,444.44 MCX</text>
        </view>
        <icon name="arrow-forward-outline" :size="50"/>
        <view :style="styles.iconContainer">
          <view :style="styles.iconCircle">
            <icon name="gift" :size="40" color="#952aaa"/>
          </view>
          <text :style="styles.walletTitle">Savings Account</text>
          <text :style="styles.walletAmount"> </text>
        </view>
      </view>

      <text :style="styles.amount">{{ navigation.state.params.amount + '.00 MCX' || '' }}</text>

      <rounded-button
        title="Send payment"
        :style="styles.sendPaymentButton"
      />

      <text-input
        :style="styles.descriptionTextInput"
        placeholder="Description"
      />
    </view-background>
  </view>
</template>

<script>
import ModalNavigation from '@/components/ModalNavigation'
import ViewBackground from '@/components/ViewBackground'
import RoundedButton from '@/components/RoundedButton'

export default {
  name: 'ConfirmScreen',

  components: { RoundedButton, ViewBackground, ModalNavigation },

  props: {
    navigation: {
      type: Object
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
    headerContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      paddingHorizontal: 20
    },

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

    amount: {
      fontSize: 40,
      color: '#a014c1',
      fontWeight: '600',
      padding: 30
    },

    walletTitle: {
      color: isDarkScheme ? 'white' : 'black',
      fontSize: 12
    },

    walletAmount: {
      color: isDarkScheme ? '#a7a7a7' : '#727272',
      fontSize: 12
    },

    sendPaymentButton: {
      width: '100%',
      marginBottom: 10
    },

    descriptionTextInput: {
      color: isDarkScheme ? 'white' : 'black',
      backgroundColor: isDarkScheme ? '#2e2e36' : '#dfdfdf',
      borderRadius: 5,
      width: '100%',
      height: 50,
      padding: 10
    }
  }
}
</script>
