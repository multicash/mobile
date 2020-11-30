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
        :value="address"
        @input="address = $event"
      />
      <rounded-text-input
        title="Name (optional)"
        placeholder="Recipient name"
        :style="{ marginBottom: 10 }"
        :value="name"
        @input="name = $event"
      />

      <view :style="styles.addFavoritesContainer">
        <text :style="styles.addFavoritesText">Add to favorites</text>
        <switch v-model="addToFavorites"/>
      </view>

      <rounded-button
        title="Next"
        v-if="showNext"
        @on-press="toConfirm"
      />
    </view-background>
  </view>
</template>

<script>
export default {
  name: 'EnterRecipientView',

  data () {
    return {
      addToFavorites: false,
      address: '',
      name: ''
    }
  },

  computed: {
    styles () {
      return stylesStore(this.isDarkScheme)
    },

    showNext () {
      return this.address !== ''
    }
  },

  methods: {
    toConfirm () {
      this.navigation.navigate('confirm', {
        ...this.route.params,
        target: {
          title: this.address,
          amount: null,
          icon: 'star',
          iconColor: '#6d6de3'
        }
      })
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
