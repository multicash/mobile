<template>
  <view :style="{ flex: 1 }">
    <modal-navigation
      title="Enter recipient"
      has-back-button
      @on-dismiss="navigation.goBack()"
    />

    <view-background>
      <rounded-text-input
        title="Address or Tag"
        placeholder="Enter an address or recipient tag"
        :style="{ marginBottom: 10 }"
      />
      <rounded-text-input
        title="Name"
        placeholder="Address name"
        :style="{ marginBottom: 10 }"
      />

      <view :style="styles.addFavoritesContainer">
        <text :style="styles.addFavoritesText">Add to favorites</text>
        <switch v-model="addToFavorites"/>
      </view>

      <rounded-button title="Next" @on-press="navigation.navigate('confirm', { amount: 123 })"/>
    </view-background>
  </view>
</template>

<script>
import ViewBackground from '@/components/ViewBackground'
import ModalNavigation from '@/components/ModalNavigation'
import RoundedButton from '@/components/RoundedButton'
import RoundedTextInput from '@/components/RoundedTextInput'
export default {
  name: 'EnterRecipientScreen',

  components: { RoundedTextInput, RoundedButton, ModalNavigation, ViewBackground },

  data () {
    return {
      addToFavorites: false
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
  }
}

const stylesStore = (isDarkScheme) => {
  return {
    addFavoritesContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 20
    },

    addFavoritesText: {
      color: isDarkScheme ? 'white' : 'black'
    }
  }
}
</script>
