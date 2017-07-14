'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function (window, $) {
    'use strict';

    // Ask user to load jQuery first

    if (!$) {
        throw 'You must load jQuery first';
    }

    var Card = function () {
        function Card(selector) {
            _classCallCheck(this, Card);

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

        _createClass(Card, [{
            key: 'init',
            value: function init(selector) {
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
        }, {
            key: 'bindEvents',
            value: function bindEvents() {
                this.$btnToggle.on('click', this.toggle.bind(this));
                this.$btnSave.on('click', this.save.bind(this));
                this.$btnEdit.on('click', this.edit.bind(this));
                this.$btnDelete.on('click', this.delete.bind(this));
            }
        }, {
            key: 'shake',
            value: function shake() {
                this.$btnSave.on('click', function () {
                    $.shake(this.$element);
                }.bind(this));
            }
        }, {
            key: 'toggle',
            value: function toggle(e) {
                e.preventDefault();

                var $toggleIcon = this.$btnToggle.find('i');
                var $content = this.$content;
                var $footer = this.$footer;

                $toggleIcon.toggleClass('fa-angle-down fa-angle-up');

                // slideToggle on $content and $footer
                $content.add($footer).slideToggle();
            }
        }, {
            key: 'save',
            value: function save(e) {
                e.preventDefault();

                var editedText = this.$content.find('*:not(br, hr)');
                editedText.removeAttr('contenteditable');

                // Ajax to save data
                // ...
                // ...
            }
        }, {
            key: 'edit',
            value: function edit(e) {
                e.preventDefault();
                var editText = this.$content.find('*:not(br, hr)');
                editText.attr('contenteditable', 'true').first().focus();
            }
        }, {
            key: 'delete',
            value: function _delete(e) {
                e.preventDefault();

                this.$element.fadeOut('normal', function () {
                    // In this scope, this = this.$element
                    $(this).remove();
                });
            }
        }]);

        return Card;
    }();

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
    });
})(window, window.jQuery);