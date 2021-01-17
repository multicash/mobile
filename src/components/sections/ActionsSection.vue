<template>
  <view-section title="Actions">
    <view :style="styles.actions">
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
    </view>

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
