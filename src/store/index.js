import Vue from 'vue'
import Vuex from 'vuex'

import fetchFromApi from './../util/utils'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    questions: [],
    answers: []
  },
  getters: {
    getScore: state => {
      return state.answers.reduce((acc, cur, index) => {
        return acc + (cur === state.questions[index].correct_answer ? 10 : 0)
      }, 0)
    },
    getNumberOfQuestions: state => { return state.questions.length },
    getNumberOfAnswers: state => { return state.answers.length },
    getPercentageDone: state => { return (state.answers.length / state.questions.length) * 100 }
  },
  mutations: {
    setQuestions: (state, questions) => { state.questions = questions },
    // using splice so vue knows about the update
    answerQuestion: (state, answer) => { state.answers.splice(answer.index, 0, answer.selectedAnswer) },
    resetAnswers: state => { state.answers = [] }
  },
  actions: {
    async fetchQuestions (state, options) {
      this.commit('resetAnswers')
      const questions = await fetchFromApi(options)
      this.commit('setQuestions', questions)
    }
  }
})
