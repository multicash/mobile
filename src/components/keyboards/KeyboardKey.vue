<template>
  <touchable-opacity
    :style="styles.keyboardKey"
    :on-press="() => $emit('keydown')"
  >
    <slot>
      <text :style="styles.keyboardCharater">{{ label }}</text>
    </slot>
  </touchable-opacity>
</template>

<script>
export default {
  name: 'KeyboardKey',

  props: ['label'],

  computed: {
    styles () {
      return stylesStore(this.isDarkScheme)
    }
  }
}

const stylesStore = (isDarkScheme) => {
  return {
    keyboardKey: {
      flex: 0.3,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: isDarkScheme ? '#3b3f46' : '#ffffff',
      height: '80%',
      borderRadius: 100
    },

    keyboardCharater: {
      fontWeight: '600',
      fontSize: 24,
      color: isDarkScheme ? 'white' : 'black'
    }
  }
}
</script>
