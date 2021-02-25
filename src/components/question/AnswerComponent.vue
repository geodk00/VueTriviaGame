<template>
    <div @click="handleClick">{{ answer }}</div>
</template>

<script>
/*
  Component responsible for showing a
  single possible answer in a question.

  Will emit an 'answer' event if clicked,
  which will contain the text of the clicked
  answer.
*/
export default {
  name: 'AnswerComponent',
  methods: {
    handleClick () {
      this.$emit('answer', this.answer)
    }
  },
  props: {
    answer: String
  }
}
</script>

<style scoped>
div {
  font-size: 1.5rem;
  background: #42b983;
  cursor: pointer;
  border-radius: 10px;
  border: 1px solid white;
  padding: 8px;
}

div:hover {
  border: 1px dashed black;
}

div:active {
  color: white;
  border: 1px solid black;
  text-shadow: 1px 1px 2px black;
  box-shadow: 1px 1px 3px black;
}
</style>
