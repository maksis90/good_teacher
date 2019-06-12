'use strict';

(function($) {
    $(document).ready(function() {
        //PROFILE___ difficulty custom set selector

        $('.difficulty__item--select').click(function() {
            $('#custom_num').focus();
        });
        $('#custom_num').focus(function() {
            $('#custom').prop('checked', true);
        });

        //PROFILE___ input range validation
        jQuery.validator.setDefaults({
            debug: false,
            success: "validOn"
        });
        $("#difficulty").validate({
            rules: {
                field: {
                    required: true,
                    range: [11, 21]
                }
            }
        });

        // Code
        $('.friend__slider').slick({
            lazyLoad: 'ondemand',
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            autoplay: true,
            autoplaySpeed: 2000,
            // responsive: [{
            //         breakpoint: 768,
            //         settings: {
            //             arrows: false,
            //             centerMode: true,
            //             centerPadding: '40px',
            //             slidesToShow: 3
            //         }
            //     }
        });
    });
})(jQuery);