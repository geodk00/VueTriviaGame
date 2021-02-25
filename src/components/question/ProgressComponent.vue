<template>
  <div>
    <div class="progress" :style="{ width: percentage }"></div>
    <div class="progressText">{{ answers }} / {{ questions }}</div>
  </div>
</template>

<script>
/*
  Component responsible for showing a
  progress bar at the top of the page.
*/

export default {
  name: 'ProgressComponent',
  computed: {
    percentage () {
      return this.$store.getters.getPercentageDone + '%'
    },
    questions () {
      return this.$store.getters.getNumberOfQuestions
    },
    answers () {
      return this.$store.getters.getNumberOfAnswers
    }
  }
}
</script>

<style scoped>
div {
  width: 100%;
  height: 30px;
  background: #e1e2e4;
  border-bottom: 1px solid #918b8e;
}

.progress {
  background: #42b983;
  border-bottom: 0
}
.progressText {
  background: none;
  border-bottom: 0;
  position: relative;
  top: -30px;
  padding: 5px;
  font-weight: bold;
}
</style>
