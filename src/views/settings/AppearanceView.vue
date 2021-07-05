<template>
  <modal-view
    title="Appearance"
    no-padding
    has-back-button
    @on-dismiss="navigation.goBack()"
  >
    <table-view :sections="sections" type="small"/>
  </modal-view>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'AppearanceView',

  computed: {
    ...mapGetters(['applicationOptions']),

    styles () {
      return styleStore(this.isDarkScheme)
    },

    sections () {
      return [
        {
          data: [
            {
              title: 'System Default',
              checked: this.applicationOptions.appearance === null,
              noChevron: true,
              onPress: () => {
                this.setAppearance(null)
              }
            },
            {
              title: 'Light',
              checked: this.applicationOptions.appearance === 'light',
              noChevron: true,
              onPress: () => {
                this.setAppearance('light')
              }
            },
            {
              title: 'Dark',
              checked: this.applicationOptions.appearance === 'dark',
              noChevron: true,
              onPress: () => {
                this.setAppearance('dark')
              }
            }
          ]
        }
      ]
    }
  },

  methods: {
    ...mapActions(['setAppearance'])
  }
}

const styleStore = (isDarkScheme) => {
  return {}
}
</script>
