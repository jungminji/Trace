<template lang="pug">
  #app.container(v-cloak)
    //- .columns
    //-   .column.is-10.is-offset-1
    //-     Parent
          //- Child
    .columns
      .column.is-10.is-offset-1
        //- Count
        TotalCounter(:counters="counters")
        br
        br
        br
        TotalCounter
</template>

<script>

import Parent from './components/Parent'
import Child from './components/Child'
import TotalCounter from './components/TotalCounter'



export default {
  name: 'app',
  components: {
    Parent,
    Child,
    TotalCounter
  },
  data(){
    return {
      counters: [1,0,3,5,6]
    }
  },
}

</script>

<style lang="sass" scoped>
#app
  margin-top: 35px

[v-cloak]
  display: none

</style>
