<template lang="pug">
  #app
    //- header.page-header
    //-   h1 Heading
    //-   img(:src="vue.path", :alt="vue.label" ref="logoImg")
    //- main.page-main
    //-   p {{ logoAlternateText }}
    //-   ul
    //-     li(ref="numbers" v-for="n in [3, 6, 9]") {{ n * n }}
    //- footer.page-footer

    Message(heading="알림")
    Message(msgStatus="is-info") This is sloted content.
    Message(heading="알림")
      span(slot="headline") 슬롯헤딩
      p Hello?
    Message(msgStatus="is-danger")
      template(slot="heading" scope="props")
        h3 {{ props.message }}

    Modal(ref="modalWindow" closeModalMsg="Close Modal(binded aria)"
    :isVisible="false")
      p.image.is-16by9
        img(src="https://media.giphy.com/media/Ejn6xH5mnmtMI/giphy.gif" alt="placeholder")
    
    button.button.is-info(@click="openModal") Open Modal

    //- 직접 에셋 속성을 설정하는 경우, assets/ 디렉토리에서 찾아야 이미지 출력
    //- file-loader를 통해 아래와 같이 처리되기 때문
    //- /dist/logo.png?82b9c7a5a3f405032b1db71a25f67021
    //- img(src="./assets/logo.png", :alt="vue.label")
</template>

<script>
import Message from './Message'
import Modal from './Modal'

export default {
  name: 'app',
  mounted(){
    let app = this.$el;
    // this.logoAlternateText = app.querySelector('img').getAttribute('alt');
    // this.logoAlternateText = this.$refs.logoImg.alt;
    // this.logoSrc = this.$refs.logoImg.src;

    // console.log(this.$refs);

  },
  data () {
    return {
      vue: {
        // 동적 속성 바인딩 시에는 src/ 디렉토리에서 찾아야 이미지 출력
        // file-loader를 사용하지 않고, 직접 속성 값을 설정하기 때문
        path: './src/assets/logo.png',
        label: 'Vue.js'
      },
      logoAlternateText: '',
      logoSrc: ''
    }
  },
  methods: {
    openModal(){
      console.log(this.$refs.modalWindow.display);
      this.$refs.modalWindow.display = true;
    }
  },
  components:{
    Message,
    Modal
  }
}
</script>

<style lang="sass">
  // @import "~yamoo9"
  // html
  //   font-size: 100%
  //   background: #fff
  // body
  //   margin: 0
  //   +size(100vw 80vh)
  body
    padding-top: 35px
</style>
