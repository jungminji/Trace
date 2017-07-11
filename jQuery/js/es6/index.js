((window, $) => {

    'use strict';

    // jQuery holdReady()

    $.holdReady(true); // Prevent executing $(document).ready function

    let id = `f0etn`;
    let url = `https://api.myjson.com/bins/${id}`;

    $.get(url).then(data => {
        console.log("Ajax Data Get");
        $.holdReady(false); // Executes $(document).ready function
    });

})(window, window.jQuery);



((window, $) => {

    'use strict';

    console.log(`jQuery version: ${$().jquery}`);
    console.log(`jQuery version: ${$.fn.jquery}`);
    console.log(`jQuery version: ${$.prototype.jquery}`);
    console.log(`jQuery version: ${jQuery.prototype.jquery}`);

})(window, window.jQuery);


((window, $) => {

    'use strict';

    $('h1')
        .css('color', 'tan')
        .addClass('is-3')
        .removeClass('is-1');

    $('h1').on('click', e => {
        console.log(e.target);
        console.log(e.currentTarget);

        // using function keyword 'this' points to event target
        // using arrow function 'this' points to its parent context
        console.log(this); // undefined
    })

    let $window = $(window);
    let $main = $('.main');

    $(window).on('scroll', function () {
        // let offset = this.scrollY || this.scrollTop;
        // let $main = $('.main');

        // if (offset > 123) {
        //     $main.addClass('is-fixed');
        // } else {
        //     $main.removeClass('is-fixed');
        // }


        this.scrollTop() > 123 ?
            $main.addClass('is-fixed') :
            $main.removeClass('is-fixed');

    }.bind($window));

})(window, window.jQuery);


((window, document, $) => {
    'use strict';

    // Factory function jQuery()

    // Element node
    let $body = $(document.body);
    let styleMap = {
        'font-size': '32px',
        'margin-bottom': '+=20px',
        'background': 'url("//placehold.it/1920x1080") left top \/ cover no-repeat'
    };
    $body.css(styleMap);


    // Node list
    let $bodyChildren = $(document.body.children);
    // Thie data attribute is visible on html
    $bodyChildren.attr('data-children-of-body', 'yes');

    // Array
    $([document.documentElement, document.body]).each((index, element) => {
        let $el = $(element);

        // Using jQuery .data add data- attribute but not visible on html
        // However, you can access the value:  $el.data('is-root');
        if ($el.localName === 'html') {
            $el.data('is-root', 'Yes');
        } else {
            $el.data('is-root', 'No');
        }
        console.log($el);
    });


    // jQuery Object, you can pass jQuery object into jQuery factory function
    // $($body)

    // CSS and data-
    let $div = $('<div/>', {
            'class': 'example',
            'on': {
                'click': e => $(e.target).remove(),
                'mouseenter': e => $(e.target).css('background-color', 'hsla(249.7, 100%, 65.9%, 0.7)'),
                'mouseleave': e => $(e.target).css('background-color', $div.data('original-dim-bg'))
            }
        })
        .prependTo($body);

    $div.data('original-dim-bg', $div.css('background-color'))

})(window, window.document, window.jQuery);

// jQuery.noConflict(true);

// addClass, Array maps
((window, document, $) => {
    'use strict';
    $('.app').addClass((index, name) => {
        let names = name.split(' ');
        console.log(names); // ["app", "container"]

        let converted = names.map(name => {
            return `*-${name}-*`;
        });

        converted = converted.join(' ');

        return converted;
    });

})(window, window.document, window.jQuery);



((window, document, $) => {
    'use strict';

    let $box = $('.box');

    let toggleBox = function () {
        if ($box.hasClass('hide')) {
            $box.removeClass('hide');
        }
    };

    // Toggle
    $box.addClass('hide');

    $('.toggle-box').on('click', toggleBox);

})(window, window.document, window.jQuery);


((window, document, $) => {
    'use strict'

    let $component;

    // Component Accordion
    function init() {
        $component = $('.ui-accordion');
        let $lists = $component.find('.menu-list');

        // Hide except the first one
        $lists.filter((index) => {
            return index > 0
        }).hide();

        eventBind();
    }

    function eventBind() {
        $('.menu-label a', $component).on('click', function (e) {
            e.preventDefault();
            let animation_duration = 500;
            let $list = $(e.target).parent().next();

            if ($list.css('display') === 'none')
                if ($list.is(':visible')) {
                    $list.hide(animation_duration);
                    $(this).removeClass('is-active');
                } else {
                    $list.show(animation_duration);
                    $(this).addClass('is-active');
                }
        });
    }

    init();

})(window, window.document, window.jQuery);