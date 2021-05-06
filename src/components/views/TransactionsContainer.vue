<template>
  <view>
    <template v-if="transactions.length > 0">
      <view
        v-for="transaction in transactions"
        :key="JSON.stringify(transaction)"
      >
        <touchable-opacity
          :style="styles.item"
          :active-opacity="0.6"
          :on-press="() => $emit('on-press', transaction)"
        >
          <view :style="styles.itemAvatar">
            <icon
              v-if="transaction.icon"
              :name="transaction.icon"
              :color="transaction.color"
              :size="40"
            />
            <wallet-icon
              v-if="transaction.avatar"
              :icon="transaction.avatar"
              :size="40"
            />
          </view>
          <view :style="styles.itemTextContainer">
            <text
              :style="styles.itemTitle"
              :numberOfLines="1"
              ellipsizeMode="middle"
            >
              {{ transaction.title }}
            </text>
            <text :style="styles.itemSubtitle">{{ transaction.subtitle }}</text>
          </view>
          <money
            :amount="transaction.amount"
            crypto
            currency=""
            :style="styles.itemAmount"
          />
        </touchable-opacity>
      </view>
      <rounded-button
        title="Show more"
        :style="{ marginBottom: 5 }"
      />
    </template>
    <template v-else>
      <view :style="styles.noTransactionsContainer">
        <view :style="{ flexDirection: 'row' }">
          <image :style="styles.noTransactionsImage" :source="require('@/assets/transaction-list.png')"/>
        </view>
        <text :style="styles.noTransactionsLabel">No transactions received yet</text>
      </view>
    </template>
  </view>
</template>

<script>
import { subtitle, text } from '@/core/support/styles'

export default {
  name: 'TransactionsContainer',

  props: {
    transactions: {
      type: Array,
      default () {
        return []
      }
    }
  },

  computed: {
    styles () {
      return stylesStore(this.isDarkScheme)
    }
  }
}

const stylesStore = (isDarkScheme) => {
  return {
    item: {
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 10,
      marginBottom: 5,
      backgroundColor: isDarkScheme ? '#2c2e36' : '#ffffff',
      padding: 15
    },

    itemAvatar: {
      width: 40,
      height: 40,
      marginRight: 10
    },

    itemTextContainer: {
      flex: 1,
      marginRight: 10
    },

    itemTitle: {
      color: text(isDarkScheme).color,
      fontSize: 16,
      marginBottom: 2
    },

    itemSubtitle: {
      color: subtitle(isDarkScheme).color,
      fontSize: 13
    },

    itemAmount: {
      fontWeight: 'bold',
      color: isDarkScheme ? '#b95c8b' : '#931A5A'
    },

    noTransactionsContainer: {
      alignItems: 'center',
      paddingVertical: 20
    },

    noTransactionsImage: {
      width: 60,
      height: 60,
      resizeMode: 'contain',
      marginBottom: 10
    },

    noTransactionsLabel: {
      fontWeight: 'bold',
      fontSize: 16,
      color: subtitle(isDarkScheme).color
    }
  }
}
</script>
