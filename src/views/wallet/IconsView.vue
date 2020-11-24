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
        :data="icons"
        :keyExtractor="(item, index) => item + index"
        :renderItem="(item) => renderItem(item)"
        :numColumns="4"
        :columnWrapperStyle="styles.columnWrapper"
      />
    </view-background>
  </view>
</template>

<script>
import WalletIcons from '@/support/walletIcons'
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
      this.route.params.resolve(item)
      this.navigation.goBack()
    }
  }
}

const stylesStore = (isDarkScheme) => {
  return {
    flatList: {
      paddingVertical: 5,
      paddingHorizontal: 5
    },

    columnWrapper: {
      justifyContent: 'space-between'
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
