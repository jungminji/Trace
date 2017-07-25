<template lang="pug">
  ul.app-tasks
    app-task(v-for="o in app.tasks")  {{ o }}
</template>

<script>
import AppTask from './AppTask.vue';
import Github from './Github.vue';
export default {
  components: {
    AppTask,
    Github,
  },
  data(){
    return{
      app: {
        tasks: 'one two three four five'.split(' '),
      }
    }
  }
}
</script>

<style lang="sass">

</style>


