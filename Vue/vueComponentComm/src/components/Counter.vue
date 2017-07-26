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
    },
    index: Number
  },
  data(){
    return {
      count: this.initValue
    };
  },
  methods:{
    increaseCount(){
      this.count++;
      this.$emit('increase', this.index, this.count);
    },
    decreaseCount(){
      this.count--;
      this.$emit('decrease', this.index, this.count);
    },
    resetCount(){
      this.count = this.initValue
    }
  }
}
</script>
<style lang="sass" scoped>

</style>

