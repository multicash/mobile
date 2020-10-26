<template>
  <touchable-without-feedback :onPress="() => $emit('input', !value)">
    <view :style="styles.switchNotification">
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
  </touchable-without-feedback>
</template>

<script>
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
    }
  },

  computed: {
    styles () {
      return stylesStore(this.isDarkScheme, this.type)
    }
  }
}

const stylesStore = (isDarkScheme, type) => {
  const typeColors = {

    default: {
      switchNotification: {
        backgroundColor: isDarkScheme ? 'black' : 'white'
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
        backgroundColor: '#3298dc'
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
        backgroundColor: '#48c774'
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
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: typeColors[type].switchNotification.backgroundColor,
      borderRadius: 10,
      padding: 15,
      marginBottom: 10
    },

    switchNotificationText: {
      color: typeColors[type].switchNotificationText.color,
      flex: 1
    },

    switchTrackColor: typeColors[type].switchTrackColor
  }
}
</script>
