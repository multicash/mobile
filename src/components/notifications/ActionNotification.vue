<template>
  <view :style="styles.actionNotification">
    <view :style="{ flex: 1 }">
      <text :style="styles.actionNotificationTitle">{{ title }}</text>
      <text :style="styles.actionNotificationText">{{ label }}</text>
    </view>

    <spacer />

    <slot></slot>
  </view>
</template>

<script>
export default {
  name: 'ActionNotification',

  props: {
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
      actionNotification: {
        backgroundColor: isDarkScheme ? '#191919' : 'white'
      },
      actionNotificationTitle: {
        color: isDarkScheme ? '#d4d4d4' : '#3b3b3b'
      },
      actionNotificationText: {
        color: isDarkScheme ? '#d4d4d4' : '#3b3b3b'
      }
    },

    primary: {
      actionNotification: {
        backgroundColor: '#3298dc'
      },
      actionNotificationTitle: {
        color: 'white'
      },
      actionNotificationText: {
        color: 'white'
      }
    },

    success: {
      actionNotification: {
        backgroundColor: '#48c774'
      },
      actionNotificationTitle: {
        color: 'white'
      },
      actionNotificationText: {
        color: 'white'
      }
    },

    warning: {
      actionNotification: {
        backgroundColor: '#ffdd57'
      },
      actionNotificationTitle: {
        color: '#3b3b3b'
      },
      actionNotificationText: {
        color: '#3b3b3b'
      }
    },

    danger: {
      actionNotification: {
        backgroundColor: '#f14668'
      },
      actionNotificationTitle: {
        color: 'white'
      },
      actionNotificationText: {
        color: 'white'
      }
    }

  }

  return {
    actionNotification: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: typeColors[type].actionNotification.backgroundColor,
      borderRadius: 10,
      padding: 15,
      marginBottom: 10
    },

    actionNotificationTitle: {
      color: typeColors[type].actionNotificationTitle.color,
      fontWeight: 'bold'
    },

    actionNotificationText: {
      color: typeColors[type].actionNotificationText.color
    }
  }
}
</script>
