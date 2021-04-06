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
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: isDarkScheme ? 'black' : '#ffffff',
      borderRadius: 10,
      width: '100%',
      minHeight: 50,
      paddingVertical: 10,
      paddingHorizontal: 15,
      shadowColor: isDarkScheme ? 'black' : '#c0c0ff',
      shadowRadius: 3,
      shadowOpacity: 0.5,
      shadowOffset: { width: 3, height: 3 },
      elevation: 10,
      marginBottom: 10
    },

    name: {
      fontWeight: 'bold',
      color: isDarkScheme ? '#f744e4' : '#b00dfa'
    },

    value: {
      fontSize: 23,
      color: isDarkScheme ? '#dadada' : 'black'
    }
  }
}
</script>
