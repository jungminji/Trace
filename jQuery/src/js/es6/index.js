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
        'font-size': '14px',
        'margin-bottom': '+=20px',
        'background': 'url("http://images.all-free-download.com/images/graphicthumb/seamless_floral_background_vector_148132.jpg") left top'
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


// Extending jQuery Library
(($) => {
    'use strict';

    if (!$.random) {
        $.random = n => Math.floor(Math.random() * n);
    }

    if (!$.cache) {
        $.cache = el => $.data(el, '$') || $.data(el, '$', $(el)); // Set data
    }

})(window.jQuery);


((window, document, $) => {

    'use strict';

    let $component,
        $lists,
        $labels,
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
        let $this = $(e.target);
        let $list = $this.parent().next();

        $list.toggle(time);
        $this.toggleClass('is-active');
    }

    function toggleSingleList(e) {
        e.preventDefault();

        let $this = $.cache(e.target);
        let $list = $this.parent().next();

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
((window, document, $) => {
    'use strict';

    let $deleteBtn = $('.notification .delete');
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

((window, document, $) => {
    'use strict';

    class Modal {
        constructor(selector, trigger) {
            this.$node = $(selector);
            this.$btn = $(trigger);

            // When you trigger the event in js, 'this' will become its event target -> $btn, so bind to class instance again.
            this.$btn.on('click', this.open.bind(this));
            this.$node.find('.delete, .modal-background, .is-danger').on('click', this.close.bind(this));
        }

        open() {
            this.$node.addClass('is-active');
        }

        close() {
            this.$node.removeClass('is-active');
        }
    }

    let modalInit = new Modal('.modal', '.show-modal');

})(window, window.document, window.jQuery);


// Media Object js template
((window, document, $) => {
    'use strict'

    let imgURL = `https://api.myjson.com/bins/f0etn`;
    let dataset;

    // Limits the number of data
    function limitTo(data, n) {
        return data.slice(0, n);
    }

    $.get(imgURL).then(data => {
        dataset = limitTo(data, 5);
        render(dataset);
    });

    function render(data) {

        let template;

        data.forEach(item => {
            let id = item.id.replace(/-/g, '');
            let name = `${item.firstName} ${item.lastName}`;
            let image = item.image;
            let bio = item.bio;

            template += `<article class="media box">
                <figure class="media-left">
                    <p class="image is-64x64">
                        <img src="${image}">
                    </p>
                </figure>
                <div class="media-content">
                    <div class="content">
                        <p>
                            <strong>${name}</strong> <small>@${id}</small> <small>31m</small>
                            <br>
                            ${bio}
                        </p>
                    </div>
                    <nav class="level is-mobile">
                        <div class="level-left">
                            <a class="level-item">
                                <span class="icon is-small"><i class="fa fa-reply"></i></span>
                            </a>
                            <a class="level-item">
                                <span class="icon is-small"><i class="fa fa-retweet"></i></span>
                            </a>
                            <a class="level-item">
                                <span class="icon is-small"><i class="fa fa-heart"></i></span>
                            </a>
                        </div>
                    </nav>
                </div>
                <div class="media-right">
                    <button class="delete"></button>
                </div>
            </article>`;
        });

        let $contents = $('.media-object-container').html(template);
        let $btns = $contents.find('.delete');

        $btns.on('click', function () {
            $(this).parents('.media.box').slideUp("normal", function () {
                $(this).remove();
            });
        });

    }

})(window, window.document, window.jQuery)