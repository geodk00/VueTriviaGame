import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import decode from './../util/utils'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    questions: [],
    answers: []
  },
  getters: {
    getScore: state => {
      return state.answers.reduce((accumulator, cur, index) => {
        return accumulator + (cur === state.questions[index].correct_answer ? 10 : 0)
      }, 0)
    },
    getNumberOfQuestions: state => {
      return state.questions.length
    },
    getNumberOfAnswers: state => {
      return state.answers.length
    },
    getPercentageDone: state => {
      return (state.answers.length / state.questions.length) * 100
    }
  },
  mutations: {
    addQuestion (state, question) {
      // make sure vue knows about the update, .push wont work
      state.questions = [...state.questions, question]
    },
    answerQuestion (state, answer) {
      // make sure vue knows about the update
      state.answers.splice(answer.index, 0, answer.selectedAnswer)
    },
    reset (state) {
      state.questions = []
      state.answers = []
    },
    setReady (state) {
      state.ready = true
    }
  },
  actions: {
    async fetchQuestions (state, options) {
      try {
        options = { ...options, encode: 'base64' }
        const questionResponse = await axios.get('https://opentdb.com/api.php', { params: options })

        if (Array.isArray(questionResponse.data.results)) {
          questionResponse.data.results.forEach((question, index) => {
            // decode response from base64
            for (const property in question) {
              if (Array.isArray(question[property])) {
                question[property].forEach((element, index) => {
                  question[property][index] = decode(element)
                })
              } else {
                question[property] = decode(question[property])
              }
            }
            // insert the correct answer in a random position along with the incorrect answers
            const answers = question.incorrect_answers
            delete question.incorrect_answers
            const InsertIndex = Math.floor(Math.random() * answers.length) // random index between 0 and answers.length (both inclusive)
            answers.splice(InsertIndex, 0, question.correct_answer)

            // wrap the answers with their index as 'id' for use as a key in vue
            question.answers = answers.map((answer, id) => { return { id, answer } })
            // give the question an 'id' as well, also for use as a key in vue
            question.id = index
            this.commit('addQuestion', question)
          })
          this.commit('setReady')
        }
      } catch (e) {
        console.log(e)
      }
    }
  }
})
