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
    title="App Icon"
    has-back-button
    @on-dismiss="navigation.goBack()"
    no-padding
  >
    <table-view :sections="sections" type="small" />
  </modal-view>
</template>

<script>
import { NativeModules, StyleSheet } from 'react-native'

export default {
  name: 'AppIconView',

  data () {
    return {
      icons: [
        {
          name: 'Default',
          value: null,
          source: require('./../../../ios/MultiCash/Icons/Default.png')
        },
        {
          name: 'Colors',
          value: 'Colors',
          source: require('./../../../ios/MultiCash/Icons/Colors.png')
        },
        {
          name: 'Stripes Inverted',
          value: 'StripesInverted',
          source: require('./../../../ios/MultiCash/Icons/StripesInverted.png')
        },
        {
          name: 'Stripes',
          value: 'Stripes',
          source: require('./../../../ios/MultiCash/Icons/Stripes.png')
        },
        {
          name: 'X1 Chip',
          value: 'X1Chip',
          source: require('./../../../ios/MultiCash/Icons/X1Chip.png')
        },
        {
          name: 'X1X Chip',
          value: 'X1XChip',
          source: require('./../../../ios/MultiCash/Icons/X1XChip.png')
        },
        {
          name: 'Black on Black',
          value: 'Bob',
          source: require('./../../../ios/MultiCash/Icons/Bob.png')
        },
        {
          name: 'White on White',
          value: 'Wow',
          source: require('./../../../ios/MultiCash/Icons/Wow.png')
        },
        {
          name: 'Gold',
          value: 'Gold',
          source: require('./../../../ios/MultiCash/Icons/Gold.png')
        },
        {
          name: 'Silver',
          value: 'Silver',
          source: require('./../../../ios/MultiCash/Icons/Silver.png')
        }
      ]
    }
  },

  computed: {
    styles () {
      return styleStore(this.isDarkScheme)
    },

    sections () {
      return [
        {
          data: this.icons.map(icon => {
            return {
              title: icon.name,
              leftAvatar: {
                source: icon.source,
                size: 60,
                style: {
                  borderColor: '#898989',
                  borderWidth: StyleSheet.hairlineWidth,
                  borderRadius: 16,
                  overflow: 'hidden'
                }
              },
              onPress: () => {
                NativeModules.UIApplicationModule.setAlternateIconName(icon.value)
              }
            }
          })
        }
      ]
    }
  }
}

const styleStore = (isDarkScheme) => {
  return {}
}
</script>
