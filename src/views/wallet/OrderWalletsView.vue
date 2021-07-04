<!--MultiCash Mobile-->
<!--Copyright (C) 2021  Swen van Zanten-->

<!--This program is free software: you can redistribute it and/or modify-->
<!--it under the terms of the GNU General Public License as published by-->
<!--the Free Software Foundation, either version 3 of the License, or-->
<!--any later version.-->

<!--This program is distributed in the hope that it will be useful,-->
<!--but WITHOUT ANY WARRANTY; without even the implied warranty of-->
<!--MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the-->
<!--GNU General Public License for more details.-->

<!--You should have received a copy of the GNU General Public License-->
<!--along with this program.  If not, see <https://www.gnu.org/licenses/>.-->

<template>
  <view-background no-padding>
    <modal-navigation
      title="Order accounts"
      has-close-button
      @on-dismiss="navigation.goBack()"
    />
    <header-view
      :style="{ marginTop: 10 }"
      title="Order accounts"
      subtitle="Rearrange your accounts in your desired order and select your default account."
      :image-background="require('@/assets/sorting.png')"
      :image-foreground="require('@/assets/wallet.png')"
    />
    <view :style="styles.defaultContainer">
      <action-notification
        title="Default account"
        label="Select your default account by pressing longer on one of the accounts below"
      >
        <text :style="styles.defaultContainerWallet">{{ defaultWalletName }}</text>
      </action-notification>
    </view>
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
import { StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { ListItem, Avatar } from 'react-native-elements'
import DraggableFlatList from 'react-native-draggable-flatlist'
import { mapActions, mapGetters } from 'vuex'
import { resolveIcon } from '@/core/assets/walletIcons'
import { text, subtitle } from '@/core/support/styles'

export default {
  name: 'OrderWalletsView',

  components: { DraggableFlatList },

  computed: {
    ...mapGetters(['getDefaultWallet']),

    defaultWalletName () {
      if (this.getDefaultWallet) {
        return this.$walletManager.getWallet(this.getDefaultWallet).name
      }

      return 'No wallet selected'
    },

    walletsList () {
      return this.orderedWallets.map(wallet => {
        return {
          identifier: wallet.identifier,
          title: wallet.name,
          subtitle: this.formatAmountFromSatoshis(wallet.totalAmount, wallet.coin),
          leftAvatar: { source: resolveIcon(wallet.icon), size: 40 },
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
              rounded={item.leftAvatar.rounded || false}
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
      paddingTop: 10
    },
    item: {
      borderBottomColor: isDarkScheme ? '#505155' : '#dfe1ee',
      borderBottomWidth: StyleSheet.hairlineWidth
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
      color: isDarkScheme ? '#B95C8B' : '#931A5A',
      fontSize: 10,
      padding: 2.5,
      borderWidth: 1,
      borderColor: isDarkScheme ? '#B95C8B' : '#931A5A',
      borderRadius: 5
    },
    checkedChevron: {
      color: isDarkScheme ? '#B95C8B' : '#931A5A'
    },
    defaultContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 10,
      paddingTop: 10
    },
    defaultContainerWallet: {
      color: isDarkScheme ? '#0bbcda' : '#00ade7',
      fontWeight: '700',
      fontSize: 15
    }
  }
}
</script>
