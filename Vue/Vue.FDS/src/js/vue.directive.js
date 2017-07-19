((window) => {
    'use strict';

    const vm = new Vue({
        el: '#app',
        data: {
            msg: 'v-text example',
            show: true,
            markup: `
            <p v-if='show'>v-html example, data bind won't work</p>
            `,
            forObj: {
                name: 'Jungmin',
                age: 27,
                gf: 'mmooni'
            },
            forArr: [
                'Special', 'Location', 'Detected'
            ],
            added: ''
        },
        methods: {
            changeMode() {
                this.show = !this.show;
            },
            addItem() {
                let input = document.querySelector('.add-input');
                this.$set(vm.forObj, 'user_input', input.value);
            },
            getContent(e){
                this.msg = e.target.value;
            }
        },

        // Life Cycle
        beforeCreate() {
            console.log('beforeCreated');

        },
        created() {
            console.log('created');
        },
        beforeMount() {
            console.log('beforeMount');

        },
        mounted() {
            console.log('mounted');

            let addBtn = document.querySelector('.add-btn');
            addBtn.addEventListener('click', this.addItem);
        }
    })

    window.vm = vm;

    // You can add reactive element using Vue.set || vm.$set

})(window);


// Object define property
const fds = {};

{
    let name = '';
    let notify = function (msg) {
        console.log(msg);
    };
    Object.defineProperty(fds, 'name', {
        get: function () {
            return name;
        },
        set: function (v) {
            notify(v);
            name = v;
        }
    })
}


// Instance
// Lifi Cycle Hook
// methods: {}
// Conditional render
    // v-if, v-else, v-else-if, v-show

// Iteration
    // v-for (Object, Array, Number, String)

// Directive
    // v-text, v-html, v-once, v-cloak
    // v-on, v-bind, v-model