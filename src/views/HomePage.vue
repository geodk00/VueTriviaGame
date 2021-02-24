<template>
  <div class="hello">
    <h1>Welcome to the trivia game</h1>
    <Options v-on:start="begin" v-if="!fetching"/>
    <Loading v-show="fetching" />
  </div>
</template>

<script>
import Options from './../components/Options.vue'
import Loading from './../components/Loading.vue'

export default {
  name: 'HomePage',
  components: {
    Options,
    Loading
  },
  props: {
  },
  data () {
    return {
      fetching: false
    }
  },
  methods: {
    async begin (event) {
      this.fetching = true
      console.log(event)
      await this.$store.dispatch('fetchQuestions', event)
      this.$router.push('/question/0')
    }
  },
  async created () {
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
