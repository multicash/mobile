<template>
  <safe-area-view
    :style="styles.safeArea"
  >
    <section-list
      :sections="sections"
      :keyExtractor="(item, index) => item + index"
      :renderItem="(item) => renderList(item)"
      :renderSectionHeader="({ section }) => renderSectionHeader(section)"
      :stickySectionHeadersEnabled="false"
      :ListHeaderComponent="renderListHeader"
    />
  </safe-area-view>
</template>

<style>

</style>

<script>
import React from 'react'
import { Text } from 'react-native'
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
    type: {
      type: String,
      default: 'medium'
    }
  },

  computed: {
    styles () {
      return stylesStore(this.isDarkScheme, this.type)
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
        leftAvatar={ item.item.leftAvatar ? { ...item.item.leftAvatar } : undefined }
        chevron
        onPress={ () => this.onPress(item) }
      />)
    },

    renderSectionHeader (section) {
      return (<Text style={this.styles.header}>{ section.title }</Text>)
    },

    renderListHeader () {
      if (this.header) {
        return this.header(this.isDarkScheme)
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

const stylesStore = (isDarkScheme, type) => {
  return {
    safeArea: {
      flex: 1,
      backgroundColor: isDarkScheme ? 'transparent' : '#ededf3'
    },
    header: {
      paddingTop: type === 'small' ? 15 : 30,
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 10,
      ...sectionTitle(isDarkScheme)
    },
    item: {
      borderBottomColor: isDarkScheme ? '#505155' : '#d7d7d7',
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
