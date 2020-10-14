<template>
  <view-background no-padding>
    <safe-area-view :style="styles.container">

      <view :style="styles.pinContainer">
        <text :style="styles.title">Enter your PIN</text>

        <icon name="finger-print" v-if="help" />

        <view :style="styles.digitDotsContainer">
          <view
            v-for="(index, i) in pin"
            :key="i"
            :style="{ paddingLeft: i === 0 ? 0 : 10 }"
          >
            <view v-if="index !== undefined" :style="styles.digitDotFilled" />
            <view v-else :style="styles.digitDot" />
          </view>
        </view>
      </view>

      <view :style="styles.keyboardContainer">

        <view
          v-for="(characters, i) in keyboardCharacters"
          :key="i"
          :style="styles.keyboardRow"
        >
          <touchable-opacity
            v-for="character in characters"
            :key="character"
            :style="styles.keyboardKey"
            :on-press="() => keyDown(character)"
          >
            <icon v-if="character === 'auth'" name="finger-print" />
            <icon v-else-if="character === 'del'" name="backspace" />
            <text v-else :style="styles.keyboardCharater">{{ character }}</text>
          </touchable-opacity>
        </view>

      </view>

    </safe-area-view>
  </view-background>
</template>

<script>
import { mapActions } from 'vuex'
import { SafeAreaView } from 'react-native-safe-area-context'

const AUTH_CHARACTER = 'auth'
const DEL_CHARACTER = 'del'

export default {
  components: { SafeAreaView },

  data () {
    return {
      pinLength: 4,
      pin: [],

      help: false,

      keyboardCharacters: [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [AUTH_CHARACTER, 0, DEL_CHARACTER]
      ]
    }
  },

  computed: {
    digits () {
      return Array(this.pinLength)
    },

    styles () {
      return stylesStore(this.isDarkScheme)
    }
  },

  created () {
    this.pin = Array(this.pinLength)
  },

  methods: {
    ...mapActions(['updateIsAuthenticated']),

    keyDown (charater) {
      const index = Object.keys(this.pin).length

      if (DEL_CHARACTER === charater) {
        delete this.pin[index - 1]
        this.$forceUpdate()
        return
      }

      if (AUTH_CHARACTER === charater) {
        return
      }

      if (index >= this.pinLength) {
        return
      }

      this.pin[index] = charater
      this.$forceUpdate()

      if (this.pinLength === this.pin.filter(v => v !== undefined).length) {
        this.authenticate()
      }
    },

    authenticate () {
      if (this.pin.join('') === '0123') {
        this.updateIsAuthenticated(true)
      } else {
        alert('The correct PIN is 0123 :)')

        this.pin = Array(4)
      }
    }
  }
}

const stylesStore = (isDarkScheme) => {
  return {
    container: {
      padding: 30,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },

    pinContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },

    title: {
      fontWeight: '600',
      fontSize: 18,
      color: isDarkScheme ? 'white' : 'black'
    },

    digitDotsContainer: {
      flexDirection: 'row',
      margin: 20
    },

    digitDotFilled: {
      backgroundColor: isDarkScheme ? '#6d6de3' : '#1e1e4d',
      width: 20,
      height: 20,
      borderRadius: 10
    },

    digitDot: {
      backgroundColor: isDarkScheme ? '#b95c8b' : '#931A5A',
      width: 20,
      height: 20,
      borderRadius: 10
    },

    keyboardContainer: {
      flex: 1,
      width: '100%',
      maxWidth: 300,
      marginHorizontal: 50
    },

    keyboardRow: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },

    keyboardKey: {
      flex: 0.3,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: isDarkScheme ? '#2b2e33' : '#ffffff',
      height: '80%',
      borderRadius: 300
    },

    keyboardCharater: {
      fontWeight: '600',
      fontSize: 18,
      color: isDarkScheme ? 'white' : 'black'
    }
  }
}
</script>
