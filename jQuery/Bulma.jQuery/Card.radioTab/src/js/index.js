(function (window, $) {
    'use strict';

    // Ask user to load jQuery first
    if (!$) {
        throw 'You must load jQuery first';
    }

    class Card {
        constructor(selector) {
            // Class info
            this.author = "Jungmin Ji";
            this.version = "0.0.1";

            // Target element
            this.$element;

            // Buttons
            this.$btnToggle;
            this.$btnSave;
            this.$btnEdit;
            this.$btnDelete;

            // Initialize
            this.init(selector);
        }

        init(selector) {
            // If selector is NOT a jQuery object
            if (!$(selector).length) {
                throw 'You must select proper element!';
            }

            // Card selector
            this.$element = $(selector);

            // Card contents and footer
            this.$content = this.$element.find('.card-content');
            this.$footer = this.$element.find('.card-footer');

            // Assigning buttons and bind event
            this.$btnToggle = this.$element.find('.card-toggle-btn');
            this.$btnSave = this.$element.find('.card-save-btn');
            this.$btnEdit = this.$element.find('.card-edit-btn');
            this.$btnDelete = this.$element.find('.card-delete-btn');

            // Bind: Events
            this.bindEvents();

            // Attach: Shake animation
            this.shake();
        }

        bindEvents() {
            this.$btnToggle.on('click', this.toggle.bind(this));
            this.$btnSave.on('click', this.save.bind(this));
            this.$btnEdit.on('click', this.edit.bind(this));
            this.$btnDelete.on('click', this.delete.bind(this));
        }

        shake() {
            this.$btnSave.on('click', function () {
                $.shake(this.$element);
            }.bind(this));
        }


        toggle(e) {
            e.preventDefault();

            let $toggleIcon = this.$btnToggle.find('i');
            let $content = this.$content;
            let $footer = this.$footer;

            $toggleIcon.toggleClass('fa-angle-down fa-angle-up');

            // slideToggle on $content and $footer
            $content.add($footer).slideToggle();
        }
        save(e) {
            e.preventDefault();

            let editedText = this.$content.find('*:not(br, hr)');
            editedText.removeAttr('contenteditable');

            // Ajax to save data
            // ...
            // ...

        }
        edit(e) {
            e.preventDefault();
            let editText = this.$content.find('*:not(br, hr)');
            editText.attr('contenteditable', 'true').first().focus();
        }
        delete(e) {
            e.preventDefault();

            this.$element.fadeOut('normal', function () {
                // In this scope, this = this.$element
                $(this).remove();
            });
        }
    }

    // Card instances
    new Card('.twitter');
    new Card('.facebook');

})(window, window.jQuery);


// Tab control
(function (window, $) {
    'use strict';

    $('.radio-tab').find('[role="tab"]').on('click', function () {
        console.log($(this));
        $(this).parent().radioClass('is-active');
    })

})(window, window.jQuery);



// Experimental: Swipe
(function (window, $) {
    'use strict';

    $('.touchzone').swipe();
    
})(window, window.jQuery);