<template>
  <view :style="{ flex: 1 }">
    <status-bar bar-style="light-content" />
    <modal-navigation
      title="Share QR"
      has-back-button
      @on-dismiss="navigation.goBack()"
    />
    <view-background>

      <view :style="styles.sourceContainer">
        <selector
          name="Receiving wallet"
          :value="targetWallet"
          @on-press="selectSourceWallet"
        />
      </view>

      <view :style="styles.variablesContainer">
        <rounded-text-input
          title="Description"
          placeholder="Why this payment?"
          :value="label"
          @input="label = $event"
        />
      </view>

      <view :style="styles.qrCodeContainer">
        <view :style="styles.qrCodeBox">
          <view :style="styles.qrCode">
            <qr-code
              :value="qrValue"
              color="#522cdb"
              :size="200"
            />
          </view>
        </view>
      </view>

      <view :style="styles.amountContainer">
        <money
          crypto
          :amount="route.params.amount * 1000000"
          :style="styles.amount"
        />
        <money
          convert
          :amount="parseFloat(route.params.amount) || 0"
          :style="styles.calculatedAmount"
        />
      </view>

      <rounded-button
        title="Share"
        icon="share-outline"
        :style="styles.shareButton"
        @on-press="showShareSheet"
      />

    </view-background>
  </view>
</template>

<script>
import ViewBackground from '@/components/views/ViewBackground'
import ModalNavigation from '@/components/navigations/ModalNavigation'
import Selector from '@/components/forms/Selector'
import RoundedTextInput from '@/components/forms/RoundedTextInput'
import Money from '@/components/labels/Money'
import RoundedButton from '@/components/buttons/RoundedButton'

export default {
  name: 'QrView',

  components: {
    RoundedButton,
    Money,
    RoundedTextInput,
    Selector,
    ModalNavigation,
    ViewBackground
  },

  data () {
    return {
      targetWallet: 'Main Account',
      label: ''
    }
  },

  computed: {
    styles () {
      return stylesStore(this.isDarkScheme)
    },

    qrValue () {
      let value = 'multicash:M6NYsdntCHYDv6X6uGzgEChnoQruHBR1De?tag=@SwenVanZanten&amount=' + this.route.params.amount

      if (this.label !== '') {
        value += '&label=' + this.label
      }

      return value
    }
  },

  methods: {
    selectSourceWallet () {
      this.navigation.navigate('wallets', {
        goBack: true,
        resolve: (value) => {
          this.targetWallet = value.name
        }
      })
    },

    showShareSheet () {
      alert('Show a share sheet')
    }
  }
}

const stylesStore = (isDarkScheme) => {
  return {

    sourceContainer: {
      marginBottom: 10
    },

    qrCodeContainer: {
      alignItems: 'center'
    },

    qrCodeBox: {
      backgroundColor: isDarkScheme ? 'black' : 'white',
      padding: 10,
      borderRadius: 20,
      shadowColor: isDarkScheme ? 'black' : '#c0c0ff',
      shadowRadius: 3,
      shadowOpacity: 0.5,
      shadowOffset: { width: 3, height: 3 },
      elevation: 10
    },

    qrCode: {
      borderRadius: 10,
      overflow: 'hidden',
      width: 200
    },

    amountContainer: {
      marginVertical: 30,
      alignItems: 'center'
    },

    amount: {
      fontSize: 40,
      color: '#a014c1',
      fontWeight: '600'
    },

    calculatedAmount: {
      color: isDarkScheme ? '#8374b2' : '#4d3f70',
      fontSize: 20,
      fontWeight: 'bold'
    },

    variablesContainer: {
      marginBottom: 30
    },

    shareButton: {
      height: 50,
      width: '100%'
    }
  }
}
</script>
