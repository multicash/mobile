<template>
  <styled-view-background class="container">
    <view class="navigation">
      <round-button @on-press="settingsModalVisible = true" transparent-shadow>
        <icon name="cog" />
      </round-button>
    </view>
    <view class="content">
      <view-section class="logo-section">
        <image
          :source="require('../assets/logo-light.png')"
          class="logo-image"
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

<style>
  .container {
    display: flex;
    flex-direction: row;
  }

  .navigation {
    flex: 0;
    align-items: flex-end;
    padding-top: 10px;
    padding-left: 30px;
    padding-right: 30px;
    margin-bottom: -10px;
  }

  .content {
    display: flex;
    background-color: transparent;
    padding-left: 30px;
    padding-right: 30px;
    padding-bottom: 10px;
    padding-top: 0px;
    flex: 1;
  }

  .logo-section {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .logo-image {
    resize-mode: contain;
    height: 60px;
    width: 100%;
  }
</style>

<script>
import ViewSection from './../components/ViewSection'
import WalletsSection from './../components/WalletsSection'
import ActionsSection from './../components/ActionsSection'
import StyledViewBackground from '../components/StyledViewBackground'
import RoundButton from '../components/RoundButton'
import SettingsView from './SettingsView'
import ViewModal from '../components/ViewModal'

export default {
  name: 'HomeView',

  components: { ViewModal, SettingsView, RoundButton, StyledViewBackground, WalletsSection, ActionsSection, ViewSection },

  data () {
    return {
      settingsModalVisible: false
    }
  }
}
</script>
