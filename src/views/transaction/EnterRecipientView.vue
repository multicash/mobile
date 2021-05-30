<template>
  <modal-view
    title="Enter recipient"
    has-back-button
    @on-dismiss="navigation.goBack()"
  >
    <view>
      <rounded-text-input
        ref="address"
        title="Address or Tag"
        placeholder="Enter an address or recipient tag"
        :style="{ marginBottom: 10 }"
        :value="address"
        @input="address = $event"
      />
      <rounded-text-input
        ref="name"
        title="Name (optional)"
        placeholder="Recipient name"
        :style="{ marginBottom: 10 }"
        :value="name"
        @input="name = $event"
      />
    </view>

    <view :style="styles.addFavoritesContainer">
      <text :style="styles.addFavoritesText">Add to favorites</text>
      <switch v-model="addToFavorites"/>
    </view>

    <rounded-button
      title="Next"
      v-if="showNext"
      @on-press="toConfirm"
    />
  </modal-view>
</template>

<script>
import Contact from '@/core/contacts/models/Contact'
import UUID from '@/core/support/UUID'
import { mapActions } from 'vuex'

export default {
  name: 'EnterRecipientView',

  data () {
    return {
      addToFavorites: false,
      address: '',
      name: ''
    }
  },

  created () {
    this.navigation.addListener('focus', () => {
      this.$refs.address.focus()
    })
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
    ...mapActions(['addContact']),

    toConfirm () {
      const contact: Contact = {
        identifier: UUID.create(),
        name: this.name || 'Unknown',
        tagOrAddress: this.address,
        isFavorite: this.addToFavorites,
        icon: {
          name: 'person',
          color: '#931A5A'
        }
      }

      if (this.name !== '' || this.addToFavorites) {
        this.addContact(contact)
      }

      this.route.params.transaction.to = contact

      this.navigation.navigate('confirm', this.route.params)
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
