<template>
  <div class="hello">
    <h1>🍾 Results 🎉</h1>
    <h2>Score: {{ this.score }}</h2>
    <ResultQuestion v-for="question in this.$store.state.questions" :key="question.id" v-bind:question="question" v-bind:index="question.id"/>
  </div>
</template>

<script>
import ResultQuestion from './../components/ResultQuestion'
export default {
  name: 'ResultView',
  components: {
    ResultQuestion
  },
  props: {
  },
  computed: {
    score () {
      return this.$store.getters.getScore
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
</style>
