<template>
  <styled-view-background class="container">
    <view class="navigation">
      <round-button @on-press="settingsModalVisible = true">
        <icon name="cog" />
      </round-button>
    </view>
    <view class="content">
      <view-section>
        <text class="title">Hi friend!</text>
        <text class="subtitle">Today is a beautiful day to use MultiCash!</text>
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

  .title {
    font-size: 30px;
  }

  .subtitle {
    font-size: 16px;
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
