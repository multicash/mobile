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
  <view :style="{ flex: 1 }">
    <modal-navigation
      title="Choose a icon"
      has-back-button
      @on-dismiss="navigation.goBack()"
    />
    <view-background no-padding>
      <flat-list
        :style="styles.flatList"
        :contentContainerStyle="styles.contentContainer"
        :data="icons"
        :keyExtractor="(item, index) => item + index"
        :renderItem="(item) => renderItem(item)"
        :numColumns="4"
      />
    </view-background>
  </view>
</template>

<script>
import WalletIcons from '@/core/assets/walletIcons'
import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

export default {
  name: 'IconsView',

  computed: {
    icons () {
      const icons = []

      for (const property in WalletIcons) {
        icons.push({
          name: property,
          icon: WalletIcons[property]
        })
      }

      return icons
    },

    styles () {
      return stylesStore(this.isDarkScheme)
    }
  },

  methods: {
    renderItem (item) {
      return (
        <TouchableOpacity
          style={this.styles.iconContainer}
          onPress={() => this.onSelect(item)}
          activeOpacity={0.8}
        >
          <View style={this.styles.iconView}>
            <Image source={item.item.icon()} style={this.styles.icon}/>
            <Text style={this.styles.iconText} ellipsizeMode="middle" numberOfLines={1}>{ item.item.name }</Text>
          </View>
        </TouchableOpacity>
      )
    },

    onSelect (item) {
      this.navigation.navigate(this.route.params.returnView, { icon: item.item.icon.name })
    }
  }
}

const stylesStore = (isDarkScheme) => {
  return {
    flatList: {
      paddingTop: 5,
      paddingHorizontal: 5
    },

    contentContainer: {
      paddingBottom: 30
    },

    iconContainer: {
      flex: 0.25
    },

    iconView: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: isDarkScheme ? 'black' : 'white',
      borderRadius: 10,
      padding: 5,
      margin: 5
    },

    icon: {
      margin: 5,
      width: 60,
      height: 60
    },

    iconText: {
      color: isDarkScheme ? '#b3aabe' : '#72677b',
      fontSize: 8
    }
  }
}
</script>
