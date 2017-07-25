<template lang="pug">
#app.container.content
  .columns
    .column.is-6.is-offset-3
      .field
        label.label Name
        p.control
          input.input(
            :value='user.name'
            @input="detectEventBinding('name', $event)"
            type='text' 
            placeholder='Text input')
      .field
        label.label Username
        p.control.has-icon.has-icon-right
          input.input(
            type='text'
            placeholder='Text input'
            value='bulma')
          span.icon.is-small
            i.fa.fa-check
      .field
        label.label Email
        p.control.has-icon.has-icon-right
          input.input(v-model.lazy.trim="user.email" type='text' placeholder='Email input' value='hello@')
          span.icon.is-small
            i.fa.fa-warning
      .field
        label.label Subject
        p.control
          span(v-model="selected").select
            select
              option Select dropdown
              option With options
      .field
        label.label Message
        p.control
          textarea.textarea(
            @input="detectEventBinding('message', $event)"
            :value='user.message'
            placeholder='Input your message')
      .field
        p.control
          label.checkbox
            input(type='checkbox' v-model="user.checkboxEx" value="a")
            |         Remember a
          label.checkbox
            input(type='checkbox' v-model="user.checkboxEx" value="b")
            |         Remember b
          label.checkbox
            input(type='checkbox' v-model="user.checkboxEx" value="c")
            |         Remember c
          label.checkbox
            input(type='checkbox' v-model="user.checkboxEx" value="d")
            |         Remember d                                  
      .field
        p.control
          label.radio
            input(type='radio' name='question' v-model='user.role' value="junior")
            |         Yes
          label.radio
            input(type='radio' name='question' v-model='user.role' value="senior")
            |         No
      .field.is-grouped
        p.control
          button(v-if="user.role === 'senior'").button.is-primary Submit
        p.control
          button.button.is-link Cancel
      .field.is-grouped
        input.input(type="number" min="1" max="40")
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      user: {
        name: '',
        message: '',
        role: 'junior',
        checkboxEx: [],
        email: ''
      }
    }
  },
  methods:{
    detectEventBinding(target, e){
      let input = e.target.value;
      this.user[target] = input;
    },
  }
}
</script>

<style lang="sass" scoped>
// https://github.com/shakacode/sass-resources-loader
html
  font-size: 100%
  background: #fff
body
  margin: 0
#app
  margin-top: 30px
</style>
