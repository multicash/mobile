<!--MultiCash Mobile-->
<!--Copyright (C) 2021  Swen van Zanten-->

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
  <modal-view
    title="Account tag"
    has-back-button
    @on-dismiss="navigation.goBack()"
    scrollable
  >
    <keyboard-avoiding-view
      :keyboard-vertical-offset="291"
    >
      <view :style="styles.exampleContainer">

        <view :style="styles.fromMessage">
          <text :style="styles.messageText">Hé send me your MCX tag, so I can pay you back for the coffee ☕️</text>
        </view>

        <view :style="{ alignItems: 'flex-end' }">
          <view :style="styles.toMessage">
            <text :style="styles.messageText">Ah sweet! My accounts tag is <text :style="{ fontWeight: 'bold' }">@MyAccount</text></text>
          </view>
        </view>

      </view>

      <header-view
        title="Account Tag"
      />

      <input-description label="Come up with an unique tag for your new account. This allows you to share your tag with other MCX owners and let them send funds to your tag. A tag can be compared with a credit card number or something similar." />

      <view :style="styles.tagContainer">
        <view :style="styles.tagInputContainer">
          <text :style="styles.tagAt">@</text>
          <rounded-text-input
            title="Your account tag"
            :style="styles.tagInput"
            :value="tag"
            @input="onTagInput"
            placeholder="MyUniqueTag"
            autoCapitalize="none"
            :autoCorrect="false"
          />
        </view>
      </view>

      <view v-if="(tag !== '' && $v.$invalid) || fetchingTagStatus">
        <spacer  />
        <notification
          type="danger"
          icon="alert-circle"
          :label="invalidTagLabel"
          :loading="fetchingTagStatus"
        />
      </view>
      <view v-else-if="tag !== '' && !fetchingTagStatus">
        <spacer />
        <notification
          :loading="false"
          type="success"
          icon="checkmark-circle"
          label="Your chosen tag is perfect!"
        />
        <rounded-button
          v-if="!$v.$invalid"
          title="Proceed"
          @on-press="proceed"
        />
      </view>
    </keyboard-avoiding-view>
  </modal-view>
</template>

<script>
import { Platform } from 'react-native'
import { required, minLength, maxLength, helpers } from 'vuelidate/lib/validators'

export default {
  name: 'TagView',

  data () {
    return {
      tag: '',
      touchMap: null,
      fetchingTagStatus: false
    }
  },

  computed: {
    styles () {
      return styleStore(this.isDarkScheme)
    },

    behavior () {
      return Platform.OS === 'ios' ? 'padding' : null
    },

    isUnique () {
      return false
    },

    invalidTagLabel () {
      if (!this.$v.tag.minLength) {
        return 'The chosen tag is too short, we need minimal 6 characters.'
      }

      if (!this.$v.tag.maxLength) {
        return 'The chosen tag is too long, a tag cannot contain more than 25 charaters.'
      }

      if (!this.$v.tag.alphaNum) {
        return 'The chosen tag can only contain letters, numbers and \'_\''
      }

      return 'The chosen tag is containing an unknown error'
    }
  },

  validations: {
    tag: {
      required,
      minLength: minLength(6),
      maxLength: maxLength(25),
      characters: helpers.regex('characters', /^[a-zA-Z0-9_]*$/)
    }
  },

  methods: {
    proceed () {
      const params = {
        ...this.route.params,
        tag: `@${this.tag}`
      }

      this.navigation.navigate('preferences', params)
    },

    onTagInput ($event) {
      this.tag = $event
      this.delayTouch(this.$v.tag)
    },

    delayTouch ($v) {
      this.fetchingTagStatus = true
      $v.$reset()
      if (this.touchMap) {
        clearTimeout(this.touchMap)
      }
      this.touchMap = setTimeout(() => {
        this.fetchingTagStatus = false
      }, 500)
    }
  }
}

const styleStore = (isDarkScheme) => {
  return {
    exampleContainer: {
      width: '100%',
      flex: 1,
      justifyContent: 'center',
      transform: [
        { scale: 0.85 }
      ]
    },

    fromMessage: {
      backgroundColor: '#04c140',
      borderRadius: 20,
      borderTopLeftRadius: 5,
      marginBottom: 20,
      padding: 15,
      maxWidth: '75%',
      float: 'left',
      shadowColor: '#00ff4f',
      shadowRadius: 40,
      shadowOpacity: isDarkScheme ? 0.25 : 0.5
    },

    toMessage: {
      backgroundColor: '#0f76e3',
      borderRadius: 20,
      borderTopRightRadius: 5,
      marginBottom: 20,
      padding: 15,
      maxWidth: '75%',
      shadowColor: '#007aff',
      shadowRadius: 40,
      shadowOpacity: isDarkScheme ? 0.25 : 0.5
    },

    messageText: {
      color: 'white',
      fontSize: 16
    },

    tagContainer: {
      backgroundColor: isDarkScheme ? 'black' : 'white',
      borderRadius: 10
    },

    tagInputContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    },

    tagAt: {
      paddingHorizontal: 15,
      fontSize: 20,
      fontWeight: Platform.OS === 'ios' ? '600' : 'bold',
      color: isDarkScheme ? 'white' : 'black'
    },

    tagInput: {
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
      flex: 1
    }
  }
}
</script>
