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
    <table-view :sections="data" :grouped="false"/>
  </view-background>
</template>

<script>
import ViewBackground from '@/components/ViewBackground'
import ModalNavigation from '@/components/ModalNavigation'
import TableView from '@/components/TableView'
import RoundButton from '@/components/RoundButton'

export default {
  name: 'OverviewView',

  components: {
    RoundButton,
    TableView,
    ModalNavigation,
    ViewBackground
  },

  data () {
    return {
      data: [
        {
          data: [
            {
              title: 'CryptoRekt',
              subtitle: '@cr',
              leftIcon: { name: 'person-circle', color: '#a7fb00', size: 40 },
              navigate: () => {
                this.navigation.navigate('contact')
              }
            },
            {
              title: 'Michael',
              subtitle: '@michael',
              leftIcon: { name: 'person-circle', color: '#eaee18', size: 40 },
              navigate: () => {
                this.navigation.navigate('contact')
              }
            },
            {
              title: 'sandersvoice',
              subtitle: '@sandersvoice',
              leftIcon: { name: 'person-circle', color: '#3b28f3', size: 40 },
              navigate: () => {
                this.navigation.navigate('contact')
              }
            },
            {
              title: 'Sunerok',
              subtitle: '@justinvendetta',
              leftIcon: { name: 'person-circle', color: '#00ffb2', size: 40 },
              navigate: () => {
                this.navigation.navigate('contact')
              }
            },
            {
              title: 'Swen van Zanten',
              subtitle: '@swenvanzanten',
              leftIcon: { name: 'person-circle', color: '#c807a9', size: 40 },
              navigate: () => {
                this.navigation.navigate('contact')
              }
            }
          ]
        }
      ]
    }
  }
}
</script>
