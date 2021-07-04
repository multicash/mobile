<!--MultiCash Mobile-->
<!--Copyright (C) 2021  Swen van Zanten-->

<!--This program is free software: you can redistribute it and/or modify-->
<!--it under the terms of the GNU General Public License as published by-->
<!--the Free Software Foundation, either version 3 of the License, or-->
<!--any later version.-->

<!--This program is distributed in the hope that it will be useful,-->
<!--but WITHOUT ANY WARRANTY; without even the implied warranty of-->
<!--MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the-->
<!--GNU General Public License for more details.-->

<!--You should have received a copy of the GNU General Public License-->
<!--along with this program.  If not, see <https://www.gnu.org/licenses/>.-->

<template>
  <view :style="{ flex: 1 }">
    <modal-navigation
      title="Contact"
      has-back-button
      @on-dismiss="dismissUnsavedContact"
    >
      <round-button
        slot="right"
        @on-press="saveContact"
      >
        <icon name="checkmark"/>
      </round-button>
    </modal-navigation>
    <view-background scrollable>

      <input-description>The contacts name can be anything you want it to be.</input-description>
      <rounded-text-input
        title="Name"
        placeholder="Martin"
        :value="contact.name"
        @input="setName"
      />

      <spacer />

      <input-description>Fill in the contacts account tag or account address which will be used when selecting this contact for a new transaction.</input-description>
      <rounded-text-input
        title="Tag/Address"
        placeholder="@lutherKing"
        :value="contact.tagOrAddress"
        @input="setTag"
      />

      <spacer />

      <input-description>Make this contact even more recognizable by choosing a contact icon.</input-description>
      <selector name="Icon" @on-press="selectIcon">
        <view slot="value" :style="styles.iconContainer">
          <icon :name="contact.icon.name" :color="contact.icon.color" :size="40" />
          <spacer />
          <text :style="styles.iconText">{{ contact.icon.name }}</text>
        </view>
      </selector>

      <spacer />

      <input-description>By selecting this contact as a favorite is will be placed on top of contact lists.</input-description>
      <switch-notification
        :value="contact.isFavorite"
        @input="contact.isFavorite = $event"
        label="Favorite"
        type="success"
      />

      <spacer />

      <rounded-button
        v-if="contact.identifier !== null"
        title="Remove"
        icon="trash"
        @on-press="removeContact"
      />

      <spacer />
    </view-background>
  </view>
</template>

<script>
import UUID from '@/core/support/UUID'
import { Alert } from 'react-native'
import { mapActions } from 'vuex'

export default {
  name: 'ContactView',

  data () {
    return {
      changed: false,
      contact: {
        identifier: null,
        name: '',
        tagOrAddress: '',
        isFavorite: false,
        icon: {
          name: 'person',
          color: '#931A5A'
        }
      }
    }
  },

  computed: {
    styles () {
      return stylesStore(this.isDarkScheme)
    },

    contactInfoValid () {
      return this.contact.name !== '' &&
        this.contact.tagOrAddress !== '' &&
        this.contact.icon.name !== '' &&
        this.contact.icon.color !== ''
    }
  },

  created () {
    if (this.route.params && this.route.params.contactIdentifier) {
      this.getContact(this.route.params.contactIdentifier).then(contact => {
        this.contact.identifier = contact.identifier
        this.contact.name = contact.name
        this.contact.tagOrAddress = contact.tagOrAddress
        this.contact.isFavorite = contact.isFavorite
        this.contact.icon.name = contact.icon.name
        this.contact.icon.color = contact.icon.color
      })
    }
  },

  methods: {
    ...mapActions(['getContact', 'updateContact', 'addContact']),

    setColor (color) {
      this.contact.icon.color = color
      this.changed = true
    },

    setName (name) {
      this.contact.name = name
      this.changed = true
    },

    setTag (tagOrAddress) {
      this.contact.tagOrAddress = tagOrAddress
      this.changed = true
    },

    selectIcon () {
      const unsubscribe = this.navigation.addListener('focus', () => {
        if (this.route.params && this.route.params.contact) {
          this.contact = this.route.params.contact
          this.changed = true
        }

        this.navigation.removeListener('focus', unsubscribe)
      })

      this.navigation.navigate('icons', { contact: this.contact })
    },

    dismissUnsavedContact () {
      if (this.contact.identifier === null || !this.changed) {
        return this.navigation.goBack()
      }

      Alert.alert(
        'Changes not saved',
        'You did not save the contact',
        [
          {
            text: 'Save contact',
            onPress: () => {
              this.saveContact()
            }
          },
          {
            text: 'Dismiss changes',
            onPress: () => {
              this.navigation.goBack()
            }
          },
          {
            text: 'Cancel',
            style: 'cancel'
          }
        ]
      )
    },

    saveContact () {
      if (!this.contactInfoValid) {
        return Alert.alert(
          'Contact invalid',
          'Looks like the contact information is invalid'
        )
      }

      if (this.contact.identifier === null) {
        this.contact.identifier = UUID.create()
        this.addContact(this.contact).then(() => {
          this.navigation.goBack()

          Alert.alert(
            'New contact created',
            'You\'ve successfully created a new contact!'
          )
        })

        return
      }

      this.updateContact(this.contact).then(() => {
        this.navigation.goBack()

        Alert.alert(
          'Updated contact',
          'You\'ve successfully updated the contact!'
        )
      })
    },

    removeContact () {
      this.$store.dispatch('removeContact', this.contact).then(() => {
        this.navigation.goBack()
      })
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
    },

    isFavoriteContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 20
    },

    isFavoriteText: {
      color: isDarkScheme ? 'white' : 'black'
    }
  }
}
</script>
