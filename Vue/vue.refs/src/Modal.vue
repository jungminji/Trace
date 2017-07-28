<template lang="pug">
  transition(name="slide")
    .modal(v-if="display" class="is-active")
      .modal-background(@click="closeModal")
      .modal-content.box
        slot
          | Default Modal Content.
      button.modal-close(@click="closeModal"
      :aria-label="closeModalMsg")                                
</template>

<script>
export default {
  props: {
    closeModalMsg: {
      type: String,
      default: 'Close Modal'
    },
    isVisible: {
      type: Boolean,
      default: false
    }
  },
  data(){
    return{
      display: this.isVisible
    }
  },
  methods: {
    closeModal(){
      this.display = false
    }
  }
}
</script>

<style lang="sass">

</style>