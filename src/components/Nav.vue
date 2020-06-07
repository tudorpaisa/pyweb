<template>
  <v-list dense>
    <v-list-item link to='/'>
      <v-list-item-action>
        <v-icon>mdi-home</v-icon>
      </v-list-item-action>
      <v-list-item-content>
        <v-list-item-title>Home</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-list-item link to='/exercises-page'>
      <v-list-item-action>
        <v-icon>mdi-language-python</v-icon>
      </v-list-item-action>
      <v-list-item-content>
        <v-list-item-title>Python Exercises</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
// TODO: Do the links in a for loop
export default {
  name: 'Nav',
  data() {
    return {
      links: [
        {
          id: 0,
          text: 'Home',
          page: '/'
        },
        {
          id: 1,
          text: 'Exercises',
          page: '/exercises-page'
        }
      ]
    }
  }
}
</script>
