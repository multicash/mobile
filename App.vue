<template>
  <image-background
    class="background"
    :source="require('./img/background.png')"
    resizeMode="stretch"
  >
    <image-background
      :source="require('./img/background-colors.png')"
      resizeMode="stretch"
    >
      <SafeAreaView class="safe-area">
        <View class="container">
          <view class="section">
            <text class="title">Hi friend!</text>
            <text class="subtitle">Today is a beautiful day to use MultiCash!</text>
          </view>
          <view class="section">
            <text class="section-title">Actions</text>
            <view class="actions">
              <touchable-opacity class="action-button" :active-opacity="0.6">
                <text>Send</text>
              </touchable-opacity>
              <view class="spacer"/>
              <touchable-opacity class="action-button" :active-opacity="0.6">
                <text>Receive</text>
              </touchable-opacity>
            </view>
          </view>
          <view class="section flex-grow">
            <text class="section-title">Wallets</text>
            <scroll-view :style="{overflow: 'visible'}" horizontal :showsHorizontalScrollIndicator="false">
              <view class="wallets">
                <touchable-opacity class="wallet-button" :active-opacity="0.6">
                  <text>Main Account</text>
                </touchable-opacity>
                <view class="spacer"/>
                <touchable-opacity class="wallet-button" :active-opacity="0.6">
                  <text>Saving Account</text>
                </touchable-opacity>
              </view>
            </scroll-view>
          </view>
        </View>
      </SafeAreaView>
    </image-background>
  </image-background>
</template>

<script>
export default {
	name: 'App',

	data () {
		return {}
	}
}
</script>

<style>
.background {
  background-color: white;
}

.safe-area {
  background-color: transparent;
  height: 100%;
}

.navigation-header {
  display: flex;
  justify-content: flex-end;
}

.container {
  display: flex;
  background-color: transparent;
  padding: 30px;
  height: 100%;
}

.flex-grow {
  flex: 1;
}

.title {
  font-size: 30;
}

.subtitle {
  font-size: 16;
}

.section-title {
  font-size: 16;
  font-weight: 600;
  margin-bottom: 10px;
}

.section {
  display: flex;
  margin-vertical: 20px;
}

.actions {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.action-button {
  display: flex;
  flex: 1;
  height: 150px;
  background-color: white;
  border-radius: 20px;
  shadow-color: black;
  shadow-radius: 15px;
  shadow-opacity: 0.05;
  justify-content: center;
  align-items: center;
}

.spacer {
  width: 20px;
}

.wallets {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex: 1;
}

.wallet-button {
  display: flex;
  flex: 1;
  height: 100%;
  min-width: 250px;
  background-color: white;
  border-radius: 20px;
  shadow-color: black;
  shadow-radius: 15px;
  shadow-opacity: 0.05;
  padding: 20px;
}
</style>
