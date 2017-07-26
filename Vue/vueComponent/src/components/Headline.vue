<template lang="pug">
  .is-6
    h1.title.is-3 {{headline}}
    h1.title.is-3 {{ subheadline }}
</template>

<script>
export default {
  name: 'app-headline',
  data() {
    return {
      headline: 'Headline.vue',
      subheadline: 'Subtitle!!'
    }
  }
}
</script>

<style lang="sass" scoped>
[v-cloak]
  display: none
</style>
