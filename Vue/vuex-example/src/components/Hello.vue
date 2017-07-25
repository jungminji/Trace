<template>
  <div class="hello" v-cloak>
    <p> ------  Hello.vue ------ </p>
     <p>{{text}}</p> 
    <button @click="AddText">AddText</button>
    <router-link to="/hi">Go To Hi</router-link>
  </div>
</template>

<script>
export default {
  name: 'hello',
  computed: {
    text() {
      return this.$store.state.text;
    },
  },
  methods: {
    AddText() {
      this.$store.commit('changeText', 'What happnes?');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
