<template lang="pug">
  #app.container(v-cloak)
    .columns
      .column.is-6
        h1.title.is-3(v-text="subject")
      .column.is-6
        app-subject
    .columns
      .column.is-6
        Headline
      .column.is-6
        Github
          span 아아아
    .columns
      .column.is-6
        div(:is="dynamic_component") ??

    .columns
      .column.is-6
        select(v-model="selectOpt")
          option(v-for="co in comp" :value="co.value"  :disabled="!co.value") {{co.text}}
      .column.is-6
        div(:is="applies")
    .columns
      .column.is-12
        AppTasks
</template>

<script>

import Headline from './components/Headline.vue';
import Github from './components/Github.vue';
import AppTasks from './components/AppTasks.vue';

export default {
  name: 'app',
  components: {
    Headline,
    Github,
    AppTasks,
  },
  watch: {
    selectOpt(){
      console.log(this.selectOpt);
      if(this.selectOpt=== 'one'){
        this.applies = 'Headline'
      } else {
        this.applies = 'Github'
      }
    }
  },
  data () {
    return {
      subject: 'Vue Component Practice',
      dynamic_component : 'Github',
      selectOpt: '',
      comp: [
        {text: 'Select', value: ''},
        {text: 'one', value: 'one'},
        {text: 'two', value: 'two'},
      ],
      applies : 'Github'
    }
  },
  mounted(){
    window.setTimeout( () => this.dynamic_component = 'Headline', 3000);
  },
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
