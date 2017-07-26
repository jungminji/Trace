<template lang="pug">
  div.total-counter
    p.box {{calculateTotal}}
    Counter(v-for="(counter, index) in copiedCounters"
            :key="index"
            :index="index"
            :init-value="counter"
            @increase="detect"
            @decrease="detect"
            @click.native="detectAppEvent")
 </template>

<script>
import Counter from './Counter'

export default {
  components:{
    Counter,
  },
  props: {
    appMood: {
      type: String,
      required: false,
      default() {
        return 'Angry';
      }
    },
    counters: {
      type: Array,
      required: false,
      default(){
        return [0, 0];
      }
    },
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
  },
  detectAppEvent(){
    console.log('Clicked!');
    console.log(arguments);
  }
}
}
</script>

<style lang="sass">

</style>