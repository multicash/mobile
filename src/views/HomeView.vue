<template>
  <styled-view-background :style="styles.container">
    <view :style="styles.navigation">
      <round-button :style="{ marginRight: 10 }" transparent-shadow>
        <icon name="people"/>
      </round-button>
      <round-button @on-press="settingsModalVisible = true" transparent-shadow>
        <icon name="toggle"/>
      </round-button>
    </view>
    <view :style="styles.content">
      <view-section :style="styles.logoSection">
        <image
          :source="require('../assets/logo-light.png')"
          :style="styles.logoImage"
        />
      </view-section>
      <actions-section/>
      <wallets-section/>
    </view>

    <view-modal :visible.sync="settingsModalVisible">
      <settings-view/>
    </view-modal>
  </styled-view-background>
</template>

<script>
import ViewSection from '@/components/ViewSection'
import WalletsSection from '@/components/WalletsSection'
import ActionsSection from '@/components/ActionsSection'
import StyledViewBackground from '@/components/StyledViewBackground'
import RoundButton from '@/components/RoundButton'
import SettingsView from '@/views/SettingsView'
import ViewModal from '@/components/ViewModal'

export default {
  name: 'HomeView',

  components: {
    ViewModal,
    SettingsView,
    RoundButton,
    StyledViewBackground,
    WalletsSection,
    ActionsSection,
    ViewSection
  },

  data () {
    return {
      settingsModalVisible: false
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
    container: {
      display: 'flex',
      flexDirection: 'row'
    },

    navigation: {
      flex: 0,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      paddingTop: 10,
      paddingLeft: 30,
      paddingRight: 30,
      marginBottom: -10
    },

    content: {
      display: 'flex',
      backgroundColor: 'transparent',
      paddingLeft: 30,
      paddingRight: 30,
      paddingBottom: 10,
      paddingTop: 0,
      flex: 1
    },

    logoSection: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },

    logoImage: {
      resizeMode: 'contain',
      height: 50,
      marginVertical: 5,
      width: '100%'
    }
  }
}

</script>
