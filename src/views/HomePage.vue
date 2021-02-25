<template>
  <div>
    <h1>Welcome to the trivia game</h1>
    <Options @start="begin" v-if="!fetching"/>
    <Loading v-show="fetching" />
  </div>
</template>

<script>
/*
  Component responsible for the view before starting
  the game.

  Displays the options component until the player clicks
  go, and then displays a loading animation while waiting
  on the api fetch.
*/

import Options from './../components/Options.vue'
import Loading from './../components/Loading.vue'

export default {
  name: 'HomePage',
  components: {
    Options,
    Loading
  },
  data () {
    return {
      fetching: false
    }
  },
  methods: {
    async begin (event) {
      this.fetching = true

      this.$store.commit('reset')
      await this.$store.dispatch('fetchQuestions', event)

      this.$router.push('/question/0')
    }
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
