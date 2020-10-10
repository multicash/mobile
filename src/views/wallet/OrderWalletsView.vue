<template>
  <view-background no-padding>
    <modal-navigation
      title="Order wallets"
      has-close-button
      @on-dismiss="navigation.goBack()"
    />
    <draggable-flat-list
      :style="styles.container"
      :data="walletsList"
      :renderItem="renderList"
      :keyExtractor="(item, index) => `draggable-item-${index}`"
      :onDragEnd="({ data }) => setState({ data })"
    />
  </view-background>
</template>

<script>
import React from 'react'
import { ListItem, Avatar } from 'react-native-elements'
import DraggableFlatList from 'react-native-draggable-flatlist'
import { resolveIcon } from '@/support/walletIcons'
import { text, subtitle } from '@/styles'

export default {
  name: 'OrderWalletsView',

  components: { DraggableFlatList },

  data () {
    return {
      wallets: []
    }
  },

  computed: {
    walletsList () {
      return this.wallets.map(wallet => {
        return {
          title: wallet.name,
          subtitle: this.getFormattedCrypto(wallet.amount, 'en', 'MCX'),
          leftAvatar: { source: resolveIcon(wallet.icon), size: 40, rounded: false }
        }
      })
    },

    styles () {
      return stylesStore(this.isDarkScheme)
    }
  },

  created () {
    this.wallets = this.route.params.wallets
  },

  methods: {
    renderList ({ item, index, drag, isActive }) {
      return (
        <ListItem
          style={this.wallets.length - 1 === index ? undefined : this.styles.item}
          containerStyle={isActive ? this.styles.itemContentDragged : this.styles.itemContent}
          key={index}
          onLongPress={drag}
        >
          <Avatar
            source={item.leftAvatar.source}
            size={item.leftAvatar.size || 40}
            rounded={item.leftAvatar.rounded || true}
            placeholderStyle={{ backgroundColor: 'transparent' }}
          />

          <ListItem.Content>
            <ListItem.Title style={this.styles.itemTitle}>{item.title || undefined}</ListItem.Title>
            <ListItem.Subtitle style={this.styles.itemSubtitle}>{item.subtitle || undefined}</ListItem.Subtitle>
          </ListItem.Content>

          <ListItem.Chevron
            color={this.styles.checkedChevron.color}
            name="menu"
            type="ionicon"
            size={25}
            onPress={drag}
          />
        </ListItem>
      )
    },

    setState (nice) {
      console.log(nice)
    }
  }
}

const stylesStore = (isDarkScheme) => {
  return {
    container: {
      paddingTop: 50
    },
    item: {
      borderBottomColor: isDarkScheme ? '#505155' : '#dfe1ee',
      borderBottomWidth: 0.75
    },
    itemContent: {
      backgroundColor: isDarkScheme ? '#2c2e36' : '#ffffff'
    },
    itemContentDragged: {
      shadowColor: isDarkScheme ? 'black' : '#c0c0ff',
      shadowRadius: 10,
      shadowOpacity: 0.5,
      elevation: 10,
      backgroundColor: isDarkScheme ? '#555767' : '#f3f3f3'
    },
    itemTitle: {
      color: text(isDarkScheme).color
    },
    itemSubtitle: {
      color: subtitle(isDarkScheme).color
    },
    checkedChevron: {
      color: isDarkScheme ? '#a96cf5' : '#7200ff'
    }
  }
}
</script>
