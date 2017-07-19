((window) => {
    'use strict';

    new Vue({
        el: '#app',
        data: {
            msg: 'v-text example',
            show: true,
            markup: `
            <p v-if='show'>v-html example, data bind won't work</p>
            `
        }
    })

})(window);