

(function (window, $) {
    'use strict';

    $(function () {

        let $tabWrapper;
        let $tabPanels;
        let $prevBtn;
        let $nextBtn;
        let $tabList;
        let autoPlay = true;
        let duration = 1000;

        // Constructor
        function Carousel() {
            init();
            clickEvent();
            auto();
            resizeEvent();
        }

        let init = function () {

            $tabWrapper = $('.ui-carousel-tabpanel-wrapper');
            $tabPanels = $('.ui-carousel-tabpanel');
            $prevBtn = $('.ui-carousel-prev-button');
            $nextBtn = $('.ui-carousel-next-button');
            $tabList = $('.ui-carousel-tablist ul');

            let panelWidth;
            let length = $tabPanels.length;

            $tabPanels.each(function () {
                // set width, height, and other css properties for each panel item
                $(this)
                    .width($tabWrapper.width())
                    .height($tabWrapper.height())
                    .css({
                        'position': 'relative',
                        'text-align': 'center'
                    })
                    .find('img').css({
                        'margin': '0',
                        'position': 'relative',
                        'top': '50%',
                        'transform': 'translateY(-50%)'
                    });
            });

            panelWidth = $tabPanels.first().width();
            $tabWrapper.width(panelWidth * length);
            $tabWrapper.show(); // Showing after above code is executed
        }

        let auto = function () {

            let autoPlay = setInterval(nextClick, duration);

            $tabWrapper.on('mouseenter', function(){
                clearInterval(autoPlay);
            });
            $tabWrapper.on('mouseleave', function(){
                autoPlay = setInterval(nextClick, duration);
            })
            
        }

        let clickEvent = function () {

            $nextBtn.on('click', nextClick);
            $prevBtn.on('click', prevClick);

            // Event delegation
            $tabList.on('click', 'a', function (e) {
                e.preventDefault();
                $tabList.find('.active').removeClass('active');
                $(this).parent().addClass('active');

                let activeIndex = $(this).parent().index();
                $tabWrapper.animate({
                    'left': `-${$tabPanels.first().width() * activeIndex}px`
                }, 'fast');

            })
        }
        let nextClick = function () {

            if ($tabList.children().last().hasClass('active')) {
                $tabList.find('.active').removeClass('active');
                $tabList.children().first().addClass('active');
                $tabWrapper.animate({
                    'left': '0px'
                }, 'fast');
            } else {
                $tabList.find('.active').removeClass('active').next().addClass('active');
                $tabWrapper.animate({
                    "left": `-=${$tabPanels.first().width()}`
                }, "slow");
            }
        }
        let prevClick = function () {
            if ($tabList.children().first().hasClass('active')) {
                $tabList.find('.active').removeClass('active');
                $tabList.children().last().addClass('active');
                $tabWrapper.animate({
                    'left': `-${$tabPanels.first().width() * ($tabPanels.length-1)}px`
                }, 'fast');
            } else {
                $tabList.find('.active').removeClass('active').prev().addClass('active');
                $tabWrapper.animate({
                    "left": `+=${$tabPanels.first().width()}`
                }, "slow");
            }
        }

        let resizeEvent = function () {

            $(window).on('resize', function () {
                $tabWrapper.css('width', '100%');

                $tabPanels.each(function () {
                    $(this).width($tabWrapper.width());
                });

                $tabWrapper.width($tabPanels.first().width() * $tabPanels.length);

                if ($tabWrapper.css('left') !== '0px') {
                    let activeIndex = $tabList.find('.active').index();
                    $tabWrapper.css('left', `-${$tabPanels.first().width() * activeIndex}px`);
                }
            })
        }

        Carousel.prototype = {
            constructor: Carousel,
        }

        window.cr = new Carousel;
    });

})(window, window.jQuery);