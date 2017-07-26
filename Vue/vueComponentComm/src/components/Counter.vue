<template lang="pug">
  div.counter
    input(type="number" v-model.number="count").input
    button(@click="increaseCount" type="button").button.is-primary.is-increase Count Up
    button(@click="decreaseCount" type="button").button.is-danger.is-decrease Count Down
    button(@click="dispatchCount" type="button").button.is-success.is-outlined EventBus
</template>
<script>

import EventBus from '../EventBus.js'

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
  watch:{
    count(newVal, oldVal){
      newVal > oldVal ? this.$emit('increase', this.index, this.count) : this.$emit('decrease', this.index, this.count);
    }
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
    },
    dispatchCount(){
      // this.$emit('changeCount', this.index, this.count);
      EventBus.$emit('to-evb', this.index, this.count);
    }
  }
}
</script>
<style lang="sass" scoped>
.counter
  border: 2px solid #eee
</style>

