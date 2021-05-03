<template>
  <view :style="{ flex: 1 }">
    <modal-navigation
      title="Choose a icon"
      has-back-button
      @on-dismiss="navigation.goBack()"
    />
    <view-background no-padding>
      <text :style="styles.title">Pick a color</text>
      <scroll-view
        :style="styles.colorsContainer"
        :contentContainerStyle="styles.colorsContainerContent"
        horizontal
        :showsHorizontalScrollIndicator="false"
      >
        <touchable-opacity
          v-for="color in colors"
          :key="color"
          :style="{
            marginRight: 10,
            backgroundColor: color,
            borderRadius: 999,
            width: 60,
            height: 60,
            borderWidth: color === currentColor ? 4 : 0,
            borderColor: isDarkScheme ? '#dedede' : '#333333',
          }"
          :active-opacity="0.8"
          :on-press="() => onColorSelect(color)"
        />
      </scroll-view>
      <text :style="styles.title">Pick an icon</text>
      <flat-list
        :style="styles.flatList"
        :contentContainerStyle="styles.contentContainer"
        :data="icons"
        :keyExtractor="(item, index) => item + index"
        :renderItem="(item) => renderItem(item)"
        :numColumns="4"
        :extra-data="currentColor"
      />
    </view-background>
  </view>
</template>

<script>
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { View, Text, TouchableOpacity } from 'react-native'
import { sectionTitle } from '@/core/support/styles'

export default {
  name: 'IconsView',

  data () {
    return {
      search: '',
      currentColor: '#931A5A',
      colors: [
        '#931A5A',
        '#B95C8B',
        '#8757ff',
        '#00B0EE',
        '#00AE5A',
        '#FFDD57',
        '#ff9d57',
        '#F14668'
      ],
      icons: [
        'person',
        'body',
        'man',
        'woman',
        'walk',
        'people',
        'people-circle',
        'chatbubbles',
        'glasses',
        'happy',
        'sad',
        'heart',
        'heart-circle',
        'heart-half',
        'paw',
        'home',
        'planet',
        'rocket',

        'car',
        'bicycle',
        'bus',
        'train',
        'airplane',

        'restaurant',
        'pizza',
        'ice-cream',
        'beer',

        'american-football',

        // 'logo-alipay',
        // 'logo-paypal',
        'logo-amazon',
        'logo-apple',
        'logo-apple-appstore',
        'logo-google',
        'logo-google-playstore',
        'logo-android',
        'logo-playstation',
        'logo-xbox',
        'logo-steam',
        'logo-bitcoin',
        'logo-usd',
        'logo-euro',
        'logo-yen'
      ]
    }
  },

  created () {
    if (this.route.params && this.route.params.contact) {
      this.currentColor = this.route.params.contact.icon.color
    }
  },

  computed: {
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
            <Icon name={item.item} size={50} color={this.currentColor}/>
            <Text style={this.styles.iconText} ellipsizeMode="middle" numberOfLines={1}>{ item.item }</Text>
          </View>
        </TouchableOpacity>
      )
    },

    onColorSelect (color) {
      this.currentColor = color
    },

    onSelect (item) {
      this.navigation.navigate('contact', {
        contact: {
          ...this.route.params.contact,
          icon: {
            name: item.item,
            color: this.currentColor
          }
        }
      })
    }
  }
}

const stylesStore = (isDarkScheme) => {
  return {
    title: {
      paddingTop: 10,
      paddingHorizontal: 10,
      ...sectionTitle(isDarkScheme)
    },

    colorsContainer: {
      height: 100
    },

    colorsContainerContent: {
      paddingVertical: 10,
      paddingLeft: 10
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
