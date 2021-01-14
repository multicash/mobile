<template>
  <view :style="styles.section">
    <view>
      <slot />
    </view>
    <view :style="styles.sectionHeader">
      <slot name="title">
        <text
          v-if="title !== ''"
          :style="styles.sectionTitle"
        >
          {{ title }}
        </text>
      </slot>
      <slot name="options" />
    </view>
  </view>
</template>

<script>
export default {
  name: 'ViewSection',

  props: {
    title: {
      type: String,
      default: ''
    },

    titleColor: {
      type: String,
      default: null
    }
  },

  computed: {
    styles () {
      return stylesStore(this.isDarkScheme, this.titleColor)
    }
  }
}

const stylesStore = (isDarkScheme, titleColor) => {
  return {
    section: {
      marginVertical: 20,
      flexDirection: 'column-reverse'
    },

    sectionHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 10
    },

    sectionTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      color: titleColor || isDarkScheme ? 'white' : 'black'
    }
  }
}
</script>
