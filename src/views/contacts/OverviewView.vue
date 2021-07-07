<!--MultiCash Mobile-->
<!--Copyright (C) 2021  MultiCash Developers-->

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
