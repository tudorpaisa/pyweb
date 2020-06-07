import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import ExercisesPage from '@/components/ExercisesPage'
import Exercise from '@/components/Exercise'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/exercises-page',
            name: 'Exercises',
            component: ExercisesPage
        },
        {
            path: '/exercise/:id',
            name: 'Start',
            component: Exercise,
            props: true
        },
    ]
})
