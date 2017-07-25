<template lang="pug">
  #app.container(v-cloak)
    .columns
      .column.is-6
        h1.title.is-3(v-text="subject")
      .column.is-6
        app-subject
</template>

<script>
import Vue from 'vue'

// Vue.component('app-subject', {
//   template: `
//     <div class="compoent-root">
//       <h3> {{subject}} </h3>
//     </div>
//   `,
//   data(){
//     return {
//     subject: 'Vue Component!'
//     }
//   }
// });
console.log(!!Vue.component('app-subject'));

export default {
  name: 'app',
  data () {
    return {
      subject: 'Vue Component Practice',
    }
  },
  mounted(){
    console.log(!!Vue.component('app-subject'));
    let appSubject = Vue.component('app-subject');
    console.log(typeof appSubject);
  }
}
</script>

<style lang="sass" scoped>
html
  font-size: 100%
  background: #fff
body
  margin: 0

#app
  margin-top: 35px
  margin-left: 20px
  margin-right: 20px

[v-cloak]
  display: none
</style>
