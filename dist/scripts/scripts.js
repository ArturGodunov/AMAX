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

        init: function() {
            app.tabs();
            app.mobileMenu();
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

};