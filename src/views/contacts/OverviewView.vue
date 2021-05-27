<template>
  <view-background no-padding>
    <modal-navigation
      title="Contacts"
      has-close-button
      @on-dismiss="navigation.goBack()"
    >
      <round-button
        slot="right"
        @on-press="navigation.navigate('contact')"
      >
        <icon name="person-add" :size="20"/>
      </round-button>
    </modal-navigation>
    <table-view
      :sections="contactsList"
      :grouped="false"
      subtitle="primary"
    >
      <view
        :style="styles.noContactsContainer"
        slot="empty"
      >
        <header-view
          title="No Contacts"
          subtitle="Add a contact to send them MCX easily"
          :image-background="require('@/assets/contact-book.png')"
          :image-foreground="require('@/assets/new.png')"
        />
      </view>
    </table-view>
  </view-background>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'OverviewView',

  computed: {
    ...mapGetters(['contacts']),

    styles () {
      return stylesStore(this.isDarkScheme)
    },

    contactsList () {
      if (this.contacts.length === 0) {
        return []
      }

      return [
        {
          data: this.contacts.map(contact => {
            return {
              title: contact.name,
              subtitle: contact.tagOrAddress,
              leftIcon: { name: contact.icon.name, color: contact.icon.color, size: 30 },
              rightIcon: contact.isFavorite ? { name: 'star', color: '#FFDD57', size: 20 } : undefined,
              onPress: () => {
                this.navigation.navigate('contact', { contactIdentifier: contact.identifier })
              }
            }
          })
        }
      ]
    }
  }
}

const stylesStore = (isDarkScheme) => {
  return {
    noContactsContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
  }
}
</script>
