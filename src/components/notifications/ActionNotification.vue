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
        backgroundColor: '#00b0ee'
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
        backgroundColor: '#00ae5a'
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
