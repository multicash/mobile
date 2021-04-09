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
      :stickySectionHeadersEnabled="false"
      :ListHeaderComponent="renderListHeader"
      :ListFooterComponent="renderListFooter"
    />
  </view>
</template>

<script>
import React from 'react'
import { View, Text } from 'react-native'
import { ListItem, Avatar, Icon } from 'react-native-elements'
import { text, subtitle, sectionTitle } from '@/core/support/styles'

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
      return (
        <ListItem
          style={item.section.data.length - 1 === item.index ? undefined : this.styles.item}
          containerStyle={this.styles.itemContent}
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

      if (item.item.onPress) {
        item.item.onPress()
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
      color: subtitle(isDarkScheme).color,
      fontSize: 14,
      paddingTop: 2
    },
    itemLeftIcon: {
      color: isDarkScheme ? '#e033eb' : '#b00dfa'
    },
    itemRightIcon: {
      color: isDarkScheme ? 'white' : 'black'
    },
    checkedChevron: {
      color: isDarkScheme ? '#e033eb' : '#b00dfa'
    }
  }
}
</script>
