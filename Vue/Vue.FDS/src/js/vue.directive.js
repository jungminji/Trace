((window) => {
    'use strict';

    new Vue({
        el: '#app',
        data: {
            msg: 'v-text example',
            show: true,
            markup: `
            <p v-if='show'>v-html example, data bind won't work</p>
            `,
            forObj:{
                name: 'Jungmin',
                age: 27,
                gf: 'mmooni'
            },
            forArr: [
                'Special', 'Location', 'Detected'
            ]
        }
    })

})(window);