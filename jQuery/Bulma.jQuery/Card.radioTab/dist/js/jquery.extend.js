'use strict';

(function (window, $) {
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

  if (!$.fn.swipe) {
    $.fn.swipe = function () {
      var $this = this;

      return $.each($this, function (i, el) {
        var $el = $this.eq(i);

        console.log($el);
        console.log(el);

        var touch;
        var startX;
        var startY;
        var moveX;
        var moveY;
        var distanceX;
        var distanceY;
        var endX;
        var endY;

        // Touch Event (Mobile): touchstart, touchmove, touchend, touchenter, touchleave, touchcancel
        $el.on({
          touchstart: function touchstart(e) {
            e.preventDefault();
            touch = e.changedTouches[0];
            startX = window.parseInt(touch.clientX, 10);
            startY = window.parseInt(touch.clientY, 10);
            console.log('startX : ' + startX);
            console.log('startY : ' + startY);
          },
          touchmove: function touchmove(e) {
            e.preventDefault();
            touch = e.changedTouches[0];
            moveX = window.parseInt(touch.clientX, 10);
            moveY = window.parseInt(touch.clientY, 10);
            distanceX = window.parseInt(moveX - startX, 10);
            distanceY = window.parseInt(moveY - startY, 10);

            // Swipe direction
            distanceX = distanceX > 0 ? 'right' : 'left';
            distanceY = distanceY > 0 ? 'down' : 'up';

            console.log('moveX : ' + moveX);
            console.log('moveY : ' + moveY);
            console.log('distanceX : ' + distanceX);
            console.log('distanceY : ' + distanceY);
          },
          touchend: function touchend(e) {
            e.preventDefault();
            touch = e.changedTouches[0];
            endX = window.parseInt(touch.clientX, 10);
            endY = window.parseInt(touch.clientY, 10);
            console.log('endX : ' + endX);
            console.log('endY : ' + endY);
          }
        });

        // Mouse Event (Desktop): mousedown, mousemove, mouseup, mouseenter, mouseleave

      });
    };
  }
})(window, window.jQuery);