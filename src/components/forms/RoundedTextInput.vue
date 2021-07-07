<!--MultiCash Mobile-->
<!--Copyright (C) 2021  MultiCash Developers-->

<!--This program is free software: you can redistribute it and/or modify-->
<!--it under the terms of the GNU General Public License as published by-->
<!--the Free Software Foundation, either version 3 of the License, or-->
<!--any later version.-->

<!--This program is distributed in the hope that it will be useful,-->
<!--but WITHOUT ANY WARRANTY; without even the implied warranty of-->
<!--MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the-->
<!--GNU General Public License for more details.-->

<!--You should have received a copy of the GNU General Public License-->
<!--along with this program.  If not, see <https://www.gnu.org/licenses/>.-->

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
      :keyboardType="keyboardType"
      :auto-focus="autoFocus"
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
    keyboardType: {
      type: String,
      default: 'default'
    },
    fontSize: {
      type: Number,
      default: 18
    },
    autoFocus: {
      type: Boolean,
      default: false
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
      borderRadius: 10,
      flexGrow: 1,
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
