<template>
  <v-row align='center' justify='center'>
    <v-col class='text-center'>
      <v-icon>mdi-help</v-icon>
      <h1>{{title}}</h1>
      <p>{{msg}}</p>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      title: 'TODO',
      msg: `I\'ll work on this when I\'ll fell like it 😅 (or when I'll add a markdown renderer). In the meantime, check the sidebar to pass the time.`
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
