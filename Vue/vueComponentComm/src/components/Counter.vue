<template lang="pug">
  div.counter
    input(type="number" v-model.number="count").input
    button(@click="increaseCount" type="button").button.is-primary.is-increase Count Up
    button(@click="decreaseCount" type="button").button.is-danger.is-decrease Count Down
</template>
<script>
export default {
  props: {
    initValue: {
      type: Number,
      default: 0
    }
  },
  data(){
    return {
      count: this.initValue
    };
  },
  computed:{
    displayCount(){
      return this.count;
    }
  },
  methods:{
    increaseCount(){
      this.count++;
      this.$emit('increse');
    },
    decreaseCount(){
      this.count--;
      this.$emit('decrease');
    },
    resetCount(){
      this.count = this.initValue
    }
  }
}
</script>
<style lang="sass" scoped>

</style>

