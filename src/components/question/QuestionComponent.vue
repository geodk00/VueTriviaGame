<template>
  <div>
    <div class="question">
      <p class="small">
        <span class="left">{{ question.category }}</span>
        <span class="right">{{ question.difficulty }}</span>
      </p>
      <p>{{ this.question.question }}</p>
    </div>
    <div class="answerContainer">
      <AnswerComponent
              v-for="answer in question.answers"
              :key="answer.id"
              :answer="answer.answer"
              @answer="handleAnswer"
              />
    </div>
  </div>
</template>

<script>
/*
  Component responsible for showing a
  question and possible answers.

  Delegates the display of answers to
  AnswerComponent.

  Takes in the question index and question
  as props.

  Navigates to the next question or the results
  page on receiving an 'answer' event.
*/

import AnswerComponent from './AnswerComponent.vue'

export default {
  name: 'QuestionComponent',
  components: {
    AnswerComponent
  },
  props: {
    question: Object
  },
  methods: {
    handleAnswer (selectedAnswer) {
      this.$store.commit('answerQuestion', { selectedAnswer, index: this.question.id })

      if (this.question.id >= this.$store.state.questions.length - 1) {
        this.$router.push('/result')
      } else {
        this.$router.push('/question/' + (this.question.id + 1))
      }
    }
  }
}
</script>

<style scoped>
p {
  font-size: 2rem;
}

.small {
  margin-top: 0;
  font-size: small;
}

.left {
  display:inline-block;
  text-align: left;
  width: 50%;
}

.right {
  display:inline-block;
  text-align: right;
  width: 50%;
}

.question {
  background-color: #42b983;
  box-shadow: 1px 1px rgb(161, 157, 161);
  border-radius: 10px;
  width: 40%;
  min-width: 300px;
  margin: auto;
  margin-top: 10px;
  padding: 10px;
}

.answerContainer {
  width: 40%;
  min-width: 300px;
  margin: auto;
  margin-top: 10px;

  display: grid;
  row-gap: 5px;
  column-gap: 5px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
}
</style>
