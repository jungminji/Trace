<template lang="pug">
  div.total-counter
    p.box {{calculateTotal}}
    Counter(v-for="(counter, index) in copiedCounters"
            :key="index"
            :index="index"
            :init-value="counter"
            @increase="detect"
            @decrease="detect")
 </template>

<script>
import Counter from './Counter'

export default {
  components:{
    Counter,
  },
  props: {
    counters: {
      type: Array,
      required: false,
      default(){
        return [0, 0];
      }
    }
  },
  computed:{
    calculateTotal(){
      return this.copiedCounters.reduce((prev, next) => prev+next)
    }
  },
  data(){
    return {
      // Vue 2.4 +
      copiedCounters: this.counters.slice()
    }
  },
  methods:{
  detect(index, count){
    this.copiedCounters.splice(index, 1, count);
  }
}
}
</script>

<style lang="sass">

</style>