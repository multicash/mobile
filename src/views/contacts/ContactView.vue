<template>
  <view :style="{ flex: 1 }">
    <modal-navigation
      title="Contact"
      has-back-button
      @on-dismiss="navigation.goBack()"
    >
      <round-button
        slot="right"
      >
        <icon name="checkmark"/>
      </round-button>
    </modal-navigation>
    <view-background>
      <selector name="Icon">
        <view slot="value" :style="styles.iconContainer">
          <icon name="person-circle" color="grey" :size="40" />
          <spacer />
          <text :style="styles.iconText">Chosen icon</text>
        </view>
      </selector>

      <spacer />

      <RoundedTextInput title="Name" placeholder="Martin"/>

      <spacer />

      <RoundedTextInput title="Tag/Address" placeholder="@lutherKing"/>
    </view-background>
  </view>
</template>

<script>
import ViewBackground from '@/components/ViewBackground'
import ModalNavigation from '@/components/ModalNavigation'
import RoundedTextInput from '@/components/RoundedTextInput'
import Spacer from '@/components/Spacer'
import RoundButton from '@/components/RoundButton'
import Selector from '@/components/Selector'

export default {
  name: 'ContactView',

  components: {
    Selector,
    RoundButton,
    Spacer,
    RoundedTextInput,
    ModalNavigation,
    ViewBackground
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
      padding: 10,
      flexDirection: 'row',
      alignItems: 'center'
    },

    iconText: {
      color: isDarkScheme ? 'white' : 'black'
    }
  }
}
</script>
