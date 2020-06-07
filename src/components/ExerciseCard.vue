<template>
  <div id='exercise-card'>
    <v-card class='mx-auto' max-width='680' outlined>
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title class='headline mb-1'>{{name}}</v-list-item-title>
          <v-list-item-subtitle>{{description}}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-card-actions>
        <v-btn text @click='go()'>Start</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'ExerciseCard',
  props: {
    id: {
      type: String
    },
    name: {
      type: String
    },
    description: {
      type: String
    },
    difficulty: {
      type: Number
    }
  },
  data() {
    return {
      isActive: false
    }
  },
  created() {},
  methods: {
    show: function() {
      if (this.isActive) {
        this.isActive = false
      } else {
        this.isActive = true
      }
    },
    go: function() {
      this.$router.push({ name: 'Start', params: { id: `${this.id}` } })
    }
  }
}
</script>

<style scoped>
#exercise-card {
  margin-top: 0.5em;
}
</style>
