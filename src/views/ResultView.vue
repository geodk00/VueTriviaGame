<template>
  <div>
    <h1>🍾 Results 🎉</h1>
    <h2>Score: {{ score }}</h2>
    <router-link to="/">Play Again</router-link>
    <ResultQuestionComponent
          v-for="question in questions"
          :key="question.id"
          :question="question"
          :questionIndex="question.id"
    />
  </div>
</template>

<script>
/*
  Component responsible for the overall view
  when showing the result to the user

  Delegates the display of questions to
  ResultQuestionComponent

  Navigates to '/' if the user hasn't answered
  all questions
*/

import ResultQuestionComponent from './../components/result/ResultQuestionComponent.vue'
export default {
  name: 'ResultView',
  components: {
    ResultQuestionComponent
  },
  computed: {
    score () {
      return this.$store.getters.getScore
    },
    questions () {
      return this.$store.state.questions
    }
  },
  beforeRouteEnter (to, from, next) {
    // reroute if answers == 0 || answers < questions
    next(vm => {
      if (vm.$store.getters.getNumberOfAnswer < vm.$store.getters.getNumberOfQuestions || vm.$store.getters.getNumberOfAnswers === 0) {
        next('/')
      }
    })
  }
}
</script>

<style scoped>
a {
  color: black;
  text-decoration: none;
  background: #42b983;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 1px 1px 2px black;
}

a:active {
  box-shadow: 0px 0px 2px black;
}
</style>
