var app = (function ($) {
    "use strict";

    /** Private properties */

    /** Private methods */


    return {
        /**
         * Tabs
         *
         * use: data-tab-wrap, data-tab-link, data-tab-body
         * */
        tabs: function () {
            $('[data-tab-link]').on('click', function () {
                var index = $(this).data('tab-link');

                $(this)
                    .addClass('active')
                    .siblings()
                    .removeClass('active');

                $(this)
                    .parents('[data-tab-wrap]')
                    .find('[data-tab-body="' + index + '"]')
                    .addClass('active')
                    .siblings()
                    .removeClass('active');
            });
        },

        /**
         * Toggle mobile menu
         * */
        mobileMenu: function () {
            $('.nav_hamburger').on('click', function () {
                $(this).toggleClass('active');
            });
        },

        resizeFontSize: function () {
            var windowWidth = $(window).width();

            if (windowWidth <= 1024) {
                $('section:not(.application)').find('*').each(function () {
                    var fontSizePrev = parseInt($(this).css('font-size'));

                    if (fontSizePrev > 16) {
                        $(this).css('font-size', fontSizePrev * 0.8);

                        if (windowWidth <= 768) {
                            fontSizePrev = parseInt($(this).css('font-size'));

                            if (fontSizePrev > 16) {
                                $(this).css('font-size', fontSizePrev * 0.9);

                                if (windowWidth <= 480) {
                                    fontSizePrev = parseInt($(this).css('font-size'));

                                    if (fontSizePrev > 16) {
                                        $(this).css('font-size', fontSizePrev * 0.9);
                                    }
                                }
                            }
                        }
                    }
                });
            }
        },

        init: function() {
            app.tabs();
            app.mobileMenu();
            app.resizeFontSize();
        }

    };

})(jQuery);

/**
 * Document ready
 * */
document.addEventListener("DOMContentLoaded", app.init);

/**
 * Window scroll
 * */
window.onscroll = function () {

};

/**
 * Window resize
 * */
window.onresize = function () {
    // app.resizeFontSize();
};