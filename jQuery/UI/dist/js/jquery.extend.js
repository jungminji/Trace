'use strict';

(function ($) {
  'use strict';

  // jQuery entended static methods

  if (!$.random) {
    $.random = function (n) {
      return Math.floor(Math.random() * n);
    };
  }

  if (!$.cache) {
    $.cache = function (el) {
      return $.data(el, '$el') || $.data(el, '$el', $(el));
    };
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

  // jQuery prototype extended methods
  if (!$.fn.radioClass) {
    $.fn.radioClass = function () {
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'active';

      this.siblings('.' + name).removeClass(name);
      this.addClass(name);

      return this;
    };
  }
})(window.jQuery);