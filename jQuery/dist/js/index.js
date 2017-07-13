"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

$(function () {
    // When document is ready, execute this callback function
    (function (global, $) {
        "use strict";

        console.log("DOM is ready");

        //- $("body").children().attr("class", "body-children");
    })(window, window.jQuery);
});

(function (window, $) {

    'use strict';

    // jQuery holdReady()

    $.holdReady(true); // Prevent executing $(document).ready function

    var id = "f0etn";
    var url = "https://api.myjson.com/bins/" + id;

    $.get(url).then(function (data) {
        console.log("Ajax Data Get");
        $.holdReady(false); // Executes $(document).ready function
    });
})(window, window.jQuery);

(function (window, $) {

    'use strict';

    console.log("jQuery version: " + $().jquery);
    console.log("jQuery version: " + $.fn.jquery);
    console.log("jQuery version: " + $.prototype.jquery);
    console.log("jQuery version: " + jQuery.prototype.jquery);
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
            return "*-" + name + "-*";
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
    if (!$.shake) {
        $.shake = function ($el) {
            var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2000;
            var shake = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
            var distance = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 5;

            var duration = time / shake / 4;
            $el.css('position', 'relative');
            $.when($el.stop().animate({
                left: -distance
            }, duration).animate({
                left: distance
            }, duration).animate({
                left: 0
            }, duration)).done(function () {
                return $el.removeAttr('style');
            });
        };
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

    var $deleteBtn = $('.notification .delete');
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

// Modal Control
// ((window, document, $) => {
//     'use strict';

//     let $target = $('.show-modal');
//     let $modal = $('.modal');

//     $target.on('click', function (e) {
//         $modal.addClass('is-active');
//     });

//     $modal.on('click', function (e) {
//         let $btn = $(e.target);

//         if ($btn.is('.delete') ||
//             $btn.is('.modal-background') ||
//             $btn.is('.is-danger')) {

//             close();
//         }
//     });

//     function close() {
//         $modal.removeClass('is-active');
//     }


// })(window, window.document, window.jQuery)

// Modal Control, Class

(function (window, document, $) {
    'use strict';

    var Modal = function () {
        function Modal(selector, trigger) {
            _classCallCheck(this, Modal);

            this.$node = $(selector);
            this.$btn = $(trigger);

            // When you trigger the event in js, 'this' will become its event target -> $btn, so bind to class instance again.
            this.$btn.on('click', this.open.bind(this));
            this.$node.find('.delete, .modal-background, .is-danger').on('click', this.close.bind(this));
        }

        _createClass(Modal, [{
            key: "open",
            value: function open() {
                this.$node.addClass('is-active');
            }
        }, {
            key: "close",
            value: function close() {
                this.$node.removeClass('is-active');
            }
        }]);

        return Modal;
    }();

    var modalInit = new Modal('.modal', '.show-modal');
})(window, window.document, window.jQuery);

// Media Object js template
(function (window, document, $) {
    'use strict';

    var imgURL = "https://api.myjson.com/bins/f0etn";
    var dataset = void 0;

    // Limits the number of data
    function limitTo(data, n) {
        return data.slice(0, n);
    }

    $.get(imgURL).then(function (data) {
        dataset = limitTo(data, 5);
        render(dataset);
    });

    function render(data) {

        var template = void 0;

        data.forEach(function (item) {
            var id = item.id.replace(/-/g, '');
            var name = item.firstName + " " + item.lastName;
            var image = item.image;
            var bio = item.bio;

            template += "<article class=\"media box\">\n                <figure class=\"media-left\">\n                    <p class=\"image is-64x64\">\n                        <img src=\"" + image + "\">\n                    </p>\n                </figure>\n                <div class=\"media-content\">\n                    <div class=\"content\">\n                        <p>\n                            <strong>" + name + "</strong> <small>@" + id + "</small> <small>31m</small>\n                            <br>\n                            " + bio + "\n                        </p>\n                    </div>\n                    <nav class=\"level is-mobile\">\n                        <div class=\"level-left\">\n                            <a class=\"level-item\">\n                                <span class=\"icon is-small\"><i class=\"fa fa-reply\"></i></span>\n                            </a>\n                            <a class=\"level-item\">\n                                <span class=\"icon is-small\"><i class=\"fa fa-retweet\"></i></span>\n                            </a>\n                            <a class=\"level-item\">\n                                <span class=\"icon is-small\"><i class=\"fa fa-heart\"></i></span>\n                            </a>\n                        </div>\n                    </nav>\n                </div>\n                <div class=\"media-right\">\n                    <button class=\"delete\"></button>\n                </div>\n            </article>";
        });

        var $contents = $('.media-object-container').html(template);
        var $btns = $contents.find('.delete');

        $btns.on('click', function () {
            $(this).parents('.media.box').slideUp("normal", function () {
                $(this).remove();
            });
        });
    }
})(window, window.document, window.jQuery);