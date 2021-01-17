<template>
  <view :style="{ flex: 1 }">
    <modal-navigation
      title="Choose a icon"
      has-back-button
      @on-dismiss="navigation.goBack()"
    />
    <view-background no-padding>
      <view
        :style="{ margin: 10, marginBottom: 0 }"
      >
        <rounded-text-input
          placeholder="Search an icon"
          :value="search"
          @input="search = $event"
        />
      </view>
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
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { View, Text, TouchableOpacity } from 'react-native'

export default {
  name: 'IconsView',

  data () {
    return {
      search: ''
    }
  },

  computed: {
    icons () {
      return Object
        .keys(Icon.getRawGlyphMap())
        .filter(icon => {
          return icon.includes(this.search.toLowerCase())
        })
        .filter(icon => {
          return (
            !icon.endsWith('-outline') &&
            !icon.endsWith('-sharp') &&
            !icon.startsWith('ios-') &&
            !icon.startsWith('md-')
          )
        })
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
            <Icon name={item.item} size={50} color={this.isDarkScheme ? 'white' : 'black'}/>
            <Text style={this.styles.iconText} ellipsizeMode="middle" numberOfLines={1}>{ item.item }</Text>
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

    iconText: {
      color: isDarkScheme ? '#b3aabe' : '#72677b',
      fontSize: 8
    }
  }
}
</script>
