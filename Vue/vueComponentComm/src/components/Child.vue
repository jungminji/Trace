<template lang="pug">
  div.child-component
    h1(v-text="mine").box
    h3.box Data from parent
    ul.box
      li.button.is-primary Prop: {{parent}}
      li.button.is-primary Another: {{another}}
      li.button.is-primary Msg: {{parentMsg}}
      li.button.is-info Method: {{methodRet}}
      li.button.is-warning Computed: {{computedRet}}
      li.button.is-warning ComputedArr: {{arrTostr}}
            
</template>
<script>
export default {
  name: 'Child',
  props:{
    parent: null,
    another: {
      type: String,
      required: true,
      validator(v){
        return v.trim() !== '';
      }
    },
    parentMsg: null,
    methodRet: null,
    computedRet: null,
    arrMsg: {
      type: Array,
      default: function(){
        return ['Bad', 'Day'];  // Only works if you don't pass props
      }
    }
  },

  data(){
    return {
      mine: 'Child Component',
      displayArr : ''
    }
  },
  computed:{
    arrTostr(){
      this.displayArr = this.arrMsg.slice();
      return this.displayArr.join('');
    }
  }
}
</script>
<style lang="sass" scoped>
.child-component
  border: 3px solid currentColor
  padding: 1.4em
  color: #c5af95
li
  margin: 5px 0
  display: block
</style>
