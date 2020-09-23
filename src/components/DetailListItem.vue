<template>
  <view :style="styles.detailListItemContainer">
    <view :style="styles.detailListItemLeftContainer">
      <slot name="icon">
        <icon v-if="icon" :name="icon" :style="styles.icon" size="14"/>
      </slot>
      <slot name="title">
        <text :style="styles.title">{{ title }}</text>
      </slot>
    </view>
    <slot name="value">
      <text :style="styles.value">{{ value }}</text>
    </slot>
  </view>
</template>

<script>
export default {
  name: 'DetailListItem',

  props: {
    icon: {
      type: String,
      default: null
    },
    title: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
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
    detailListItemContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 5
    },

    detailListItemLeftContainer: {
      flexDirection: 'row',
      alignItems: 'center'
    },

    icon: {
      width: 14,
      height: 14,
      marginRight: 5,
      color: isDarkScheme ? 'white' : 'black'
    },

    title: {
      fontSize: 11,
      color: isDarkScheme ? 'white' : 'black'
    },

    value: {
      fontSize: 13,
      fontWeight: '600',
      color: isDarkScheme ? '#8374b2' : '#4d3f70'
    }
  }
}
</script>
