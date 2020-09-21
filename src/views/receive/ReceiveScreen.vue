<template>
  <view :style="{ flex: 1 }">
    <status-bar bar-style="light-content" />
    <modal-navigation
      title="Receive"
      has-close-button
      @on-dismiss="$parent.$parent.$emit('update:visible', false)"
    />
    <view-background>

      <view :style="styles.sourceContainer">
        <selector
          name="Receiving wallet"
          :value="targetWallet"
          @on-press="selectSourceWallet"
        />
      </view>

      <view :style="styles.qrCodeContainer">
        <view :style="styles.qrCodeBox">
          <view :style="styles.qrCode">
            <qr-code
              value="multicash:M2109dk01kwsk1k2e230u3jdaojdsaojd98asDSjdais0jd0?tag=@SwenVanZanten"
              color="#522cdb"
              :size="200"
            />
          </view>
        </view>
      </view>

      <view :style="styles.addressContainer">
        <text :style="styles.tag">@SwenVanZanten</text>
        <text :style="styles.address">M2109dk01kwsk1k2e230u3jdaojdsaojd98asDSjdais0jd0</text>
      </view>

      <view :style="styles.variablesContainer">
        <rounded-text-input title="Amount" placeholder="Request an specific amount" :style="{ marginBottom: 10 }"/>
        <rounded-text-input title="Description" placeholder="Why this payment?" />
      </view>

    </view-background>
  </view>
</template>

<script>
import ViewBackground from '@/components/ViewBackground'
import ModalNavigation from '@/components/ModalNavigation'
import Selector from '@/components/Selector'
import RoundedTextInput from '@/components/RoundedTextInput'

export default {
  name: 'ReceiveView',

  components: {
    RoundedTextInput,
    Selector,
    ModalNavigation,
    ViewBackground
  },

  data () {
    return {
      targetWallet: 'Main Account'
    }
  },

  props: {
    navigation: {
      type: Object
    }
  },

  computed: {
    styles () {
      return stylesStore(this.isDarkScheme)
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
    }
  }
}

const stylesStore = (isDarkScheme) => {
  return {

    sourceContainer: {
      marginBottom: 30
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

    addressContainer: {
      marginVertical: 30,
      justifyContent: 'center',
      alignItems: 'center'
    },

    tag: {
      fontWeight: 'bold',
      fontSize: 20,
      color: isDarkScheme ? '#8b36df' : '#8b36df',
      marginBottom: 5
    },

    address: {
      fontSize: 10,
      color: isDarkScheme ? '#dadada' : 'black'
    },

    variablesContainer: {}
  }
}
</script>
