<template>
  <view :style="styles.container">
    <slot
      v-if="sections.length === 0"
      name="empty"
      :style="styles.emptyContainer"
    />
    <section-list
      v-if="sections.length > 0"
      :sections="sections"
      :keyExtractor="(item, index) => item + index"
      :renderItem="(item) => renderList(item)"
      :renderSectionHeader="({ section }) => renderSectionHeader(section)"
      :renderSectionFooter="({ section }) => renderSectionFooter(section)"
      :stickySectionHeadersEnabled="false"
      :ListHeaderComponent="renderListHeader"
      :ListFooterComponent="renderListFooter"
    />
  </view>
</template>

<script>
import React from 'react'
import { View, Text, Platform, StyleSheet } from 'react-native'
import { ListItem, Avatar, Icon } from 'react-native-elements'
import { sectionTitle, sectionFooter, tableSubtitle } from '@/core/support/styles'

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
    },
    subtitle: {
      type: String,
      default: null
    }
  },

  computed: {
    styles () {
      return stylesStore(this.isDarkScheme, this.type, this.grouped, this.subtitle)
    }
  },

  methods: {
    renderList (item) {
      return (
        <ListItem
          style={this.getListItemStyle(item)}
          containerStyle={this.styles.itemContent}
          underlayColor="#CED6E8FF"
          key={item.index}
          onPress={ () => this.onPress(item) }
        >
          {item.item.leftAvatar &&
          <Avatar
            source={item.item.leftAvatar.source}
            size={item.item.leftAvatar.size || 40}
            rounded={item.item.leftAvatar.rounded || false}
            placeholderStyle={{ backgroundColor: 'transparent' }}
          />
          }

          {item.item.leftIcon &&
          <Icon
            type={item.item.leftIcon.type || 'ionicon'}
            name={item.item.leftIcon.name}
            color={item.item.leftIcon.color || this.styles.itemLeftIcon.color}
            size={item.item.leftIcon.size || 24}
          />
          }

          <ListItem.Content>
            {item.item.title &&
            <ListItem.Title style={this.styles.itemTitle}>{item.item.title || undefined}</ListItem.Title>
            }
            {item.item.subtitle &&
            <ListItem.Subtitle style={this.styles.itemSubtitle}>{item.item.subtitle || undefined}</ListItem.Subtitle>
            }
          </ListItem.Content>

          {item.item.rightIcon &&
          <Icon
            type={item.item.rightIcon.type || 'ionicon'}
            name={item.item.rightIcon.name}
            color={item.item.rightIcon.color || this.styles.itemRightIcon.color}
            size={item.item.rightIcon.size || 24}
          />
          }

          {item.item.onPress !== undefined && !item.item.noChevron &&
          <ListItem.Chevron
            type="ionicon"
            name="chevron-forward"
            size={20}
          />
          }

          {item.item.checked &&
          <ListItem.Chevron
            color={this.styles.checkedChevron.color}
            name="checkmark-circle"
            type="ionicon"
            size={25}
          />
          }
        </ListItem>
      )
    },

    renderSectionHeader (section) {
      return this.grouped || section.title ? (<Text style={this.styles.header}>{ section.title }</Text>) : null
    },

    renderSectionFooter (section) {
      return this.grouped && section.footer ? (<Text style={this.styles.sectionFooter}>{ section.footer }</Text>) : null
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

    getListItemStyle (item) {
      if (!this.grouped) {
        return this.styles.item
      }

      if (item.section.data.length === 1) {
        return {
          ...this.styles.item,
          ...this.styles.itemFirst,
          ...this.styles.itemLast
        }
      }

      if (item.section.data.length - 1 === item.index) {
        return this.styles.itemLast
      }

      if (item.index === 0) {
        return this.styles.itemFirst
      }

      return this.styles.item
    },

    onPress (item) {
      this.$emit('on-press', item)

      if (item.item.onPress) {
        item.item.onPress()
      }
    }
  }
}

const stylesStore = (isDarkScheme, type, grouped, subtitle) => {
  return {
    container: {
      flex: 1,
      backgroundColor: grouped ? 'transparent' : (isDarkScheme ? '#2c2e36' : '#ffffff')
    },
    header: {
      backgroundColor: grouped ? 'transparent' : (isDarkScheme ? '#222429' : '#ededf3'),
      paddingTop: grouped ? (type === 'small' ? 15 : 30) : 5,
      paddingLeft: 15,
      paddingRight: 15,
      paddingBottom: grouped ? 10 : 5,
      ...sectionTitle(isDarkScheme)
    },
    sectionFooter: {
      backgroundColor: grouped ? 'transparent' : (isDarkScheme ? '#222429' : '#ededf3'),
      paddingTop: 5,
      paddingLeft: 15,
      paddingRight: 15,
      paddingBottom: grouped ? 10 : 5,
      ...sectionFooter(isDarkScheme)
    },
    footer: {
      height: 50,
      color: '#ced6e8'
    },
    itemFirst: {
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      overflow: 'hidden',
      marginHorizontal: 15,
      borderBottomColor: isDarkScheme ? '#505155' : '#e7e8f0',
      borderBottomWidth: StyleSheet.hairlineWidth
    },
    itemLast: {
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      overflow: 'hidden',
      marginHorizontal: 15
    },
    item: {
      borderBottomColor: isDarkScheme ? '#505155' : '#e7e8f0',
      borderBottomWidth: StyleSheet.hairlineWidth,
      marginHorizontal: grouped ? 15 : 0
    },
    itemContent: {
      backgroundColor: isDarkScheme ? '#2c2e36' : '#ffffff'
    },
    itemTitle: {
      color: isDarkScheme ? '#aeb0c1' : '#414147',
      fontSize: 18,
      fontWeight: Platform.OS === 'ios' ? '600' : 'bold'
    },
    itemSubtitle: {
      color: isDarkScheme ? '#a0a3bd' : '#75778e',
      fontSize: 14,
      paddingTop: 2,
      ...tableSubtitle(subtitle, isDarkScheme)
    },
    itemLeftIcon: {
      color: isDarkScheme ? '#B95C8B' : '#931A5A'
    },
    itemRightIcon: {
      color: isDarkScheme ? 'white' : 'black'
    },
    checkedChevron: {
      color: isDarkScheme ? '#B95C8B' : '#931A5A'
    }
  }
}
</script>
