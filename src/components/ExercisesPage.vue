<template>
  <div>
    <v-row align='center' justify='center'>
      <v-col class='text-center'>
        <v-icon>mdi-language-python</v-icon>
        <h1>Python Exercises</h1>
        <p>There are {{nFiles}} exercises</p>
      </v-col>
    </v-row>
    <div v-for='exercise in exercises'>
      <ExerciseCard
        :name='exercise.name'
        :id='exercise.id'
        :description='exercise.description'
        :difficulty='exercise.difficulty'
      ></ExerciseCard>
    </div>
  </div>
</template>

<script>
import Api from '@/services/Api'
import ExerciseCard from './ExerciseCard'

export default {
  name: 'Exercises',
  components: {
    ExerciseCard: ExerciseCard
  },
  data() {
    return {
      nFiles: 0,
      exercises: []
    }
  },
  created() {
    Api.getExercises().then(exercises => {
      this.nFiles = exercises.length
      exercises.forEach(ex => {
        console.log('exercise: ', ex)
        Api.loadExercise(ex).then(data => {
          console.log(data)
          const newExercise = {
            id: ex,
            name: data.name,
            description: data.description,
            difficulty: data.difficulty
          }
          console.log(newExercise)
          this.exercises.push(newExercise)
        })
      })
    })
  },
  methods: {
    load: function(ex) {
      Api.loadExercise(ex).then(data => {
        return data
      })
    }
  }
}
</script>

<style>
</style>
