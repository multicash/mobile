<template>
  <view :style="styles.container">
    <text v-if="title" :style="styles.title">{{ title }}</text>
    <text-input
      :style="styles.textInput"
      :placeholder="placeholder"
      :placeholder-text-color="isDarkScheme ? '#606060' : '#7f7f7f'"
    />
  </view>
</template>

<script>
export default {
  name: 'RoundedTextInput',

  props: {
    placeholder: {
      type: String,
      default: ''
    },

    title: {
      type: String,
      default: null
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
      backgroundColor: isDarkScheme ? '#2e2e36' : '#d0d7e1',
      borderRadius: 5,
      width: '100%',
      height: 50,
      padding: 10,
      justifyContent: 'center'
    },

    title: {
      color: isDarkScheme ? '#6b47e1' : '#4c00ff',
      fontSize: 10,
      marginBottom: 2
    },

    textInput: {
      color: isDarkScheme ? 'white' : 'black',
      width: '100%'
    }
  }
}
</script>
