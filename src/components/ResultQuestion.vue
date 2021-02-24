<template>
  <div>
    <h2>Question {{ this.question.id +1 }}</h2>
    <p>{{ this.question.question }}</p>
    <ul>
      <ResultAnswer v-for="answer in answers"
                    :key="answer.id"
                    v-bind:answer="answer"
                    :style="{'grid-area': answerStyle(answer.id)}"
                    />
    </ul>
    <hr>
  </div>
</template>

<script>
import ResultAnswer from './ResultAnswer.vue'

export default {
  name: 'ResultQuestion',
  components: {
    ResultAnswer
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
    answerStyle (questionNumber) {
      return 'a' + (questionNumber + 1)
    }
  },
  mounted () {
    const answered = this.$store.state.answers[this.index]
    const correct = this.question.correct_answer

    this.answers = this.question.answers.map(answer => {
      return { ...answer, correct: answer.answer === correct, chosen: answer.answer === answered }
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  font-size: 1em;
  background-color: #42b983;
  /*border: 1px solid #56db9f;*/
  box-shadow: 1px 1px rgb(161, 157, 161);
  border-radius: 10px;
  max-width: 40%;
  margin: auto;
  padding: 10px;
}

ul {
  list-style-type: none;
  max-width: 40%;
  margin: auto;
  padding-left: 0;
  margin-top: 10px;
  margin-bottom: 10px;

  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: auto;
  grid-template-areas:  "a1 a2"
                        "a3 a4";
}

hr {
  width: 20%;
  margin-top: 15px;
  margin-bottom: 15px;
}
</style>
