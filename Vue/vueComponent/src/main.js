import Vue from 'vue';
import App from './App.vue';


Vue.component('app-subject', {
  template: `
    <div class="compoent-root">
      <h3> {{subject}} </h3>
    </div>
  `,
  data(){
    return {
    subject: 'Vue Component!'
    }
  }
});

new Vue({
  el: '#app',
  // components: {
  //   'app-subject' : {
  //     name: 'App Component',
  //     template: ``,
  //     data(){

  //     }
  //   }
  // },
  render: h => h(App)
});
