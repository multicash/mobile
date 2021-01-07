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
    <table-view :sections="contactsList" :grouped="false"/>
  </view-background>
</template>

<script>
export default {
  name: 'OverviewView',

  data () {
    return {
      contacts: [
        {
          name: 'CryptoRekt',
          tag: '@cr',
          icon: { name: 'person-circle', color: '#a7fb00' }
        },
        {
          name: 'Mihael',
          tag: '@mihael',
          icon: { name: 'cloud-circle', color: '#eaee18' }
        },
        {
          name: 'sandersvoice',
          tag: '@sandersvoice',
          icon: { name: 'person-circle', color: '#3b28f3' }
        },
        {
          name: 'Sunerok',
          tag: '@justinvendetta',
          icon: { name: 'navigate-circle', color: '#00ffb2' }
        },
        {
          name: 'Swen van Zanten',
          tag: '@swenvanzanten',
          icon: { name: 'planet', color: '#c807a9' }
        }
      ]
    }
  },

  computed: {
    contactsList () {
      return [
        {
          data: this.contacts.map(contact => {
            return {
              title: contact.name,
              subtitle: contact.tag,
              leftIcon: { name: contact.icon.name, color: contact.icon.color, size: 40 },
              onPress: () => {
                this.navigation.navigate('contact', { contact })
              }
            }
          })
        }
      ]
    }
  }
}
</script>
