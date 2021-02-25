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
  font-size: 1.2rem;
  padding: 8px;
  border-radius: 5px;
  text-decoration: none;
  margin: 5px;
  background: #42b983;
}

.wrong:before{
  content: '❌';
}

.correct:before{
  content: '👌';
}

.right:before{
  content: '✔️';
}

</style>
