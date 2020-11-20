<template>
  <view :style="{ flex: 1 }">
    <modal-navigation
      has-back-button
      title="Export wallet"
      @on-dismiss="navigation.goBack()"
    />
    <view-background :style="{ paddingBottom: 50 }" scrollable>
      <header-view
        title="Export your wallet"
        subtitle="In order to recover your wallet you need the restore key. Use the export option to conveniently store your wallet in a save place."
        :image-background="require('@/assets/export.png')"
        :image-foreground="require('@/assets/open-box.png')"
      />

      <switch-notification
        :value.sync="encryptFile"
        @input="encryptFile = $event"
        label="File encryption"
        type="warning"
      />
      <switch-notification
        :value.sync="acceptedTerm"
        @input="acceptedTerm = $event"
        label="I understand what I'm doing and want to export my wallet into a separate file."
        type="warning"
      />

      <view :style="styles.exportButtonPlaceholder" />

    </view-background>

    <rounded-button
      v-if="acceptedTerm"
      :style="styles.exportButton"
      title="Export"
    />
  </view>
</template>

<script>
export default {
  name: 'ExportView',

  data () {
    return {
      encryptFile: false,
      acceptedTerm: false
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
    exportButtonPlaceholder: {
      height: 120
    },

    exportButton: {
      position: 'absolute',
      bottom: 30,
      left: 20,
      right: 20
    }
  }
}
</script>
