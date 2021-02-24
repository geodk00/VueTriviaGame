<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
// This css-file is almost empty
// Only doing it like this as an example for myself in the future
import './assets/css/styles.css'

export default {
  name: 'App',
  computed: {
    score () {
      return this.$store.getters.getScore
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
