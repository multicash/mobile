<template>
  <view :style="styles.section">
    <text
      v-if="title !== ''"
      :style="styles.sectionTitle"
    >
      {{ title }}
    </text>
    <slot />
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
      display: 'flex',
      marginVertical: 20
    },
    sectionTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 10,
      color: titleColor || isDarkScheme ? 'white' : 'black'
    }
  }
}
</script>
