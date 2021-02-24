<template>
  <div>
    <Progress />
    <Question v-bind:question="currentQuestion" v-bind:index="id"/>
  </div>
</template>

<script>
import Progress from '../components/Progress.vue'
import Question from './../components/Question.vue'

export default {
  name: 'QuestionView',
  components: {
    Question,
    Progress
  },
  props: {
    msg: String
  },
  computed: {
    id () {
      return Number.parseInt(this.$route.params.id)
    },
    currentQuestion () {
      if (this.$store.state.questions[this.id]) {
        return this.$store.state.questions[this.id]
      }
      return {}
    }
  },
  beforeRouteEnter (to, from, next) {
    // guard against non-integer ids
    if (!(Number.parseInt(to.params.id) >= 0)) {
      next('/')
    }
    // reroute if id > questions
    next(vm => {
      if (Number.parseInt(to.params.id) > vm.$store.getters.getNumberOfQuestions) {
        next('/')
      }
    })
  },
  watch: {
    $route (to, from, next) {

    }
  }
}
</script>

<style scoped>
</style>
