<template>
  <li v-bind:class="{
                wrong: !answer.correct && answer.chosen,
                correct: answer.correct && answer.chosen,
                right: answer.correct && !answer.chosen
                }">
    {{this.answer.answer}}
  </li>
</template>

<script>
export default {
  name: 'Answer',
  methods: {
    handleClick () {
      this.$emit('answer', this.answer)
    }
  },
  props: {
    answer: Object
  }
}
</script>

<style scoped>
li {
  font-size: 0.9em;
  padding: 8px;
  border-radius: 5px;
  border: 1px solid black;
  text-decoration: none;
  margin: 5px;
  background: #42b983;
}

.wrong:before{
  content: '❌';
}

.wrong:after {
  content: '❌';
}

.correct:before{
  content: '👌';
}
.correct:after{
  content: '👌';
}

.right:before{
  content: '✔️';
}
.right:after{
  content: '✔️';
}
</style>
