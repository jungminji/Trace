<template lang="pug">

  transition(:name="animeType")
    .columns(v-if="isVisible")
      .column.is-8.is-offset-2
        div(:class="msgStatus").message
          .message-header
            slot(name="headline")
              p {{ heading }}
            slot(name="heading" message="Pass this msg to props")

            button(@click="closeMsg").delete(aria-label="close message")
          .message-body
            slot
              p Default Message.
              
</template>

<script>
export default {
  name: 'period1',
  props: {
    heading: {
      type: String,
      default: 'Default Heading',
    },
    msgStatus: {
      type: String,
      default: 'is-primary'
    },
    animeType: {
      type: String,
      default: ''
    }
  },
  data(){
    return{
      isVisible: true
    }
  },
  methods: {
    closeMsg(){
      this.isVisible = false;
    }
  }
}
</script>

<style lang="sass" scoped>

</style>