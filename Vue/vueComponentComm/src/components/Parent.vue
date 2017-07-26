<template lang="pug">
  div.component
    div.box
      h1(v-text="mine")
      button(@click="changeVal()").button.is-info.is-outlined Change
    div.box
      button(type="button" @click="lunchTime").button.is-primary.is-large 뭐 먹을까요?
      p(class="lunch" v-text="todayLunch").button.is-danger.is-outlined.is-large
    div.box
      h3 Dynamic binding
      input(type="text" v-model.laz="message").input
      div.box
        h5 Today
        input(type="checkbox" v-model="arr" value="Today")
        h5 Is
        input(type="checkbox" v-model="arr" value="Is")
        h5 Awesome
        input(type="checkbox" v-model="arr" value="Awesome")
    //- slot
    Child(
      parent="parentData"
      another="another!"
      :parentMsg = "message"
      :methodRet = "propMethod()"
      :computedRet = "doubleUp"
      :arrMsg = "arr"
      )
    
</template>
<script>

import Child from './Child'

export default {
  name: 'Parent',
  components: {
    Child
  },
  data(){
    return {
      mine: 'Parent Component',
      message: '',
      computedData: 5,
      arr:[],
      lunchSet: ['닝교초', '파니니', '열심식당', '마키진', '돈까스집', '라멘집', '분식집', '도가','온소바','바른식탁'],
      todayLunch: ''
    }
  },
  computed:{
    doubleUp(){
      return this.computedData * 2;
    },
    displayLunch(){
      return this.todayLunch;
    }
  },
  methods:{
    propMethod(){
      return "propMethod";
    },
    changeVal(){
      this.computedData += 20;
    },
    lunchTime(){
      let count = this.lunchSet.length;
      let random = parseInt(Math.random() * count);
      this.todayLunch = this.lunchSet[random];
    }
  }
}
</script>
<style lang="sass">
.component
  display: flex
  justify-content: space-around
  align-items: center
  padding: 1.4em
  border: 3px solid currentColor
  color: #c5af95
.lunch
  display: block

</style>
