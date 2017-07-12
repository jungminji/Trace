'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function (window, $) {

    'use strict';

    // jQuery holdReady()

    $.holdReady(true); // Prevent executing $(document).ready function

    var id = 'f0etn';
    var url = 'https://api.myjson.com/bins/' + id;

    $.get(url).then(function (data) {
        console.log("Ajax Data Get");
        $.holdReady(false); // Executes $(document).ready function
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
        this.scrollTop() > 123 ? $main.addClass('is-fixed') : $main.removeClass('is-fixed');
    }.bind($window));
})(window, window.jQuery);

(function (window, document, $) {
    'use strict';

    // Factory function jQuery()

    // Element node

    var $body = $(document.body);
    var styleMap = {
        'font-size': '14px',
        'margin-bottom': '+=20px',
        'background': 'url("http://images.all-free-download.com/images/graphicthumb/seamless_floral_background_vector_148132.jpg") left top'
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

// addClass, Array maps
(function (window, document, $) {
    'use strict';

    $('.app').addClass(function (index, name) {
        var names = name.split(' ');
        console.log(names); // ["app", "container"]

        var converted = names.map(function (name) {
            return '*-' + name + '-*';
        });

        converted = converted.join(' ');

        return converted;
    });
})(window, window.document, window.jQuery);

// Extending jQuery Library
(function ($) {
    'use strict';

    if (!$.random) {
        $.random = function (n) {
            return Math.floor(Math.random() * n);
        };
    }

    if (!$.cache) {
        $.cache = function (el) {
            return $.data(el, '$') || $.data(el, '$', $(el));
        }; // Set data
    }
})(window.jQuery);

(function (window, document, $) {

    'use strict';

    var $component = void 0,
        $lists = void 0,
        $labels = void 0,
        time = 300,
        isMultiToggle = false;

    function init() {

        $component = $('.ui-accordion');
        $lists = $component.find('.menu-list');
        $labels = $('.menu-label a', $component);

        bind();

        $lists.hide();
        $labels.eq($.random($labels.length)).trigger('click');
    }

    function bind() {
        $labels.on('click', isMultiToggle ? toggleList : toggleSingleList);
    }

    function toggleList(e) {
        e.preventDefault();
        var $this = $(e.target);
        var $list = $this.parent().next();

        $list.toggle(time);
        $this.toggleClass('is-active');
    }

    function toggleSingleList(e) {
        e.preventDefault();

        var $this = $.cache(e.target);
        var $list = $this.parent().next();

        // console.log($this instanceof $);

        // UI/UX: Just to make cursor to be default
        $this.css('cursor', 'default');

        if ($this.hasClass('is-active')) {
            $this.effect('bounce', {
                times: 2
            }, time);
            return;
        }
        $labels.filter('.is-active').removeClass('is-active');
        $lists.filter(':visible').hide(time);
        $this.addClass('is-active');
        $list.show(time);
    }

    init();
})(window, window.document, window.jQuery);

// Notification
(function (window, document, $) {
    'use strict';

    var $deleteBtn = $('.delete');
    $deleteBtn.hide();

    $deleteBtn.parent().on('mouseenter', function () {
        $(this).children().filter('.delete').show('slow');
    });

    $deleteBtn.parent().on('mouseleave', function () {
        $(this).children().filter('.delete').hide('hide');
    });

    $deleteBtn.on('click', function () {
        $(this).parent().fadeOut(300, function () {
            $(this).remove();
        });
    });
})(window, window.document, window.jQuery);

// Class for notification

var Notification = function () {
    function Notification(selector) {
        var _this = this;

        _classCallCheck(this, Notification);

        if ($.type(selector) !== 'string') {
            throw 'You must pass CSS selector';
        }
        if (selector.trim() === '') {
            throw 'You have passed an Empty arguments';
        }
        if (!this) {
            throw 'new ... um is this necessary?';
        }

        this.$elements = $(selector);
        this.$elements.each(function (index) {
            var $el = _this.$elements.eq(index);
            $el.find('.delete').on('click', _this.close.bind($el));
        });
    }

    _createClass(Notification, [{
        key: 'close',
        value: function close() {
            $(this).remove();
        }
    }]);

    return Notification;
}();