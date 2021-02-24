<template>
  <div class="container">
      <h2>Choose options</h2>
    <label for="amount">Number of questions</label>
    <input name="amount" type="number" min="1" max="50" v-model="amount">
    <label for="category">Category</label>
    <select name="category" v-model="category">
      <option value="any">Any Category</option>
      <option value="9">General Knowledge</option>
      <option value="10">Entertainment: Books</option>
      <option value="11">Entertainment: Film</option>
      <option value="12">Entertainment: Music</option>
      <option value="13">Entertainment: Musicals &amp; Theatres</option>
      <option value="14">Entertainment: Television</option>
      <option value="15">Entertainment: Video Games</option>
      <option value="16">Entertainment: Board Games</option>
      <option value="17">Science &amp; Nature</option>
      <option value="18">Science: Computers</option>
      <option value="19">Science: Mathematics</option>
      <option value="20">Mythology</option>
      <option value="21">Sports</option>
      <option value="22">Geography</option>
      <option value="23">History</option>
      <option value="24">Politics</option>
      <option value="25">Art</option>
      <option value="26">Celebrities</option>
      <option value="27">Animals</option>
      <option value="28">Vehicles</option>
      <option value="29">Entertainment: Comics</option>
      <option value="30">Science: Gadgets</option>
      <option value="31">Entertainment: Japanese Anime &amp; Manga</option>
      <option value="32">Entertainment: Cartoon &amp; Animations</option>
    </select>
    <label for="difficulty">Difficulty</label>
    <select name="difficulty" v-model="difficulty">
      <option value="any">Any Difficulty</option>
      <option value="easy">Easy</option>
      <option value="medium">Medium</option>
      <option value="hard">Hard</option>
    </select>
    <p>
      <a v-on:click="handleClick" href="#">GO!</a>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Options',
  data () {
    return {
      amount: '10',
      difficulty: 'any',
      category: 'any'
    }
  },
  methods: {
    handleClick () {
      const options = { amount: this.amount }

      if (this.difficulty !== 'any') {
        options.difficulty = this.difficulty
      }

      if (this.category !== 'any') {
        options.category = this.category
      }

      this.$emit('start', options)
    }
  },
  props: {
  }
}
</script>

<style scoped>

input {
  padding: 5px;
  margin: 5px 0px 10px;
  border: 1px solid #42b983;
  box-shadow:0 0 15px 4px rgba(0,0,0,0.06);
  border-radius: 10px;
  width: 100%;
}

select {
  padding: 5px;
  margin: 5px 0px 10px;
  border: 1px solid #42b983;
  box-shadow:0 0 15px 4px rgba(0,0,0,0.06);
  border-radius: 10px;
  width: 100%;
}
label {
  display: block;
  text-align: left;
  width: 100%
}
.container {
  width: 40%;
  margin: auto;
}

a {
  font-size: 2rem;
  color: #42b983;
  text-decoration: none;
}

a:visited {
  color: #42b983;
}

a:hover {
  text-shadow: -1px -1px 2px black;
}

a:active {
  text-shadow: 1px 1px 2px black;
}

</style>
