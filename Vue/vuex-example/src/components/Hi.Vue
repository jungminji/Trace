<template>
  <div class="hello" v-cloak>
    <h1>{{ msg }}</h1>
    <button @click="update">update</button>
    <p>Actions test</p>
    <button @click="updateText">TryAction</button>
    <router-link to="/">Go To Home</router-link>
  </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex';

// mapgetters, mapmutation
export default {
  name: 'hi',
  data() {
    return {};
  },
  computed: {
    msg() {
      return this.$store.state.text;
    },
  },
  methods: {
    update() {
      this.$store.commit('changeText', 'BLABLABLA');
    },

    // this.updateText 을 store 의 changeText 에 매핑
    ...mapActions({
      updateText: 'changeText',
    }),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
