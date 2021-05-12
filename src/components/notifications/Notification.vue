<template>
  <touchable-opacity
    :on-press="() => $emit('on-press')"
    :active-opacity="isPressable ? 0.6 : 1"
    :style="styles.notification"
  >
    <icon v-if="!loading" :name="icon" :color="styles.notificationIcon.color" :size="30"/>
    <spacer v-if="!loading" />
    <view v-if="!loading" :style="{ flex: 1 }">
      <text v-if="title !== ''" :style="styles.notificationTitle">{{ title }}</text>
      <text :style="styles.notificationText">{{ label }}</text>
    </view>
    <view v-if="loading" :style="styles.loadingContainer">
      <activity-indicator />
    </view>
  </touchable-opacity>
</template>

<script>
import { Platform } from 'react-native'

export default {
  name: 'Notification',

  props: {
    icon: {
      type: String,
      default: 'information-circle'
    },

    title: {
      type: String,
      default: ''
    },

    label: {
      type: String,
      default: ''
    },

    type: {
      type: String,
      default: 'default'
    },

    loading: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    styles () {
      return stylesStore(this.isDarkScheme, this.loading ? 'default' : this.type)
    },

    isPressable () {
      return !!this._events['on-press']
    }
  }
}

const stylesStore = (isDarkScheme, type) => {
  const typeColors = {

    default: {
      notification: {
        backgroundColor: isDarkScheme ? '#191919' : 'white'
      },
      notificationIcon: {
        color: isDarkScheme ? '#d4d4d4' : '#3b3b3b'
      },
      notificationTitle: {
        color: isDarkScheme ? '#d4d4d4' : '#3b3b3b'
      },
      notificationText: {
        color: isDarkScheme ? '#d4d4d4' : '#3b3b3b'
      }
    },

    primary: {
      notification: {
        backgroundColor: '#00b0ee'
      },
      notificationIcon: {
        color: 'white'
      },
      notificationTitle: {
        color: 'white'
      },
      notificationText: {
        color: 'white'
      }
    },

    success: {
      notification: {
        backgroundColor: '#00ae5a'
      },
      notificationIcon: {
        color: 'white'
      },
      notificationTitle: {
        color: 'white'
      },
      notificationText: {
        color: 'white'
      }
    },

    warning: {
      notification: {
        backgroundColor: '#ffdd57'
      },
      notificationIcon: {
        color: '#3b3b3b'
      },
      notificationTitle: {
        color: '#3b3b3b'
      },
      notificationText: {
        color: '#3b3b3b'
      }
    },

    danger: {
      notification: {
        backgroundColor: '#f14668'
      },
      notificationIcon: {
        color: 'white'
      },
      notificationTitle: {
        color: 'white'
      },
      notificationText: {
        color: 'white'
      }
    }

  }

  return {
    notification: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: typeColors[type].notification.backgroundColor,
      borderRadius: 10,
      padding: 15,
      marginBottom: 10
    },

    notificationIcon: {
      color: typeColors[type].notificationIcon.color
    },

    notificationTitle: {
      color: typeColors[type].notificationTitle.color,
      fontWeight: 'bold'
    },

    notificationText: {
      color: typeColors[type].notificationText.color,
      fontWeight: Platform.OS === 'ios' ? '600' : 'bold'
    },

    loadingContainer: {
      flex: 1,
      justifyContent: 'center'
    }
  }
}
</script>
