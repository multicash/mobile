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
      :keyExtractor="item => `draggable-item-${item.identifier}`"
      :onDragEnd="({ data }) => setState({ data })"
    />
  </view-background>
</template>

<script>
import React from 'react'
import { TouchableWithoutFeedback } from 'react-native'
import { ListItem, Avatar } from 'react-native-elements'
import DraggableFlatList from 'react-native-draggable-flatlist'
import { mapActions, mapGetters } from 'vuex'
import { resolveIcon } from '@/support/walletIcons'
import { text, subtitle } from '@/styles'

export default {
  name: 'OrderWalletsView',

  components: { DraggableFlatList },

  computed: {
    ...mapGetters(['getDefaultWallet']),

    walletsList () {
      return this.orderedWallets.map(wallet => {
        return {
          identifier: wallet.identifier,
          title: wallet.name,
          subtitle: this.formatAmountFromSatoshis(wallet.info.balance.totalAmount, 'en'),
          leftAvatar: { source: resolveIcon(wallet.icon), size: 40, rounded: false },
          isDefault: this.getDefaultWallet === wallet.identifier
        }
      })
    },

    styles () {
      return stylesStore(this.isDarkScheme)
    }
  },

  methods: {
    ...mapActions(['updateWalletOrder', 'setDefaultWallet']),

    renderList ({ item, index, drag, isActive }) {
      return (
        <TouchableWithoutFeedback
          onPressIn={drag}
          onLongPress={() => this.setDefaultWallet(item.identifier)}
        >
          <ListItem
            style={this.orderedWallets.length - 1 === index ? undefined : this.styles.item}
            containerStyle={isActive ? this.styles.itemContentDragged : this.styles.itemContent}
            key={index}
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

            {item.isDefault &&
            <ListItem.Subtitle style={this.styles.defaultLabel}>default</ListItem.Subtitle>
            }

            <ListItem.Chevron
              color={this.styles.checkedChevron.color}
              name="menu"
              type="ionicon"
              size={25}
            />
          </ListItem>
        </TouchableWithoutFeedback>
      )
    },

    setState (state) {
      this.updateWalletOrder(state.data.map(wallet => wallet.identifier))
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
    defaultLabel: {
      color: 'purple',
      fontSize: 10,
      padding: 2.5,
      borderWidth: 1,
      borderColor: 'purple',
      borderRadius: 5
    },
    checkedChevron: {
      color: isDarkScheme ? '#a96cf5' : '#7200ff'
    }
  }
}
</script>
