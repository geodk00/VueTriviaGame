<template>
  <div>
    <ProgressComponent />
    <QuestionComponent :question="currentQuestion" :questionIndex="id"/>
  </div>
</template>

<script>
/*
  Component responsible for the overall view
  when the user is answering questions

  Delegates the display of questions to
  QuestionComponent and the progress to
  ProgressComponent.

  Takes the id of the question to display
  from the route and tries to guard against
  invalid states like the id being outside
  the number of questions or the questions being empty.
*/

import ProgressComponent from '../components/question/ProgressComponent.vue'
import QuestionComponent from './../components/question/QuestionComponent.vue'

export default {
  name: 'QuestionView',
  components: {
    QuestionComponent,
    ProgressComponent
  },
  computed: {
    id () {
      return Number.parseInt(this.$route.params.id)
    },
    currentQuestion () {
      // returning an empty object in case of id being invalid.
      // This will supress vue errors appearing in the console just before
      // the route guard takes effect and routes back to /
      // (complaints from QuestionComponent about properties on undefined)
      return this.$store.state.questions[this.id] ? this.$store.state.questions[this.id] : {}
    }
  },
  beforeRouteEnter (to, from, next) {
    // Reroute if no questions or id > questions.
    // No access to 'this' in beforeRouteEnter so do
    // it in the next route handler
    next(vm => {
      if (vm.$store.getters.getNumberOfQuestions === 0 || Number.parseInt(to.params.id) > vm.$store.getters.getNumberOfQuestions) {
        next('/')
      }
    })
  }
}
</script>

<style scoped>
</style>
