<template>
  <app-navigation/>
</template>

<script>
import {
  createAppContainer,
  createStackNavigator,
} from "vue-native-router";

import HomeView from './views/HomeView'
import PayView from './views/PayView'

const StackNavigator = createStackNavigator(
  {
    Home: HomeView,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppNavigation = createAppContainer(StackNavigator);

export default {
  name: 'App',
  components: { AppNavigation },
}
</script>
