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
        <source-icon title="Main Account" :amount="50444440000" icon="wallet" icon-color="#2ab779"/>
        <icon name="arrow-forward-outline" :size="50"/>
        <source-icon title="Savings Account" icon="gift" icon-color="#952aaa"/>
      </view>

      <money crypto :amount="navigation.state.params.amount * 1000000" :style="styles.amount"/>

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
import SourceIcon from '@/components/SourceIcon'
import Money from '@/components/Money'

export default {
  name: 'ConfirmScreen',

  components: { Money, SourceIcon, RoundedButton, ViewBackground, ModalNavigation },

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

    amount: {
      fontSize: 40,
      color: '#a014c1',
      fontWeight: '600',
      padding: 30
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
