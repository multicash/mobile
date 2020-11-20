<template>
  <view :style="{ flex: 1 }">
    <modal-navigation
      title="Contact"
      has-back-button
      @on-dismiss="navigation.goBack()"
    >
      <round-button
        slot="right"
      >
        <icon name="checkmark"/>
      </round-button>
    </modal-navigation>
    <view-background>
      <selector name="Icon" @on-press="selectIcon">
        <view slot="value" :style="styles.iconContainer">
          <icon :name="icon.name" :color="icon.color" :size="40" />
          <spacer />
          <text :style="styles.iconText">{{ icon.name }}</text>
        </view>
      </selector>

      <spacer />

      <rounded-text-input title="Name" placeholder="Martin" :value="name" @input="name = $event"/>

      <spacer />

      <rounded-text-input title="Tag/Address" placeholder="@lutherKing" :value="tag" @input="tag = $event"/>
    </view-background>
  </view>
</template>

<script>
export default {
  name: 'ContactView',

  data () {
    return {
      name: '',
      tag: '',
      icon: {
        name: 'person-circle',
        color: 'grey'
      }
    }
  },

  computed: {
    styles () {
      return stylesStore(this.isDarkScheme)
    }
  },

  created () {
    if (this.route.params && this.route.params.contact) {
      this.name = this.route.params.contact.name
      this.tag = this.route.params.contact.tag
      this.icon.name = this.route.params.contact.icon.name
      this.icon.color = this.route.params.contact.icon.color
    }
  },

  methods: {
    selectIcon () {
      this.navigation.navigate('icons', {
        goBack: true,
        resolve: (value) => {
          this.icon.name = value.item
        }
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
