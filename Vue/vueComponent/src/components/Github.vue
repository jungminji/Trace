<template lang="pug">
  div
    i(class="fa" :class="nameOfClass")
    slot
</template>

<script>
export default {
  name: 'app-headline',
  data() {
    return {
      nameOfClass: 'fa-github',
    }
  }
}
</script>

<style lang="sass" scoped>
[v-cloak]
  display: none


</style>
