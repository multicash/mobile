<template>
  <touchable-opacity
    :on-press="() => $emit('on-press')"
    :style="styles.container"
    :active-opacity="0.6"
  >
    <view>
      <text :style="styles.name">{{ name }}</text>
      <slot name="value">
        <text :style="styles.value">{{ value }}</text>
      </slot>
    </view>
    <icon name="chevron-down-outline" />
  </touchable-opacity>
</template>

<script>
import Icon from '@/components/icons/Icon'

export default {
  name: 'Selector',

  components: { Icon },

  props: {
    name: {
      type: String,
      required: true
    },
    value: {
      type: String
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
    container: {
      flexDirection: 'row',
      flexGrow: 1,
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: isDarkScheme ? 'black' : 'white',
      borderRadius: 10,
      paddingVertical: 7.5,
      paddingHorizontal: 15,
      marginBottom: 10
    },

    name: {
      fontWeight: 'bold',
      color: isDarkScheme ? '#B95C8B' : '#931A5A'
    },

    value: {
      fontSize: 23,
      color: isDarkScheme ? '#dadada' : 'black'
    }
  }
}
</script>
