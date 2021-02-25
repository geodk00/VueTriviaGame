<template>
  <div>
    <div class="question">
    <p class="small">
      <span class="left">{{this.question.category}}</span>
      <span class="right">{{this.question.difficulty}}</span>
      </p>
    <p>{{ this.question.question }}</p>
    </div>
    <div class="answerContainer">
      <Answer v-for="answer in question.answers"
              :key="answer.id"
              v-bind:answer="answer.answer"
              v-on:answer="handleAnswer"
              />
    </div>
  </div>
</template>

<script>
import Answer from './../components/Answer.vue'

export default {
  name: 'Question',
  components: {
    Answer
  },
  props: {
    question: Object,
    index: Number
  },
  data () {
    return {
      answers: []
    }
  },
  methods: {
    handleAnswer (selectedAnswer) {
      this.$store.commit('answerQuestion', { selectedAnswer, index: this.index })

      if (this.index >= this.$store.state.questions.length - 1) {
        this.$router.push('/result')
      } else {
        this.$router.push('/question/' + (this.index + 1))
      }
    }
  }
}
</script>

<style scoped>
p {
  font-size: 1.4em;
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
  max-width: 40%;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
}

.answerContainer {
  max-width: 40%;
  margin: auto;
  margin-top: 10px;

  display: grid;
  row-gap: 5px;
  column-gap: 5px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
}
</style>
