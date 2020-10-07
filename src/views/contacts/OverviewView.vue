<template>
  <view-background no-padding>
    <modal-navigation title="Contacts" has-close-button @on-dismiss="navigation.goBack()"/>
    <table-view :sections="data"/>
  </view-background>
</template>

<script>
import ViewBackground from '@/components/ViewBackground'
import ModalNavigation from '@/components/ModalNavigation'
import TableView from '@/components/TableView'

export default {
  name: 'OverviewView',

  components: {
    TableView,
    ModalNavigation,
    ViewBackground
  },

  data () {
    return {
      data: []
    }
  }
}
</script>
