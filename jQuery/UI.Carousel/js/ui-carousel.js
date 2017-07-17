(function (window, $) {
    'use strict';

    $(function () {

        let $tabWrapper;
        let $tabPanels;
        let $prevBtn;
        let $nextBtn;
        let $tabList;

        // 캐러셀 생성자 함수
        function Carousel() {
            $tabWrapper = $('.ui-carousel-tabpanel-wrapper');
            $tabPanels = $('.ui-carousel-tabpanel');
            $prevBtn = $('.ui-carousel-prev-button');
            $nextBtn = $('.ui-carousel-next-button');
            $tabList = $('.ui-carousel-tablist ul');
            init();
            eventBind();
            resizeEvent();
        }

        let init = function () {

            let panelWidth;
            let length = $tabPanels.length;

            $tabPanels.each(function () {
                // 각 패널 아이템의 css 속성과 크기 설정
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

            // 패널 래퍼의 크기 설정
            $tabWrapper.width(panelWidth * length);
        }

        // 클릭 이벤트 바인딩
        let eventBind = function () {

            $prevBtn.on('click', function () {

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
            })

            $nextBtn.on('click', function () {


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
            })

            // Event delegation
            $tabList.on('click', 'a', function (e) {
                e.preventDefault();
                $tabList.find('.active').removeClass('active');
                $(this).parent().addClass('active');

                // Find nth of
                let activeIndex = $(this).parent().index();
                $tabWrapper.animate({
                    'left': `-${$tabPanels.first().width() * activeIndex}px`
                }, 'fast');

            })
        }
        let resizeEvent = function () {

            $(window).on('resize', function () {
                // 현재 window width 가져옴
                $tabWrapper.css('width', '100%');

                // panel 들은 window width 를 가지게됨
                $tabPanels.each(function () {
                    $(this).width($tabWrapper.width());
                });

                // 래퍼 width 를 패널 하나의 값 * 갯수
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


        new Carousel;
    });

})(window, window.jQuery);