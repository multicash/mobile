<template>
  <view :style="styles.container">
    <section-list
      :sections="sections"
      :keyExtractor="(item, index) => item + index"
      :renderItem="(item) => renderList(item)"
      :renderSectionHeader="({ section }) => renderSectionHeader(section)"
      :stickySectionHeadersEnabled="false"
      :ListHeaderComponent="renderListHeader"
      :ListFooterComponent="renderListFooter"
    />
  </view>
</template>

<script>
import React from 'react'
import { View, Text } from 'react-native'
import { ListItem } from 'react-native-elements'
import { text, subtitle, sectionTitle } from '@/styles'

console.log(React.version)

export default {
  name: 'TableView',

  props: {
    sections: {
      type: Array,
      required: true
    },
    header: {
      type: Function,
      default: undefined
    },
    footer: {
      type: Function,
      default () {
        return (<View style={this.styles.footer}/>)
      }
    },
    type: {
      type: String,
      default: 'medium'
    },
    grouped: {
      type: Boolean,
      default: true
    }
  },

  computed: {
    styles () {
      return stylesStore(this.isDarkScheme, this.type, this.grouped)
    }
  },

  methods: {
    renderList (item) {
      return (<ListItem
        style={item.section.data.length - 1 === item.index ? undefined : this.styles.item}
        containerStyle={this.styles.itemContent}
        titleStyle={this.styles.itemTitle}
        subtitleStyle={this.styles.itemSubtitle}
        key={item.index}
        title={ item.item.title || undefined }
        subtitle={ item.item.subtitle || undefined }
        leftIcon={ item.item.leftIcon ? { type: 'ionicon', color: this.styles.itemLeftIcon.color, ...item.item.leftIcon } : undefined }
        rightIcon={ item.item.rightIcon ? { type: 'ionicon', color: this.styles.itemRightIcon.color, ...item.item.rightIcon } : undefined }
        leftAvatar={ item.item.leftAvatar ? { placeholderStyle: { backgroundColor: 'transparent' }, ...item.item.leftAvatar } : undefined }
        chevron
        onPress={ () => this.onPress(item) }
      />)
    },

    renderSectionHeader (section) {
      return this.grouped || section.title ? (<Text style={this.styles.header}>{ section.title }</Text>) : null
    },

    renderListHeader () {
      if (this.header) {
        return this.header(this.isDarkScheme)
      }

      return null
    },

    renderListFooter () {
      if (this.footer) {
        return this.footer(this.isDarkScheme)
      }

      return null
    },

    onPress (item) {
      this.$emit('on-press', item)

      if (item.item.navigate) {
        item.item.navigate()
      }
    }
  }
}

const stylesStore = (isDarkScheme, type, grouped) => {
  return {
    container: {
      flex: 1,
      backgroundColor: grouped ? 'transparent' : (isDarkScheme ? '#2c2e36' : '#ffffff')
    },
    header: {
      backgroundColor: grouped ? 'transparent' : (isDarkScheme ? '#222429' : '#ededf3'),
      paddingTop: grouped ? (type === 'small' ? 15 : 30) : 5,
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: grouped ? 10 : 5,
      ...sectionTitle(isDarkScheme)
    },
    footer: {
      height: 50
    },
    item: {
      borderBottomColor: isDarkScheme ? '#505155' : '#dfe1ee',
      borderBottomWidth: 0.75
    },
    itemContent: {
      backgroundColor: isDarkScheme ? '#2c2e36' : '#ffffff'
    },
    itemTitle: {
      color: text(isDarkScheme).color
    },
    itemSubtitle: {
      color: subtitle(isDarkScheme).color
    },
    itemLeftIcon: {
      color: isDarkScheme ? '#a96cf5' : '#7200ff'
    },
    itemRightIcon: {
      color: isDarkScheme ? 'white' : 'black'
    }
  }
}
</script>
