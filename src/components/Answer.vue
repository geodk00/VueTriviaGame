<template>
  <div class="hello">
    <li href="#" v-on:click="handleClick">{{ this.answer }}</li>
  </div>
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
    answer: String
  }
}
</script>

<style scoped>
li {
  font-size: 1.5rem;
  background: #42b983;
  cursor: pointer;
  flex: 1 50%;
  justify-content: space-between;
  margin: 2px;
  border-radius: 10px;
  border: 1px solid white;
  padding: 8px;
}

li:hover {
  border: 1px dashed black;
}

li:active {
  color: white;
  border: 1px solid black;
  text-shadow: 1px 1px 2px black;
  box-shadow: 1px 1px 3px black;
}
</style>
