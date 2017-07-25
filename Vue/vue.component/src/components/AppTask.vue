<template lang="pug">
  li.app-task
    Github
    slot
</template>

<script>
import Github from './Github.vue';
export default {
  components: {
    Github,
  }
}
</script>

