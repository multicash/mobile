<template>
  <styled-view-background>
    <view class="container">
      <section>
        <text class="title">Hi friend!</text>
        <text class="subtitle">Today is a beautiful day to use MultiCash!</text>
      </section>
      <actions-section/>
      <wallets-section/>
    </view>
  </styled-view-background>
</template>

<style>
  .container {
    display: flex;
    background-color: transparent;
    padding: 30px;
    height: 100%;
  }

  .title {
    font-size: 30px;
  }

  .subtitle {
    font-size: 16px;
  }
</style>

<script>
  import Section from './../components/Section'
  import WalletsSection from './../components/WalletsSection'
  import ActionsSection from './../components/ActionsSection'
  import StyledViewBackground from '../components/StyledViewBackground'

  export default {
    name: 'HomeView',
    components: {StyledViewBackground, WalletsSection, ActionsSection, Section}
  }
</script>
