import Vue from 'vue';
import Vue2Filters from 'vue2-filters'
import App from './App';



Vue.use(Vue2Filters)

// Global vue filter
Vue.filter('uppercase', v => v.toString().toUpperCase());
Vue.filter('lowercase', v => v.toString().toLowerCase());
Vue.filter('currency', (v, curr = '원') => curr === '원' ? v.toString() + '원' : v.toString() + curr);
Vue.filter('number', v => {
  let arr = v.toString().split('').reverse();

  for (let i = 0; i < arr.length; i++) {
    if (i % 4 === 0) {
      arr.splice(i, 0, ",");
    }
  }
  arr.shift();

  return arr.reverse().join('');
})

Vue.directive('focus', {
  inserted: function (el) {
    console.log(el);
    el.onclick = function(){
      alert('Hi?');
    }
    el.focus();
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
});
