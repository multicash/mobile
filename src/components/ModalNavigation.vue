<template>
  <view :style="styles.modalNavigation">
    <round-button
      v-if="hasCloseButton || hasBackButton"
      @on-press="$emit('on-dismiss')"
    >
      <icon v-if="hasCloseButton" name="close" />
      <icon v-if="hasBackButton" name="chevron-back" />
    </round-button>
    <view>
      <text v-if="title" :style="styles.modalNavigationTitle">
        {{ title }}
      </text>
    </view>
  </view>
</template>

<script>
import RoundButton from '@/components/RoundButton'
import { text } from '@/styles'

export default {
  name: 'ModalNavigation',

  components: { RoundButton },

  props: {
    title: {
      type: String,
      default: null
    },
    hasCloseButton: {
      type: Boolean,
      default: false
    },
    hasBackButton: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    styles () {
      return stylesStore(this.isDarkScheme)
    }
  }
}

const stylesStore = (isDarkScheme) => {
  return {
    modalNavigation: {
      backgroundColor: isDarkScheme ? '#2c2e36' : '#ededf3',
      display: 'flex',
      padding: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },

    modalNavigationTitle: {
      color: text(isDarkScheme).color,
      fontWeight: 'bold',
      fontSize: 25
    }
  }
}
</script>
