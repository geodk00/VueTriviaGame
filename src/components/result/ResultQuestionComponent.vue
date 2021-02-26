<template>
  <div>
    <h2>Question {{ question.id +1 }}</h2>
    <p>{{ question.question }}</p>
    <div class="answerContainer">
      <ResultAnswerComponent
            v-for="answer in answers"
            :key="answer.id"
            :answer="answer"
      />
    </div>
    <hr>
  </div>
</template>

<script>
/*
  Component responsible for showing a
  a question result

  Delegates the display of answers to
  AnswerComponent.

  Keeps a local "massaged" version of the
  questions with added boolean properties:

    chosen = true if the player picked this question
    correct = true if this question is correct
*/

import ResultAnswerComponent from './ResultAnswerComponent.vue'

export default {
  name: 'ResultQuestionComponent',
  components: {
    ResultAnswerComponent
  },
  props: {
    question: Object
  },
  data () {
    return {
      answers: []
    }
  },
  mounted () {
    const answered = this.$store.state.answers[this.question.id]
    const correct = this.question.correct_answer

    this.answers = this.question.answers.map(answer => {
      return { ...answer, correct: answer.answer === correct, chosen: answer.answer === answered }
    })
  }
}
</script>

<style scoped>
p {
  font-size: 1.7rem;
  background-color: #42b983;
  box-shadow: 1px 1px rgb(161, 157, 161);
  border-radius: 10px;
  width: 40%;
  min-width: 300px;
  margin: auto;
  padding: 10px;
}

.answerContainer {
  width: 40%;
  min-width: 300px;
  margin: auto;
  margin-top: 10px;
  margin-bottom: 10px;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
}

hr {
  width: 20%;
  margin-top: 15px;
  margin-bottom: 15px;
}
</style>
