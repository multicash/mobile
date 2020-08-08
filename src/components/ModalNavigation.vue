<template>
  <view :style="styles.modalNavigation">
    <view>
      <text v-if="title" :style="styles.modalNavigationTitle">
        {{ title }}
      </text>
    </view>
    <round-button
      v-if="hasCloseButton"
      @on-press="$emit('on-dismiss')"
    >
      <icon name="close" />
    </round-button>
  </view>
</template>

<script>
import RoundButton from './RoundButton'
import { text } from './../styles'

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
      default: true
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
