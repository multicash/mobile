<template>
  <view :style="styles.notification">
    <icon :name="icon" :color="styles.notificationIcon.color" :size="30"/>
    <spacer />
    <view :style="{ flex: 1 }">
      <text v-if="title !== ''" :style="styles.notificationTitle">{{ title }}</text>
      <text :style="styles.notificationText">{{ label }}</text>
    </view>
  </view>
</template>

<script>
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
        backgroundColor: '#3298dc'
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
        backgroundColor: '#48c774'
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
      color: typeColors[type].notificationText.color
    }
  }
}
</script>
