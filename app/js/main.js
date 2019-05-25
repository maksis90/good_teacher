'use strict';

(function ($) {
    $(document).ready(function () {
        // Code
        $('.slider').slick({
            lazyLoad: 'ondemand',
            slidesToShow: 3,
            slidesToScroll: 1
        });
    });
})(jQuery);
