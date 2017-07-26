<template lang="pug">
  .app.layout
    header.app-header
      slot(name="header" youAre="BLABLA!!!")
      h1.app-brand
        a
          img(:src="brand.image"
          :alt="brand.desc")
    main.app-main
      slot(customPROP="This is a text prop")
    footer.app-footer
      slot(name="footer")
        address {{copyright}}
</template>

<script>
export default {
  data(){
    return{
      brand:{
        image: 'https://media.giphy.com/media/m6OomwWCojfS8/giphy.gif',
        desc: 'Minions:Bob'
      },
      copyright: '오늘 개봉했음'
    }
  }
}
</script>

<style lang="sass">

</style>
