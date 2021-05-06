<template>
  <view-section title="Actions">
    <scroll-view
      :style="{ margin: -30 }"
      horizontal
      :showsHorizontalScrollIndicator="false"
    >
      <view
        :style="styles.actions"
      >
        <action-button
          title="Pay"
          :icon="require('@/assets/send.png')"
          @on-press="$emit('pay')"
        />

        <spacer/>

        <action-button
          title="Receive"
          :icon="require('@/assets/receive.png')"
          @on-press="$emit('receive')"
        />

        <spacer/>

        <action-button
          title="Top up"
          :icon="require('@/assets/add-dollar.png')"
          type="success"
          @on-press="$emit('topUp')"
        />

        <spacer/>

        <action-button
          title="Invest"
          :icon="require('@/assets/duration-finance.png')"
          type="warning"
          @on-press="$emit('invest')"
        />

        <spacer/>

        <action-button
          title="Change"
          :icon="require('@/assets/dollar-bitcoin-exchange.png')"
          type="secondary"
          @on-press="$emit('change')"
        />
      </view>
    </scroll-view>

    <spacer />

    <view :style="styles.actionsSecondary">
      <secondary-round-button
        icon="qr-code"
        title=""
        @on-press="$emit('scanQR')"
      />

      <spacer/>

      <secondary-round-button
        @on-press="$emit('scanNFC')"
      >
        <image
          :style="styles.nfcImage"
          :source="require('@/assets/nfc-logo.png')"
        />
      </secondary-round-button>
    </view>
  </view-section>
</template>

<script>
export default {
  name: 'ActionsSection',

  computed: {
    styles () {
      return stylesStore(this.isDarkScheme)
    }
  }
}

const stylesStore = (isDarkScheme) => {
  return {
    actions: {
      margin: 30,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between'
    },

    actionsSecondary: {
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row'
    },

    nfcImage: {
      width: 25,
      height: 25,
      resizeMode: 'contain',
      tintColor: isDarkScheme ? 'white' : 'black'
    }
  }
}
</script>
