(() => {
    'use strict';

    let vueData = {
        title: 'Number',
        count: 0
    }

    // If you don't initiate variables on mount
    // the variable doesn't react
    new Vue({
        el: '.app',
        data: vueData,
        methods: {
            increaseCount() {
                this.count++;
            },
            decreaseCount() {
                this.count--;
            }
        }
    })

})();