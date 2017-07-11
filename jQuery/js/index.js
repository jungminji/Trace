'use strict';

(function (window, $) {

    'use strict';

    var id = 'f0etn';
    var url = 'https://api.myjson.com/bins/' + id;

    $.get(url).then(function (data) {
        return console.log(data);
    });
})(window, window.jQuery);

(function (window, $) {

    'use strict';

    console.log('jQuery version: ' + $().jquery);
    console.log('jQuery version: ' + $.fn.jquery);
    console.log('jQuery version: ' + $.prototype.jquery);
    console.log('jQuery version: ' + jQuery.prototype.jquery);
})(window, window.jQuery);

(function (window, $) {

    'use strict';

    $('h1').css('color', 'tan').addClass('is-3').removeClass('is-1');

    $('h1').on('click', function (e) {
        console.log(e.target);
        console.log(e.currentTarget);

        // using function keyword 'this' points to event target
        // using arrow function 'this' points to its parent context
        console.log(undefined); // undefined
    });

    var $window = $(window);
    var $main = $('.main');

    $(window).on('scroll', function () {
        // let offset = this.scrollY || this.scrollTop;
        // let $main = $('.main');

        // if (offset > 123) {
        //     $main.addClass('is-fixed');
        // } else {
        //     $main.removeClass('is-fixed');
        // }


        this.scrollTop() > 123 ? $main.addClass('is-fixed') : $main.removeClass('is-fixed');
    }.bind($window));
})(window, window.jQuery);

(function (window, document, $) {
    'use strict';

    // Factory function jQuery()

    // Element node

    var $body = $(document.body);
    var styleMap = {
        'font-size': '32px',
        'margin-bottom': '+=20px',
        'background': 'url("//placehold.it/1920x1080") left top \/ cover no-repeat'
    };
    $body.css(styleMap);

    // Node list
    var $bodyChildren = $(document.body.children);
    // Thie data attribute is visible on html
    $bodyChildren.attr('data-children-of-body', 'yes');

    // Array
    $([document.documentElement, document.body]).each(function (index, element) {
        var $el = $(element);

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
    var $div = $('<div/>', {
        'class': 'example',
        'on': {
            'click': function click(e) {
                return $(e.target).remove();
            },
            'mouseenter': function mouseenter(e) {
                return $(e.target).css('background-color', 'hsla(249.7, 100%, 65.9%, 0.7)');
            },
            'mouseleave': function mouseleave(e) {
                return $(e.target).css('background-color', $div.data('original-dim-bg'));
            }
        }
    }).prependTo($body);

    $div.data('original-dim-bg', $div.css('background-color'));
})(window, window.document, window.jQuery);

// jQuery.noConflict(true);