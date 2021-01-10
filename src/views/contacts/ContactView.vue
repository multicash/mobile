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
    <view-background>
      <selector name="Icon" @on-press="selectIcon">
        <view slot="value" :style="styles.iconContainer">
          <icon :name="contact.icon.name" :color="contact.icon.color" :size="40" />
          <spacer />
          <text :style="styles.iconText">{{ contact.icon.name }}</text>
        </view>
      </selector>

      <color-picker
        @input="setColor"
        @onDrag="navigation.setOptions({ gestureEnabled: false })"
        @onDragRelease="navigation.setOptions({ gestureEnabled: true })"
      />

      <spacer />
      <spacer />

      <rounded-text-input
        title="Name"
        placeholder="Martin"
        :value="contact.name"
        @input="setName"
      />

      <spacer />

      <rounded-text-input
        title="Tag/Address"
        placeholder="@lutherKing"
        :value="contact.tag"
        @input="setTag"
      />

      <spacer :style="{ flex: 1 }" />

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
import UUID from '@/support/UUID'
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
        tag: '',
        icon: {
          name: 'person-circle',
          color: 'cyan'
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
        this.contact.tag !== '' &&
        this.contact.icon.name !== '' &&
        this.contact.icon.color !== ''
    }
  },

  created () {
    if (this.route.params && this.route.params.contactIdentifier) {
      this.getContact(this.route.params.contactIdentifier).then(contact => {
        this.contact.identifier = contact.identifier
        this.contact.name = contact.name
        this.contact.tag = contact.tag
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

    setTag (tag) {
      this.contact.tag = tag
      this.changed = true
    },

    selectIcon () {
      this.navigation.navigate('icons', {
        goBack: true,
        resolve: (value) => {
          this.contact.icon.name = value.item
          this.changed = true
        }
      })
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
    }
  }
}
</script>
