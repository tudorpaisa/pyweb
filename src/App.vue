<template>
  <div id='app'>
    <Nav></Nav>
    <router-view />
  </div>
</template>

<script>
import axios from 'axios'

import Nav from './components/Nav'

axios.defaults.baseURL = 'http://' + window.location.hostname + ':3000/'

export default {
  name: 'App',
  components: {
    Nav: Nav
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
