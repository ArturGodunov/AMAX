var app = (function ($) {
    "use strict";

    /** Private properties */

    /** Private methods */


    return {
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

        init: function() {
            app.tabs();
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