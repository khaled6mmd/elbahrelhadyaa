$(function () {
    var closeIcon = $('.close-icon')
    var menuIcon = $('.menu-icon');
    closeIcon.hide();
    (closeIcon).add(menuIcon).on('click', function () {
        $('.mobile-menu').toggleClass('active');
        closeIcon.toggle();
        menuIcon.toggle();
    });


});

$('.main-header__carousel-head').owlCarousel({
    loop: true,
    nav: true,
    navText: ["<i class='fas fa-chevron-circle-right'></i>", "<i class='fas fa-chevron-circle-left'></i>"],
    rtl: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3500,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
    }
})




$(function () {
    var owl = $('.owl-carousel'),
        owlOptions = {
            loop: true,
            nav: false,
            rtl: true,
            dots: true,
            margin: 10,
            center: true,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 3
                }
            }
        };

    if ($(window).width() <= 768) {
        var owlActive = owl.owlCarousel(owlOptions);
    } else {
        owl.addClass('off');
    }

    $(window).resize(function () {
        if ($(window).width() <= 768) {
            if ($('.owl-carousel').hasClass('off')) {
                var owlActive = owl.owlCarousel(owlOptions);
                owl.removeClass('off');
            }
        } else {
            if (!$('.owl-carousel').hasClass('off')) {
                owl.addClass('off').trigger('destroy.owl.carousel');
                owl.find('.owl-stage-outer').children(':eq(0)').unwrap();
            }
        }
    });
});