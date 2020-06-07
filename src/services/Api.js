import axios from 'axios'


export default {
    getExercises() {
        return axios.get('/exercises-list')
            .then(res => {
                return res.data
            })
    },

    loadExercise(exercise) {
        const body = {'name': exercise}
        return axios.post('/exercise', body)
            .then(res => {
                return res.data
            })

    },
    runScript(text) {
        const body = {'code': text}
        return axios.post('/run-script', body)
            .then(res => {
                return res.data
            })
    },
    loadScript(exercise) {
        const body = {'id': exercise}
        return axios.post('/load-script', body)
            .then(res => {
                return res.data
            })
    }
}
