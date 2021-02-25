<template>
  <div :class="{
                wrong: !answer.correct && answer.chosen,
                correct: answer.correct && answer.chosen,
                right: answer.correct && !answer.chosen
                }">
    {{this.answer.answer}}
  </div>
</template>

<script>
/*
  Component responsible for showing
  an answer result.

  Takes in the answer via a prop.

  changes the class of the answer based
  on if the answer is correct and if it was chosen
  by the player
*/

export default {
  name: 'AnswerComponent',
  props: {
    answer: Object
  }
}
</script>

<style scoped>
div {
  font-size: 1.2rem;
  padding: 8px;
  border-radius: 5px;
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
