<template>
  <image-background
    class="background"
    :source="require('./../assets/background.png')"
    resizeMode="stretch"
  >
    <image-background
      :source="require('./../assets/background-colors.png')"
      resizeMode="stretch"
    >
      <status-bar bar-style="dark-content" />
      <safe-area-view class="safe-area">
        <view class="container">
          <section>
            <text class="title">Hi friend!</text>
            <text class="subtitle">Today is a beautiful day to use MultiCash!</text>
          </section>
          <actions-section/>
          <wallets-section/>
        </view>
      </safe-area-view>
    </image-background>
  </image-background>
</template>

<style>
  .background {
    background-color: white;
  }

  .safe-area {
    background-color: transparent;
    height: 100%;
  }

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

  export default {
    name: 'HomeView',
    components: {WalletsSection, ActionsSection, Section}
  }
</script>
