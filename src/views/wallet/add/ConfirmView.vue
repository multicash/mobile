<template>
  <view :style="{ flex: 1 }">
    <modal-navigation
      title="Confirm"
      has-back-button
      @on-dismiss="navigation.goBack()"
    />
    <view-background :style="{ paddingBottom: 50 }" scrollable>

      <view :style="styles.headerContainer">
        <view :style="{ flexDirection: 'row' }">
          <image :style="styles.headerImage1" :source="require('@/assets/confirm-check-list.png')"/>
          <image :style="styles.headerImage2" :source="require('@/assets/confirm-check.png')"/>
        </view>
        <text :style="styles.headerTitle">Almost Done!</text>
      </view>

      <switch-notification
        :value.sync="term1"
        @input="term1 = $event"
        label="I understand that the only way to restore this wallet is by providing the restore key. If the restore key is lost or differs from this setup there is no way to recover it. I'm solely responsible for the restore key."
        type="primary"
      />

      <switch-notification
        :value.sync="term2"
        @input="term2 = $event"
        label="I understand that this wallets restore key is stored securely on this device. And that this restore key isn't covered by automatic backup."
        type="primary"
      />

      <switch-notification
        :value.sync="term3"
        @input="term3 = $event"
        label="I have read, understood, and agree to the Terms of Use."
      />

      <link-button title="Terms of Use" :style="{ marginTop: -10 }"/>

      <spacer :style="{ flex: 1 }" />

      <rounded-button
        v-if="term1 && term2 && term3"
        title="Proceed"
        @on-press="navigation.navigate('create')"
      />

    </view-background>
  </view>
</template>

<script>
export default {
  name: 'ConfirmView',

  data () {
    return {
      term1: false,
      term2: false,
      term3: false
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
    headerContainer: {
      marginHorizontal: 20,
      marginBottom: 30,
      justifyContent: 'center',
      alignItems: 'center'
    },

    headerTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      color: isDarkScheme ? 'white' : 'black',
      marginVertical: 5
    },

    headerImage1: {
      width: 100,
      height: 100,
      resizeMode: 'contain',
      marginTop: 20,
      marginBottom: 5
    },

    headerImage2: {
      zIndex: 10,
      width: 80,
      height: 80,
      marginTop: 10,
      marginLeft: -40,
      resizeMode: 'contain'
    }
  }
}
</script>
