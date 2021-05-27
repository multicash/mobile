<template>
  <view :style="styles.container">
    <text v-if="title" :style="styles.title">{{ title }}</text>
    <text-input
      ref="input"
      :onChangeText="onChangeText"
      :onEndEditing="onEndEditing"
      :onFocus="onFocus"
      :value="value"
      :style="styles.textInput"
      :placeholder="placeholder"
      :placeholder-text-color="isDarkScheme ? '#848484' : '#7f7f7f'"
      :secureTextEntry="secureTextEntry"
      :multiline="multiline"
      :autoCapitalize="autoCapitalize"
      :autoCompleteType="autoCompleteType"
      :autoCorrect="autoCorrect"
    />
  </view>
</template>

<script>
export default {
  name: 'RoundedTextInput',

  props: {
    value: {
      type: String,
      default: null
    },

    secureTextEntry: {
      type: Boolean,
      default: false
    },

    placeholder: {
      type: String,
      default: ''
    },

    title: {
      type: String,
      default: null
    },

    multiline: {
      type: Boolean,
      default: false
    },

    autoCapitalize: {
      type: String,
      default: 'sentences'
    },
    autoCompleteType: {
      type: String,
      default: 'off'
    },
    autoCorrect: {
      type: Boolean,
      default: true
    },
    fontSize: {
      type: Number,
      default: 18
    },
    focus: {
      type: Function,
      default () {
        this.$refs.input.focus()
      }
    },
    onFocus: {
      type: Function,
      default () {}
    }
  },

  computed: {
    styles () {
      return stylesStore(this.isDarkScheme, this.multiline, this.fontSize)
    }
  },

  methods: {
    onChangeText (text) {
      this.$emit('input', text)
    },

    onEndEditing (event) {
      this.$emit('on-end-editing', event)
    }
  }
}

const stylesStore = (isDarkScheme, multiline, fontSize) => {
  return {
    container: {
      backgroundColor: isDarkScheme ? '#2e2e36' : '#d0d7e1',
      borderRadius: 5,
      width: '100%',
      height: multiline ? undefined : 60,
      padding: 10,
      justifyContent: 'center'
    },

    title: {
      color: isDarkScheme ? '#B95C8B' : '#931A5A',
      fontSize: 12,
      marginBottom: 2
    },

    textInput: {
      color: isDarkScheme ? 'white' : 'black',
      width: '100%',
      height: multiline ? 100 : undefined,
      fontSize: fontSize
    }
  }
}
</script>
