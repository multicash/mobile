<template>
  <pressable :onPress="onPress">
    <view :style="styles.switchNotification">
      <view :style="styles.switchNotificationDefaultContainer">
        <switch
          :value="value"
          :onChange="() => $emit('input', !value)"
          :trackColor="styles.switchTrackColor"
          thumbColor="#ffffff"
          :ios_backgroundColor="styles.switchTrackColor[false]"
        />
        <spacer />
        <text :style="styles.switchNotificationText">{{ label }}</text>
      </view>
      <view
        v-if="(value || alwaysShowExtra) && $slots.default"
        :style="styles.switchNotificationExtraContainer"
      >
        <slot></slot>
      </view>
    </view>
  </pressable>
</template>

<script>
import ReactNativeHapticFeedback from 'react-native-haptic-feedback'

export default {
  name: 'SwitchNotification',

  props: {
    value: {
      type: Boolean,
      default: false
    },

    label: {
      type: String,
      default: ''
    },

    type: {
      type: String,
      default: 'default'
    },

    alwaysShowExtra: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    styles () {
      return stylesStore(this.isDarkScheme, this.type)
    }
  },

  methods: {
    onPress () {
      ReactNativeHapticFeedback.trigger('impactLight', {
        enableVibrateFallback: true,
        ignoreAndroidSystemSettings: false
      })

      this.$emit('input', !this.value)
    }
  }
}

const stylesStore = (isDarkScheme, type) => {
  const typeColors = {

    default: {
      switchNotification: {
        backgroundColor: isDarkScheme ? '#191919' : 'white'
      },
      switchNotificationText: {
        color: isDarkScheme ? '#d4d4d4' : '#3b3b3b'
      },
      switchTrackColor: {
        false: isDarkScheme ? '#3e3e3e' : '#dddddd',
        true: '#32b680'
      }
    },

    primary: {
      switchNotification: {
        backgroundColor: '#00b0ee'
      },
      switchNotificationText: {
        color: 'white'
      },
      switchTrackColor: {
        false: '#bce2ff',
        true: '#06d27e'
      }
    },

    success: {
      switchNotification: {
        backgroundColor: '#00ae5a'
      },
      switchNotificationText: {
        color: 'white'
      },
      switchTrackColor: {
        false: '#9fe5c1',
        true: '#00ff99'
      }
    },

    warning: {
      switchNotification: {
        backgroundColor: '#ffdd57'
      },
      switchNotificationText: {
        color: '#3b3b3b'
      },
      switchTrackColor: {
        false: '#e5d59f',
        true: '#32b680'
      }
    },

    danger: {
      switchNotification: {
        backgroundColor: '#f14668'
      },
      switchNotificationText: {
        color: 'white'
      },
      switchTrackColor: {
        false: '#ffb6c4',
        true: '#32b680'
      }
    }

  }

  return {
    switchNotification: {
      backgroundColor: typeColors[type].switchNotification.backgroundColor,
      borderRadius: 10,
      padding: 15,
      marginBottom: 10
    },

    switchNotificationDefaultContainer: {
      flexDirection: 'row',
      alignItems: 'center'
    },

    switchNotificationExtraContainer: {
      marginTop: 10
    },

    switchNotificationText: {
      color: typeColors[type].switchNotificationText.color,
      flex: 1
    },

    switchTrackColor: typeColors[type].switchTrackColor
  }
}
</script>
