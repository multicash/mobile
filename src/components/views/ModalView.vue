<template>
  <view :style="{ flex: 1 }">
    <slot name="header">
      <modal-navigation
        v-if="header"
        :has-back-button="hasBackButton"
        :has-close-button="hasCloseButton"
        :title="title"
        @on-dismiss="$emit('on-dismiss')"
      />
    </slot>
    <view-background
      ref="scrollView"
      :scrollable="scrollable"
      :no-padding="noPadding"
    >
      <slot/>
    </view-background>
  </view>
</template>

<script>
export default {
  name: 'ModalView',

  props: {
    title: {
      type: String,
      default: ''
    },

    hasBackButton: {
      type: Boolean,
      default: false
    },

    hasCloseButton: {
      type: Boolean,
      default: false
    },

    header: {
      type: Boolean,
      default: true
    },

    scrollable: {
      type: Boolean,
      default: false
    },

    noPadding: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    styles () {
      return styleStore(this.isDarkScheme)
    }
  },

  methods: {
    scrollTo (options) {
      if (this.$refs.scrollView) {
        this.$refs.scrollView.scrollTo(options)
      }
    }
  }
}

const styleStore = (isDarkScheme) => {
  return {}
}
</script>
