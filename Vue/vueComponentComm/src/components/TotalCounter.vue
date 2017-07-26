<template lang="pug">
  div.total-counter
    p.box
      Counter(@incrase="detectIncrease" @decrease="detectDecrease")
      Counter(:init-value="2" @increase="detectIncrease" @decrease="detectDecrease")
      Counter(:init-value="4" @increase="detectIncrease" @decrease="detectDecrease")
</template>

<script>
import Counter from './Counter'

export default {
  data(){
    return {

    }
  },
  components:{
    Counter,
  },
  methods:{
  detectIncrease(){
    console.log('qwd');
  },
  detectDecrease(){
    console.log('dwq');
  }
}
}
</script>

<style lang="sass">

</style>