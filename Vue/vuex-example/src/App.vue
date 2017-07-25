<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p>{{text}}</p>
    <button @click="changeText">Change</button>
    <hr>
    <p>{{actionTry}}</p>
    <transition name="rotate" mode="out-in" 
    enter-active-class="rotateInDownLeft"
    leave-active-class="rotateOutUpRight"
    >
     <router-view></router-view> 
     </transition>
  </div>
</template>

<script>

export default {
  name: 'app',
  computed:{
    text(){
      return this.$store.state.text;
    },
    actionTry(){
      return this.$store.getters.addText + " Do you?";
    }
  },
  methods:{
    changeText(){
      this.$store.commit('changeText', 'Better!');
    }
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
