<template>
  <view :style="{ flex: 1 }">
    <modal-navigation
      title="Choose a icon"
      has-back-button
      @on-dismiss="navigation.goBack()"
    />
    <view-background no-padding>
      <text>Pick a color</text>
      <view :style="styles.colorsContainer">
        <touchable-opacity
          v-for="color in colors"
          :key="color"
          :style="{ marginRight: 5, backgroundColor: color, borderRadius: 999, width: 40, height: 40 }"
          :active-opacity="0.8"
          :on-press="() => onColorSelect(color)"
        />
      </view>
      <text>Pick an icon</text>
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
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { View, Text, TouchableOpacity } from 'react-native'

export default {
  name: 'IconsView',

  data () {
    return {
      search: '',
      color: 'purple',
      colors: [
        'purple',
        'blue',
        'yellow',
        'green',
        'red'
      ]
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
            <Icon name={item.item} size={50} color={this.color}/>
            <Text style={this.styles.iconText} ellipsizeMode="middle" numberOfLines={1}>{ item.item }</Text>
          </View>
        </TouchableOpacity>
      )
    },

    onColorSelect (color) {
      this.color = color
    },

    onSelect (item) {
      this.route.params.resolve(item)
      this.navigation.goBack()
    }
  }
}

const stylesStore = (isDarkScheme) => {
  return {
    colorsContainer: {
      padding: 10,
      flexDirection: 'row'
    },

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

    iconText: {
      color: isDarkScheme ? '#b3aabe' : '#72677b',
      fontSize: 8
    }
  }
}
</script>
