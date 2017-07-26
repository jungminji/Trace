<template lang="pug">
  #app.container(v-cloak)
    //- .columns
    //-   .column.is-10.is-offset-1
    //-     Parent
          //- Child
    .columns
      .column.is-10.is-offset-1
        AppLayout
          template(slot="header" scope="props")
            h1.box {{props.youAre}}
            h1.box This is header slot
          template(lang="en" scope="props")
            h1.box {{props.customPROP}}
            h1.box No named slot
          div(slot="footer")
            h1.box This is footer slot
    .columns
      .column.is-10.is-offset-1
        //- Count
        TotalCounter(:counters="counters"
                    :appMood="mood")
        br
        br
        br
        TotalCounter
</template>

<script>

import Parent from './components/Parent'
import Child from './components/Child'
import TotalCounter from './components/TotalCounter'

import EventBus from './EventBus.js'

import AppLayout from './components/AppLayout'

export default {
  name: 'app',
  components: {
    Parent,
    Child,
    TotalCounter,
    AppLayout
  },
  mounted(){
    console.log(this);
    EventBus.$on('to-evb', (a, b) => {
      this.counters.push(10);
    })
  },
  data(){
    return {
      counters: [1,0,3,5,6],
      mood: 'Happy'
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
