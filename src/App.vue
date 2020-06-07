<template>
  <v-app id='inspire'>
    <v-navigation-drawer v-model='drawer' app clipped>
      <Nav />
    </v-navigation-drawer>
    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click.stop='drawer = !drawer'></v-app-bar-nav-icon>
      <v-toolbar-title>So I have a website now...</v-toolbar-title>
    </v-app-bar>
    <v-content>
      <v-container class='fill-height' fluid>
        <v-row align='center' justify='center'>
          <v-col>
            <router-view />
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Home from './components/Home'
import Nav from './components/Nav'
import Router from './router/index'

import axios from 'axios'

axios.defaults.baseURL = 'http://' + window.location.hostname + ':3000/'

export default {
  name: 'App',

  components: {
    Home,
    Nav,
    Router
  },

  data: () => ({
    drawer: null
  }),
  created: function() {
    this.$vuetify.theme.dark = true
  }
}
</script>
